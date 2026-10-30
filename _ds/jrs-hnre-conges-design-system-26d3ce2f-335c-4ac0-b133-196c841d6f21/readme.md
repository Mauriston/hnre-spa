# JRS/HNRe — Design System do CONGES

Sistema de design da **Junta Regular de Saúde (JRS) do Hospital Naval de Recife (HNRe)**, Marinha do Brasil, extraído
da apresentação **CONGES · JRS/HNRe — Julho 2026**: a prestação de contas mensal em que a Junta expõe ao Conselho de
Gestão (CONGES) suas variáveis de Inspeção de Saúde (IS), seus indicadores do Anexo B e sua pontuação no Prêmio
Eficiência Pericial (CPMM).

São **dois mediums**, com regras próprias:

1. **Deck do CONGES** — apresentação 4:3, densa em dados apurados, para leitura em sala de reunião militar.
2. **E-mail institucional da JRS** — mensagens em tabelas de 700px, enviadas a inspecionados, a outras OM e à
   Divisão de Pessoal: agendamento de IS, inaptidão para ingresso, faltas às IS agendadas.

Não há site, app nem produto de consumo. Este design system é, portanto, **um sistema de comunicação médico-pericial**
— moldura institucional, cards de indicador, tabelas de apuração, uma gramática de gráficos Chart.js muito específica
e uma família de e-mails com callouts normativos.

## Fontes recebidas

| Fonte | Observação |
|---|---|
| `uploads/CONGES JRS Julho 2026 - Apresentacao.html` | Bundle HTML autocontido (770 KB). O template real, o CSS, os plugins Chart.js e os PNGs de marca foram extraídos dele — **é a verdade fundamental deste sistema**. |
| `uploads/LOGO-COR-ICON.png` | Âncora da Marinha em alta resolução (1792 px, com muita margem). → `assets/logo-marinha-icon.png` |
| `uploads/HNRe_BRASAO.png` | Brasão do HNRe em alta resolução. → `assets/brasao-hnre-hires.png` |
| `uploads/TEMPLATE_PADRAO_BASICO.html` | Template padrão de e-mail da JRS (700px, Montserrat). → `email_kits/jrs-emails/padrao-basico.html` |
| `uploads/Agendamento_VDF_Terminos.html` | E-mail de confirmação de agendamento de IS (VDF/Términos) — o mais completo: callouts, norma, laudos, botões CPMM, assinatura dupla. |
| `uploads/IS Ingresso_Inaptidão.html` | E-mail de inaptidão para ingresso, com relação nominal e Anexo T. |
| `uploads/FALTA_IS_P_DP.html` | E-mail de faltas às IS à Divisão de Pessoal — **modelo legado** (960px, Carlito, callout vermelho). |
| Skill `design-institucional-hnre` (MIV MB, dez/2025) | Consultada para as regras de marca, proporção cromática e acessibilidade. |

Não foi fornecido código-fonte de aplicação, Figma nem repositório. Nada aqui foi inferido de tela: todos os valores
vêm do CSS e do JS do deck.

### Divergência conhecida — Azul Marinha

O MIV MB define **`#050F41`** como Azul Marinha. O **deck** do CONGES usa **`#121C4B`**; os **e-mails** usam
**`#050F41`**. Ambos são verdade fundamental no seu medium, então o sistema mantém os dois: `--navy` = `#121C4B`
(slides, com `#050F41` preservado em `--navy-050F41`) e `--email-navy` = `#050F41` (e-mail). O verde também
diverge: `#079558` no deck, `#079551` no e-mail. **Não unifique sem decidir com o usuário.**

---

## CONTENT FUNDAMENTALS

**Idioma e registro.** pt-BR, registro militar-administrativo formal. Terceira pessoa impessoal — nunca "eu", nunca
"você". Ninguém é interpelado: os dados são apresentados. Não há chamadas à ação, nem verbos de marketing.

