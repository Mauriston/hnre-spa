/**
 * Export do Painel do Pronto-Atendimento (HNRe) — Apps Script ligado à planilha
 * 1uYy8uU8n9_dHRI8oseIqrOAY3qREgE4pnW0swc6dp10.
 *
 * Publica, como Web App, o snapshot COMPACTO E ANONIMIZADO que o dashboard consome
 * (window.PA_DATA). Nenhum nome, NIP, telefone, idade ou quadro clínico sai daqui:
 * o nome do paciente é usado só internamente para calcular a "continuidade".
 *
 * Formato (igual ao data/pa-data.js original):
 *   P: dia(desde 24/03/2025),turno,sup,pl1,pl2,pl3,atend,int,transf,enc,maAfast,maBaix,obitos,alaA,alaB
 *      (índices 1-based nas listas sup/pl; 0 = vazio)
 *   E: plantao(linha 1-based em P),tipo,sexo,destino,especialidade,cid,continuidade
 *      (continuidade = nº de eventos do mesmo paciente nos 3 dias anteriores)
 *
 * Implantação: veja apps-script/README.md.
 */

var PA_CFG = {
  SPREADSHEET_ID: '1uYy8uU8n9_dHRI8oseIqrOAY3qREgE4pnW0swc6dp10',
  ABA_PLANTOES: 'tb_plantoes',
  ABA_EVENTOS: 'tb_pacientes_eventos',
  ABA_CID: 'CID-10',
  BASE: '2025-03-24',
  JANELA_CONTINUIDADE: 3,
  GITHUB_REPO: 'Mauriston/hnre-spa',
  GITHUB_EVENTO: 'atualizar-dados'
};

/** Endpoint do Web App. Se a propriedade EXPORT_TOKEN existir, exige ?token=... */
function doGet(e) {
  var tok = PropertiesService.getScriptProperties().getProperty('EXPORT_TOKEN');
  if (tok && (!e || !e.parameter || e.parameter.token !== tok)) {
    return json_({ erro: 'token inválido' });
  }
  return json_(exportarPaData());
}

function exportarPaData() {
  var ss = SpreadsheetApp.openById(PA_CFG.SPREADSHEET_ID);
  var tz = ss.getSpreadsheetTimeZone();
  var vals = function (nome) {
    var sh = ss.getSheetByName(nome);
    return sh ? sh.getDataRange().getValues() : [[]];
  };
  return buildPaData(vals(PA_CFG.ABA_PLANTOES), vals(PA_CFG.ABA_EVENTOS), vals(PA_CFG.ABA_CID), {
    fmtDate: function (d) { return Utilities.formatDate(d, tz, 'yyyy-MM-dd'); },
    hoje: Utilities.formatDate(new Date(), tz, 'dd/MM/yyyy')
  });
}

/** Teste manual no editor: registra o tamanho do export. */
function testarExport() {
  var d = exportarPaData();
  Logger.log('plantões: %s · eventos: %s · CIDs: %s', d.P.split(';').length, d.E.split(';').length, d.cid.split('~').length);
}

/**
 * Função pura (sem APIs do Google) — também roda em Node para testes.
 * plV / evV / cidV: matrizes de valores com cabeçalho na 1ª linha.
 */
