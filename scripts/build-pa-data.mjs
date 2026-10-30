// Converte o JSON do Web App (apps-script/ExportDashboard.gs) em data/pa-data.js.
// Uso: node scripts/build-pa-data.mjs <export.json> <data/pa-data.js>
// - valida o formato e recusa exports vazios ou que encolham demais (planilha quebrada);
// - preserva as descrições de CID já curadas no arquivo atual;
// - não reescreve o arquivo se os dados não mudaram (só a data de apuração).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error('uso: node scripts/build-pa-data.mjs <export.json> <pa-data.js>');
  process.exit(2);
}

const fail = msg => { console.error('✗ ' + msg); process.exit(1); };
let novo;
try { novo = JSON.parse(readFileSync(inPath, 'utf8')); } catch (e) { fail('export não é JSON válido: ' + e.message); }
if (novo.erro) fail('Web App respondeu erro: ' + novo.erro);
for (const k of ['sup', 'pl', 'dest', 'esp']) if (!Array.isArray(novo[k])) fail(`campo "${k}" ausente`);
for (const k of ['apuracao', 'cid', 'P', 'E']) if (typeof novo[k] !== 'string') fail(`campo "${k}" ausente`);
const nP = novo.P ? novo.P.split(';').length : 0, nE = novo.E ? novo.E.split(';').length : 0;
if (!nP) fail('export sem plantões');
if (!/^-?\d+,[DN],\d+(,\d+){12}$/.test(novo.P.split(';')[0])) fail('linha P fora do formato esperado');

let atual = null;
if (existsSync(outPath)) {
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(outPath, 'utf8'), ctx);
  atual = ctx.window.PA_DATA || null;
}
if (atual && !process.env.PA_ALLOW_SHRINK) {
  const oP = atual.P.split(';').length;
  if (nP < oP * 0.9) fail(`export tem ${nP} plantões, contra ${oP} no snapshot atual (defina PA_ALLOW_SHRINK=1 para aceitar)`);
}

// descrições curadas (abreviadas) prevalecem sobre as da aba CID-10
if (atual) {
  const cur = Object.fromEntries(atual.cid.split('~').map(x => [x.slice(0, x.indexOf('|')), x.slice(x.indexOf('|') + 1)]));
  novo.cid = novo.cid.split('~').filter(Boolean).map(x => {
    const k = x.slice(0, x.indexOf('|'));
    return cur[k] ? k + '|' + cur[k] : x;
  }).join('~');
}

const semData = d => JSON.stringify({ ...d, apuracao: '' });
if (atual && semData(atual) === semData(novo)) {
  console.log(`= sem alterações (${nP} plantões, ${nE} eventos)`);
  process.exit(0);
}

const iso = new Date().toISOString().slice(0, 10);
const q = JSON.stringify;
const src = `// Snapshot de tb_plantoes / tb_pacientes_eventos (planilha 1uYy8uU8n9_dHRI8oseIqrOAY3qREgE4pnW0swc6dp10), gerado pelo Web App apps-script/ExportDashboard.gs em ${iso}.
// P: dia(desde 24/03/2025),turno,sup,pl1,pl2,pl3,atend,int,transf,enc,maAfast,maBaix,obitos,alaA,alaB  (índices 1-based; 0 = vazio)
// E: plantao(linha 1-based em P),tipo,sexo,destino,especialidade,cid,continuidade(nº eventos do mesmo paciente nos 3 dias anteriores)
window.PA_DATA = {
apuracao: ${q(novo.apuracao)},
sup: ${q(novo.sup)},
pl: ${q(novo.pl)},
dest: ${q(novo.dest)},
esp: ${q(novo.esp)},
cid: ${q(novo.cid)},
P: ${q(novo.P)},
E: ${q(novo.E)}
};
`;
writeFileSync(outPath, src);
console.log(`✓ ${outPath} atualizado (${nP} plantões, ${nE} eventos)`);