**Casing.** Títulos de slide em **CAIXA ALTA** sem ponto final ("VARIÁVEIS DAS INSPEÇÕES DE SAÚDE"). Rótulos de KPI e
de coluna em caixa alta com tracking. Nomes de militares em caixa alta ("MAURISTON RENAN MARTINS SILVA"). Corpo e
notas em sentence case.

**Vocabulário fechado.** Use os termos do domínio exatamente como estão: *Inspeção de Saúde (IS)*, *finalidade*,
*Términos (Incap./Restrições)*, *Licenciamentos SAM/SMV/SMI*, *VDF*, *AO*, *desnumeração*, *restituição*, *DAMP*,
*JSD*, *MPI*, *AMP (Área de Movimento Pericial)*, *LTSPF*, *TTC/RM1*, *Controle Trienal*, *(Re)Engajamento*,
*Prorrogação de Tempo de Serviço*, *Prêmio Eficiência Pericial*. Siglas aparecem sem expansão quando a plateia é
interna; expanda apenas na primeira menção em material misto.

**Postos e funções.** Forma abreviada com corpo entre parênteses: "Capitão-Tenente (Md)", rodapé "CT (Md) Mauriston".

**Números.** Sempre pt-BR: vírgula decimal ("91,9%", "33,3%"), variação em pontos percentuais com a unidade "pp"
("▼ 11,2pp", "— 0,0pp"), pontuação em inteiros com denominador ("50 / 60"). Datas DD/MM/AAAA; competência do mês como
"JUL/2026" na capa e "JUL2026" no rodapé.

**Classificação, nunca opinião.** Um resultado é rotulado por banda — *Excelente · Bom · Atenção · Ruim* — e nada
além disso. Não há adjetivos comemorativos ("resultado excepcional") nem justificativas no slide. Ressalvas de
leitura vão para uma **Nota** curta ("Julho/2026 é mês parcial…").

**Procedência obrigatória.** Todo dado apurado carrega a fonte em 9,5px: "Fonte: INDICADORES_CPMM · jan–jul/2026 ·
apuração de 13/08/2026".

**Emoji: depende do medium.** No **deck, nunca**: o único símbolo não alfabético é o trio de setas de variação — ▲ ▼ —
e o travessão "—" para variação nula. No **e-mail, sim, e de forma sistemática**: um emoji abre cada título de callout
(📅 agendamento · 💡 nota clínica · ⚠️ advertência · ⚖️ recurso) e o rodapé usa 📞 📧 📍 no lugar de ícones (e-mail não
carrega fonte de ícone). Nunca no meio de uma frase, nunca decorativo, nunca outro conjunto além destes.

**Registro do e-mail.** Abre por vocativo ("Prezado(a) Senhor(a)," / "Prezados CT TAVARES e SO ALEXANDRE," / "Prezado
CC (CD) Bruno Carvalho e demais Militares da Divisão de Pessoal,") e fecha por "Respeitosamente," (a superiores e
inspecionados) ou "Atenciosamente," (entre pares). Usa o telegrafismo naval em caixa alta — **INF**, **PTC**, **APS**,
**MSG** — e sempre ancora o pedido na norma: "Em atenção à alínea <u>a</u> do item 2.3.3 da DGPM-406 9ª REV MOD 3".
Norma é **transcrita entre aspas**, nunca parafraseada, com alínea, item, revisão e MOD. Parágrafos longos vão
justificados. Frase de fecho recorrente: "À disposição para quaisquer esclarecimentos adicionais."

**Vibe.** Sóbrio, auditável, sem retórica. Cada slide responde a uma pergunta do CONGES com um número, sua variação,
sua banda e sua fonte.

---

## VISUAL FOUNDATIONS

**Palco.** 1024×768 px, **4:3** — o CONGES é projetado nessa proporção; não converta para 16:9 sem autorização. Fundo
branco puro em todos os slides. Padding `104px 54px 32px` (capa: `104px 70px 32px`). Os 104px superiores são zona
reservada: marca da Marinha à esquerda, brasão do HNRe à direita (60px de altura, 34px das bordas, 18px do topo) e o
título centralizado entre elas, com recuo lateral de 120px.

