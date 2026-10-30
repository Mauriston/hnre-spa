# hnre-spa

Painel do Pronto-Atendimento (SPA) do Hospital Naval de Recife, publicado no GitHub Pages
e atualizado automaticamente a partir da planilha de passagens de plantão
(`1uYy8uU8n9_dHRI8oseIqrOAY3qREgE4pnW0swc6dp10`).

## Como funciona

```
Planilha (tb_plantoes, tb_pacientes_eventos, CID-10)
   │  Apps Script (apps-script/ExportDashboard.gs) — Web App que gera
   │  um snapshot compacto e ANONIMIZADO (sem nome, NIP, telefone, idade ou quadro clínico)
   ▼
GitHub Actions (.github/workflows/pages.yml) — de hora em hora e, opcionalmente,
   │  a cada edição da planilha (repository_dispatch)
   │  baixa o JSON → scripts/build-pa-data.mjs → data/pa-data.js (commit na main)
   ▼
GitHub Pages (publica a partir da branch main) — index.html lê data/pa-data.js
```

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `index.html` | Dashboard (Visão geral, Perfil clínico, Transferências, Supervisores, Plantonistas, Tabela dinâmica) |
| `wireframes.html` | Wireframes de referência do projeto |
| `support.js` | Runtime dos componentes (carrega React 18 via unpkg) |
| `data/pa-data.js` | Snapshot dos dados — **gerado automaticamente, não editar à mão** |
| `data/pa-cid.js` | Dicionário de CIDs curado original (referência) |
| `assets/`, `_ds/` | Marcas institucionais e design system JRS/HNRe (tokens, fontes) |
| `apps-script/` | Código do Web App de exportação + instruções |
| `scripts/build-pa-data.mjs` | Valida o export e grava `data/pa-data.js` |

## Configuração (uma única vez)

1. **Apps Script** — siga [`apps-script/README.md`](apps-script/README.md) para implantar o Web App
   e obter a URL de exportação.
2. **Segredo no GitHub** — em *Settings → Secrets and variables → Actions → New repository secret*,
   crie `PA_EXPORT_URL` com a URL do Web App (incluindo `?token=...` se usar token).
3. **GitHub Pages** — *Settings → Pages → Source: Deploy from a branch*, branch `main`, pasta `/ (root)` (já configurado).
4. Rode o workflow manualmente uma vez: *Actions → Atualizar dados do painel → Run workflow*.

O painel fica em `https://mauriston.github.io/hnre-spa/`.

Sem o segredo `PA_EXPORT_URL`, o site continua mostrando o snapshot já existente em `data/pa-data.js`.

## Teste local

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000/`.