function buildPaData(plV, evV, cidV, opt) {
  opt = opt || {};
  var DAY = 864e5;
  var base = isoToUtc_(PA_CFG.BASE);
  var str = function (v) { return v == null ? '' : String(v).trim(); };
  var num = function (v) { var n = Number(str(v).replace(',', '.')); return isFinite(n) ? Math.round(n) : 0; };
  var norm = function (s) {
    return str(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/\s+/g, ' ').trim();
  };
  var toIso = function (v) {
    if (v instanceof Date) return opt.fmtDate ? opt.fmtDate(v) : v.toISOString().slice(0, 10);
    var s = str(v), m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(s);
    if (m) return m[1] + '-' + pad2_(m[2]) + '-' + pad2_(m[3]);
    m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(s);
    if (m) return m[3] + '-' + pad2_(m[2]) + '-' + pad2_(m[1]);
    return null;
  };
  var dayOf = function (v) { var iso = toIso(v); return iso ? Math.round((isoToUtc_(iso) - base) / DAY) : null; };
  var cols = function (V, nomes) {
    var h = (V[0] || []).map(norm), o = {};
    nomes.forEach(function (n) { o[n] = h.indexOf(norm(n)); });
    return o;
  };
  var get = function (row, i) { return i >= 0 ? row[i] : ''; };
  var sortPt = function (a) {
    return Object.keys(a.reduce(function (o, x) { o[x] = 1; return o; }, {}))
      .sort(function (x, y) { return x.localeCompare(y, 'pt-BR'); });
  };
  var indexer = function (lista) {
    var m = {}; lista.forEach(function (x, i) { m[x] = i + 1; });
    return function (x) { return m[x] || 0; };
  };

  // ---- Plantões ----
  var cp = cols(plV, ['id_plantao', 'data', 'turno', 'supervisor_medico', 'plantonistas', 'numero_atendimentos',
    'internamentos_qtd', 'transferencias_qtd', 'encaminhamentos_qtd', 'ma_afastados', 'ma_baixado', 'obitos',
    'internados_enf_ala_a', 'internados_enf_ala_b']);
  var plRows = plV.slice(1).filter(function (r) { return str(get(r, cp.id_plantao)) || str(get(r, cp.data)); });
  var splitPl = function (s) { return str(s).split(',').map(str).filter(Boolean); };
  var supL = sortPt(plRows.map(function (r) { return str(get(r, cp.supervisor_medico)); }).filter(Boolean));
  var plL = sortPt([].concat.apply([], plRows.map(function (r) { return splitPl(get(r, cp.plantonistas)); })));
  var supI = indexer(supL), plI = indexer(plL);
  var idLinha = {}, diaLinha = [];
  var P = plRows.map(function (r, i) {
    var id = str(get(r, cp.id_plantao));
    if (id && !idLinha[id]) idLinha[id] = i + 1;
    var dia = dayOf(get(r, cp.data));
    diaLinha[i + 1] = dia;
    var pls = splitPl(get(r, cp.plantonistas)).slice(0, 3).map(plI);
    while (pls.length < 3) pls.push(0);
    return [dia == null ? -1 : dia, /^n/i.test(str(get(r, cp.turno))) ? 'N' : 'D', supI(str(get(r, cp.supervisor_medico)))]
      .concat(pls)
      .concat(['numero_atendimentos', 'internamentos_qtd', 'transferencias_qtd', 'encaminhamentos_qtd', 'ma_afastados',
        'ma_baixado', 'obitos', 'internados_enf_ala_a', 'internados_enf_ala_b'].map(function (k) { return num(get(r, cp[k])); }))
      .join(',');
  });

  // ---- Eventos ----
  var ce = cols(evV, ['id_plantao', 'data_evento', 'tipo_evento', 'nome_paciente', 'sexo', 'hospital_destino',
    'especialidade', 'diagnostico']);
  var cidRe = /^([A-Z]\d{2}(?:\.?\d)?)/;
  var evs = evV.slice(1).map(function (r) {
    var linha = idLinha[str(get(r, ce.id_plantao))];
    if (!linha) return null;
    var dia = dayOf(get(r, ce.data_evento));
    if (dia == null) dia = diaLinha[linha];
    var m = cidRe.exec(norm(get(r, ce.diagnostico)));
    var cid = m ? (m[1].length === 4 && m[1].indexOf('.') < 0 ? m[1].slice(0, 3) + '.' + m[1][3] : m[1]) : '';
    return {
      linha: linha, dia: dia, chave: norm(get(r, ce.nome_paciente)),
      tipo: norm(get(r, ce.tipo_evento)).charAt(0), sexo: norm(get(r, ce.sexo)).charAt(0),
      dest: str(get(r, ce.hospital_destino)), esp: str(get(r, ce.especialidade)), cid: cid,
      diag: str(get(r, ce.diagnostico)).replace(/^\S+\s*/, '')
    };
  }).filter(Boolean);
  var destL = sortPt(evs.map(function (e) { return e.dest; }).filter(Boolean));
  var espL = sortPt(evs.map(function (e) { return e.esp; }).filter(Boolean));
  var destI = indexer(destL), espI = indexer(espL);

  // continuidade: eventos do mesmo paciente com data em [dia-3, dia-1]
  var porPac = {};
  evs.forEach(function (e) { if (e.chave && e.dia != null) (porPac[e.chave] = porPac[e.chave] || []).push(e.dia); });
  var J = PA_CFG.JANELA_CONTINUIDADE;
  var E = evs.map(function (e) {
    var cont = 0;
    if (e.chave && e.dia != null) porPac[e.chave].forEach(function (d) { if (d < e.dia && d >= e.dia - J) cont++; });
    return [e.linha, e.tipo, e.sexo, destI(e.dest), espI(e.esp), e.cid, cont].join(',');
  });

  // ---- Dicionário de CID (somente os códigos usados) ----
  var cc = cols(cidV, ['CID', 'descricao']), cidDesc = {};
  cidV.slice(1).forEach(function (r) {
    var k = str(get(r, cc.CID)).replace('.', '').toUpperCase();
    if (k) cidDesc[k] = str(get(r, cc.descricao));
  });
  var usados = {};
  evs.forEach(function (e) {
    if (e.cid && !usados[e.cid]) usados[e.cid] = cidDesc[e.cid.replace('.', '')] || e.diag || e.cid;
  });
  var cidStr = Object.keys(usados).sort().map(function (k) {
    return k + '|' + usados[k].replace(/[|~;]/g, ' ');
  }).join('~');

  return {
    apuracao: opt.hoje || new Date().toLocaleDateString('pt-BR'),
    sup: supL, pl: plL, dest: destL, esp: espL, cid: cidStr,
    P: P.join(';'), E: E.join(';')
  };
}

/* ---------- Opcional: atualização imediata do GitHub Pages ---------- */

/**
 * Dispara o workflow do GitHub (repository_dispatch). Requer a propriedade de
 * script GITHUB_TOKEN (fine-grained token com "Contents: read and write" no repo).
 * Limitado a 1 disparo a cada 5 min para não enfileirar execuções a cada edição.
 */
function dispararAtualizacaoGitHub() {
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) return;
  var cache = CacheService.getScriptCache();
  if (cache.get('pa_dispatch')) return;
  cache.put('pa_dispatch', '1', 300);
  UrlFetchApp.fetch('https://api.github.com/repos/' + PA_CFG.GITHUB_REPO + '/dispatches', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    payload: JSON.stringify({ event_type: PA_CFG.GITHUB_EVENTO }),
    muteHttpExceptions: true
  });
}

/** Execute uma vez para instalar o gatilho "ao alterar" que chama dispararAtualizacaoGitHub. */
function instalarGatilho() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'dispararAtualizacaoGitHub') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('dispararAtualizacaoGitHub')
    .forSpreadsheet(PA_CFG.SPREADSHEET_ID).onChange().create();
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function isoToUtc_(iso) { var p = iso.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]); }
function pad2_(s) { return ('0' + s).slice(-2); }

if (typeof module !== 'undefined') module.exports = { buildPaData: buildPaData };