**Cor.** Branco domina (60–80% da área). O Azul Marinha `#121C4B` é a única cor estrutural: títulos, texto primário,
primeira série de gráfico, barras. Azul de apoio `#1c4587` só em eyebrows e rótulos de função. Amarelo Ouro `#FAB932`
é acento estrito — segunda série de gráfico, filete de nota, gradiente de 5–8% no topo dos cards de KPI — e **nunca**
como texto sobre branco (para texto, use `--gold-ink` `#8A6100`). Verde `#079558` / `#04643B` marca resultado
favorável; vinho `#85200c` marca resultado ruim. Sem paletas alternativas, sem tema escuro, sem cor de fundo de
slide: no máximo duas cores de fundo no deck inteiro (branco e o cinza `#F2F4F8` de cabeçalho de tabela).

**Tipografia.** **Montserrat** é a única família de texto, em quatro pesos: 400 corpo de tabela, 600 rótulos, 700
números, 800 títulos e destaques. Escala literal do deck: 60 (capa) · 26,5 (título de slide) · 60/52/41/33 (números
de KPI) · 15 (rótulo de seção) · 13,5 (corpo) · 12 (label) · 11 (eyebrow/tabela) · 10,5 (nota) · 9,5 (fonte) · 8,5
(rodapé). Tracking: .16em em eyebrow, .08em em rodapé, .06em em labels, .03em em tags. **Roboto Mono** aparece em um
único lugar: as faixas numéricas das réguas de limiar. Octin College e Bebas Neue Pro (display do MIV) **não** foram
fornecidas e não são usadas — ver Caveats.

**Cards.** Uma só receita: fundo branco, hairline `1px solid #E3E6ED`, raio **14px**. Sombra existe em uma única
variante — `0 3px 12px rgba(18,28,75,.08)` — aplicada apenas ao `ElevatedCard` (que envolve gráficos) e ao cartão de
assinatura da capa. Cards de KPI não têm sombra, e sim um gradiente vertical de branco a ouro 5–8%. O `IndCard` é o
**único** elemento com trilho de borda colorida (5px à esquerda, na cor da banda) — não replique esse padrão. A
`Nota` é o único elemento com filete ouro de 3px à esquerda e cantos `0 8px 8px 0`.

**Bordas e filetes.** Três variantes: hairline sólido `--line` (cards, células de tabela), tracejado `--border-dashed`
(acima da linha de fonte e das réguas de limiar) e o filete pontilhado de 1,5px em navy da fração de fórmula. Sem
bordas grossas, sem molduras decorativas.

**Fundos e imagens.** Nenhuma fotografia, ilustração, textura, padrão ou imagem full-bleed em todo o deck. As únicas
imagens são as duas marcas oficiais. Nada de gradiente ambiental: o único gradiente do sistema é o wash de ouro nos
cards de KPI. Nenhuma transparência ou blur estrutural — as opacidades existem só como preenchimento de faixa de
gráfico (6% a 22%) e fundos de pill (14–20%).

**Gráficos (Chart.js 4.4.1).** Gramática fixa: barras navy com `borderRadius:4` e `maxBarThickness:30`; linha de
comparação em ouro `tension:.35`; linhas de série em navy `tension:.4`, ponto branco de 2,5px com borda da cor da
série; grade horizontal `rgba(227,230,237,.7)`, grade vertical desligada, `border.display:false`; tooltip navy, raio
8px, padding 10. Rótulos de valor são **desenhados por plugin** acima de cada barra/ponto em 800 11,5–14px. Roscas
usam `cutout:'58%'` com total em 92px no centro; a legenda nativa é desligada em roscas e pizzas e substituída por
`LegendList`. Faixas de banda (verde 7%, ouro 9–18%, vinho 6–12%) e linhas tracejadas de limiar com rótulo à
esquerda comunicam o critério. Séries seguem a ordem `--chart-1..6`, com o cinza `#B9BFD1` sempre reservado a
"Outras".

**Movimento.** Entrada de slide: fade `.52s` + `translateY(14px) scale(.995)` → normal, com
`cubic-bezier(.22,.61,.36,1)`. Elementos internos sobem 16px com fade `.55s`, escalonados em **90ms** na ordem do
DOM; título desce 10px, marcas 8px, rodapé entra por último (delay .5s). Gráficos são resetados e re-animados 220ms
após a troca de slide. Sem bounce, sem spring, sem parallax, sem rotação. Não há hover states no deck (é material de
projeção); nos protótipos derivados, hover = escurecer levemente o navy ou revelar o tooltip nativo do gráfico, e
press = sem escala. Foco visível em Amarelo Ouro, 2px, offset 2px.

**Layout.** Corpo do slide é flex: `body-row` com `gap:34px` e `flex:1;min-height:0`; grids de indicador em 2–3
colunas com `gap:18px`; linha de KPI em 4 colunas com `gap:16px`. Fixos: marcas, título e rodapés são
`position:absolute` no palco. Nada rola: `overflow:hidden` em todo slide — conteúdo que não cabe é cortado, então
divida em dois slides.

### O medium e-mail

**Envelope.** Fundo `#f4f6f9` com 40px de respiro vertical; cartão branco de **700px** (o modelo legado usa 960px),
raio 8px, sombra `0 4px 12px rgba(5,15,65,.08)`. Tudo em `<table>` com `cellpadding/cellspacing` — o destino é
Outlook/webmail da MB. Corpo com padding `40px 50px`, texto 15–16px, `line-height:1.6`, cor `#050F41`.

**Tipografia.** Montserrat 400/500/600/700 no corpo (via Google Fonts, com `Arial` como fallback declarado) e **Bebas
Neue** — alternativa autorizada à Octin College — só em títulos de seção (24px) e de callout (20–22px), sempre com
`letter-spacing:.5px`. Nada de Roboto Mono aqui.

**Callouts são a unidade de composição.** Quatro tons, cada um com um assunto fixo, todos com filete de 4px à
esquerda, padding 20px e raio 4px: **info** (`#f4f6f9` / navy) para o dado do agendamento; **clínica** (`#f0fdf4` /
`#079551`) para explicação de finalidade; **norma** (`#fffaf0` / `#FAB932`) para citação da DGPM-406; **alerta**
(`#fff5f5` / `#c62828`, com filete interno `#ef9a9a`) reservado à advertência disciplinar à Divisão de Pessoal.
Citação literal vive dentro do callout, em itálico com filete próprio e referência alinhada à direita em 12px.

**Realces inline.** Dois chips, e só: navy sobre branco para data/hora e conclusão ("01JAN/2026", "INAPTOS PARA
INGRESSO"); ouro com texto navy para referência normativa e prazo ("PS-XXX-XX/XX26", "em até 45 dias"). Dois ou três
por e-mail, no máximo.

**Títulos de seção.** Numerados, caixa alta, Bebas Neue 24px, com filete ouro de 2px embaixo — a única linha
decorativa do e-mail.

**Tabelas nominais.** Cabeçalho `#050F41` com texto branco em caixa alta, bordas `1px #e0e0e0` (legado:
`#dddddd`), zebra `#f9f9f9`, `cellpadding` 8–10, fonte 13px. Confirmações em verde; célula vazia e a linha final de
acréscimo em cinza `#999999`.

**Botões.** Linha de até três `<td>` com `<a>` (nunca `<button>`): um preenchido em navy (padding 12px 16px) e os
demais contornados com 2px navy (padding 10px 16px), raio 4px, rótulo 13px/600.

**Assinatura e rodapé.** Assinatura sobre filete `1px #e0e0e0` com 25px de respiro: fecho 15px/600, nome 18px/700
(16px na variante dupla), posto em negrito 13–14px `#555555`, função na linha seguinte; a variante dupla põe o
Supervisor primeiro, sob "Por ordem de:" em itálico. Rodapé em navy, duas colunas: logo da Marinha de 260px e
contatos em 11px branco, com o nome da OM em Amarelo Ouro 12px e divisor `rgba(255,255,255,.2)`.

**Responsividade.** Um único `@media (max-width:600px)` com quatro classes: `.mobile-padding` (20px),
`.stack-column` (empilha e centraliza), `.hide-mobile` (esconde divisores) e `.footer-text` (centraliza). Sem elas o
e-mail continua legível — degradação intencional.

**Sem movimento, sem hover.** E-mail não anima e não confia em estado: links são sublinhados ou botões sólidos.

---

## ICONOGRAPHY

**Não existe sistema de ícones neste material — e isso é intencional.** O deck do CONGES não usa nenhum ícone: sem
biblioteca (Lucide, Heroicons, Material), sem fonte de ícone, sem sprite, sem SVG inline, sem PNG de ícone, sem
emoji. Nenhum ícone foi introduzido aqui e **nenhum deve ser inventado**.

A carga simbólica é toda institucional e vive em dois arquivos PNG oficiais:

| Arquivo | Uso |
|---|---|
| `assets/marca-marinha.png` | Marca da Marinha do Brasil — canto **superior esquerdo** de todo slide (60px). |
| `assets/brasao-hnre.png` | Brasão do HNRe — canto **superior direito** de todo slide (60px). |
| `assets/logo-marinha-icon.png` | Âncora em alta resolução (versão do upload) — para thumbnails e peças que exijam a marca isolada. |
| `assets/brasao-hnre-hires.png` | Brasão em alta resolução — para impressão. |

Regras: só matrizes oficiais; nunca recolorir, girar, achatar, mascarar, recortar ou aplicar sombra/filtro/3D; área
de segurança equivalente à altura da letra "M" do lettering; redução mínima digital 70px (vertical) / 40px
(horizontal); uma única zona de marca por slide; jamais marca-d'água sobre conteúdo clínico.

Os únicos glifos usados como sinal no deck são caracteres Unicode dentro do texto: **▲ ▼ —** (variação), **≤ <**
(réguas de limiar) e **×** (multiplicação na fórmula). Nada mais.

**No e-mail, o "sistema de ícones" é um conjunto fechado de emoji** — porque nenhum cliente de e-mail carrega fonte de
ícone com segurança: 📅 (agendamento), 💡 (nota clínica), ⚠️ (advertência disciplinar), ⚖️ (recurso), 📞 📧 📍
(rodapé). Use exatamente estes, sempre abrindo o título do callout ou a linha de contato. Não acrescente novos.

**Ativos de e-mail são remotos.** O banner de cabeçalho e o logo do rodapé estão hospedados em `i.imgur.com`
(`Btu1CAG.png`, `v8L0kuH.png`) — e-mail exige URL absoluta e pública. Ver Caveats.

---

## Índice do repositório

| Caminho | O que é |
|---|---|
| `styles.css` | Entrada única de CSS — só `@import`s. |
| `tokens/fonts.css` | `@font-face` de Montserrat (variável, latin + latin-ext), extraída do deck. |
| `tokens/colors.css` | Base institucional, neutros, aliases semânticos, farol de estado, séries de gráfico. |
| `tokens/typography.css` | Famílias, escala do palco 1024×768, pesos, line-heights, trackings. |
| `tokens/spacing.css` | Geometria do palco, escala de espaço, gaps de uso, alturas de chrome. |
| `tokens/effects.css` | Raios, bordas, a sombra única, gradientes de KPI, tokens de movimento. |
| `tokens/email.css` | Paleta, medidas, tipografia e ativos do medium e-mail (namespace `--email-*`). |
| `assets/` | Marcas oficiais (PNG) e os arquivos de fonte `.woff2`. |
| `guidelines/*.card.html` | 17 cards de fundamento (Colors, Type, Spacing, Effects, Brand). |
| `components/data/` | `KpiMini` · `KpiBox` · `IndCard` · `IndTag` · `Delta` · `DataTable` · `ThresholdScale` · `FormulaFraction` |
| `components/layout/` | `ElevatedCard` · `Nota` · `Fonte` · `Eyebrow` · `SectionLabel` · `LegendList` |
| `components/slide/` | `SlideFrame` · `SlideTitle` · `SlideBrand` · `SlideFoot` · `SignatureCard` |
| `components/email/` | `EmailShell` · `EmailHeader` · `EmailBody` · `EmailSectionTitle` · `EmailCallout` · `EmailQuote` · `EmailChip` · `EmailDataTable` · `EmailButtonRow` · `EmailSignature` · `EmailFooter` |
| `email_kits/jrs-emails/` | Os quatro e-mails recebidos, verbatim, com README de uso e a divergência do modelo legado. |
| `ui_kits/conges-deck/` | Recreação click-through do deck (6 slides) + `charts.js` com os dados e plugins reais. Ver o README de lá. |
| `templates/conges-mensal/` | Template do deck mensal, para uma nova competência. |
| `templates/slide-branco/` | Template de um slide institucional vazio. |
| `templates/email-jrs/` | Template de e-mail institucional da JRS (callouts, tabela nominal, botões, assinatura). |
| `SKILL.md` | Empacotamento como Agent Skill para uso fora deste projeto. |
| `scraps/` | Template e corpo do bundle original, extraídos para leitura. Não é entregável. |

### Componentes — inventário e proveniência

Cada componente corresponde a um padrão que **existe** no deck original (classe CSS ou bloco de markup repetido):
`kpi-mini`, `kpi-box`/`kpi-box.big`, `ind-card`, `ind-tag`, `.d.up/.down/.flat`, `table/th/td.rot`, a régua de cinco
bandas, a fração de fórmula, `elevated-card`, `nota`, `fonte`, `.eyebrow`, os rótulos "Por finalidade"/"Por AMP",
`pie-legend`/`#donutLegend`, `.slide`, `.slide h2`, `.slide-brand`, `.slide-foot` e o cartão de assinatura da capa.

No medium e-mail, cada componente corresponde a um bloco repetido nos quatro modelos recebidos: o envelope de 700px,
a faixa de cabeçalho, a célula de corpo, o `h3` com filete ouro, os quatro callouts, a citação normativa, os dois
chips de realce, a tabela nominal, a linha de botões do CPMM, os dois formatos de assinatura e o rodapé institucional.

**Adições intencionais:** nenhuma. Não há Button, Input, Modal, Toast ou Avatar neste sistema porque o material de
origem não define nenhum controle de interface — introduzi-los seria inventar. Se um produto derivado precisar de
controles (um painel web da JRS, por exemplo), especifique-os antes com o usuário.

---

## Caveats

1. **Fontes de display ausentes.** O MIV prevê **Octin College** (títulos) e **Bebas Neue Pro** (alternativa). Nenhum
   arquivo foi fornecido e ambas são licenciadas — não foram substituídas. Títulos usam Montserrat 800, como no deck
   real. `--font-display` aponta para Montserrat até que os arquivos cheguem.
2. **Roboto Mono** é referenciada por `--font-mono` (como no deck) mas o binário não veio no bundle; o fallback
   monoespaçado do sistema renderiza as réguas de limiar até que o arquivo seja enviado.
3. **`#121C4B` vs `#050F41`** — ver "Divergência conhecida" acima.
4. **Sem produto digital.** Se a JRS tiver um painel, PWA ou planilha publicada, ele não estava nos anexos: os kits
   cobrem o deck e os e-mails.
5. **Ativos de e-mail em `i.imgur.com`.** O banner de cabeçalho e o logo do rodapé dependem de um host externo de
   terceiros — risco de indisponibilidade e de bloqueio na rede da MB. **Recomendo hospedá-los em domínio
   `marinha.mil.br`** e me enviar as novas URLs; não substituí por conta própria.
6. **Modelo legado de faltas** (960px, Carlito, `#c62828`) foi preservado como está; normalizá-lo para o padrão de
   700px depende da sua decisão.
7. **Verde `#079551` (e-mail) vs `#079558` (deck)** — divergência de um dígito, mantida por medium.
