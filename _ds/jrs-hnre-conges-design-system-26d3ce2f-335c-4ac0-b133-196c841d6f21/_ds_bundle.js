/* @ds-bundle: {"format":4,"namespace":"JRSHNReCONGESDesignSystem_26d3ce","components":[{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Delta","sourcePath":"components/data/Delta.jsx"},{"name":"FormulaFraction","sourcePath":"components/data/FormulaFraction.jsx"},{"name":"IndCard","sourcePath":"components/data/IndCard.jsx"},{"name":"IndTag","sourcePath":"components/data/IndTag.jsx"},{"name":"KpiBox","sourcePath":"components/data/KpiBox.jsx"},{"name":"KpiMini","sourcePath":"components/data/KpiMini.jsx"},{"name":"ThresholdScale","sourcePath":"components/data/ThresholdScale.jsx"},{"name":"EmailBody","sourcePath":"components/email/EmailBody.jsx"},{"name":"EmailButtonRow","sourcePath":"components/email/EmailButtonRow.jsx"},{"name":"EmailCallout","sourcePath":"components/email/EmailCallout.jsx"},{"name":"EmailChip","sourcePath":"components/email/EmailChip.jsx"},{"name":"EmailDataTable","sourcePath":"components/email/EmailDataTable.jsx"},{"name":"EmailFooter","sourcePath":"components/email/EmailFooter.jsx"},{"name":"EmailHeader","sourcePath":"components/email/EmailHeader.jsx"},{"name":"EmailQuote","sourcePath":"components/email/EmailQuote.jsx"},{"name":"EmailSectionTitle","sourcePath":"components/email/EmailSectionTitle.jsx"},{"name":"EmailShell","sourcePath":"components/email/EmailShell.jsx"},{"name":"EmailSignature","sourcePath":"components/email/EmailSignature.jsx"},{"name":"ElevatedCard","sourcePath":"components/layout/ElevatedCard.jsx"},{"name":"Eyebrow","sourcePath":"components/layout/Eyebrow.jsx"},{"name":"Fonte","sourcePath":"components/layout/Fonte.jsx"},{"name":"LegendList","sourcePath":"components/layout/LegendList.jsx"},{"name":"Nota","sourcePath":"components/layout/Nota.jsx"},{"name":"SectionLabel","sourcePath":"components/layout/SectionLabel.jsx"},{"name":"SignatureCard","sourcePath":"components/slide/SignatureCard.jsx"},{"name":"SlideBrand","sourcePath":"components/slide/SlideBrand.jsx"},{"name":"SlideFoot","sourcePath":"components/slide/SlideFoot.jsx"},{"name":"SlideFrame","sourcePath":"components/slide/SlideFrame.jsx"},{"name":"SlideTitle","sourcePath":"components/slide/SlideTitle.jsx"},{"name":"ChartBox","sourcePath":"ui_kits/conges-deck/ChartBox.jsx"},{"name":"CongesDeck","sourcePath":"ui_kits/conges-deck/CongesDeck.jsx"},{"name":"SlideCapa","sourcePath":"ui_kits/conges-deck/SlideCapa.jsx"},{"name":"SlideDistribuicao","sourcePath":"ui_kits/conges-deck/SlideDistribuicao.jsx"},{"name":"SlideFarol","sourcePath":"ui_kits/conges-deck/SlideFarol.jsx"},{"name":"SlideRecuperados","sourcePath":"ui_kits/conges-deck/SlideRecuperados.jsx"},{"name":"SlideRestituicoes","sourcePath":"ui_kits/conges-deck/SlideRestituicoes.jsx"},{"name":"SlideVariaveis","sourcePath":"ui_kits/conges-deck/SlideVariaveis.jsx"}],"sourceHashes":{"components/data/DataTable.jsx":"84c87faadcd8","components/data/Delta.jsx":"c49eefc57573","components/data/FormulaFraction.jsx":"984d75a127d9","components/data/IndCard.jsx":"7137e2c0ed56","components/data/IndTag.jsx":"2fd1ff80f62f","components/data/KpiBox.jsx":"d5d2ded2481c","components/data/KpiMini.jsx":"4a39674396df","components/data/ThresholdScale.jsx":"e4c55d17ea28","components/email/EmailBody.jsx":"900fe4dc493d","components/email/EmailButtonRow.jsx":"a84944daa078","components/email/EmailCallout.jsx":"6d0804df5547","components/email/EmailChip.jsx":"c02327cfd26e","components/email/EmailDataTable.jsx":"b8e0adf5d3b9","components/email/EmailFooter.jsx":"0107bb1cccaf","components/email/EmailHeader.jsx":"a728a9a7f609","components/email/EmailQuote.jsx":"25d216253559","components/email/EmailSectionTitle.jsx":"f6acf7e02966","components/email/EmailShell.jsx":"54fa0d23283e","components/email/EmailSignature.jsx":"31534f6da188","components/layout/ElevatedCard.jsx":"317a4f9613b7","components/layout/Eyebrow.jsx":"4ebfab46de2e","components/layout/Fonte.jsx":"568af59ab877","components/layout/LegendList.jsx":"35fe0499fbeb","components/layout/Nota.jsx":"e6d81827033a","components/layout/SectionLabel.jsx":"ed6ce2d396e4","components/slide/SignatureCard.jsx":"9edfe37d66c2","components/slide/SlideBrand.jsx":"15d38e16c4f8","components/slide/SlideFoot.jsx":"66f3b3de3d80","components/slide/SlideFrame.jsx":"b8db48131e71","components/slide/SlideTitle.jsx":"7668812d6946","ui_kits/conges-deck/ChartBox.jsx":"ddfdf2f6d4d2","ui_kits/conges-deck/CongesDeck.jsx":"c279f6b7c0d7","ui_kits/conges-deck/SlideCapa.jsx":"e9ed780acbe1","ui_kits/conges-deck/SlideDistribuicao.jsx":"3cbdee4940cd","ui_kits/conges-deck/SlideFarol.jsx":"fa6e1a2193d1","ui_kits/conges-deck/SlideRecuperados.jsx":"0e0ed66bec50","ui_kits/conges-deck/SlideRestituicoes.jsx":"a1d2e6521597","ui_kits/conges-deck/SlideVariaveis.jsx":"89a1e9f88dc3","ui_kits/conges-deck/charts.js":"0631e42a97a9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JRSHNReCONGESDesignSystem_26d3ce = window.JRSHNReCONGESDesignSystem_26d3ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  footer,
  dense = false,
  style
}) {
  const fs = dense ? 'var(--fs-table)' : 'var(--fs-body-s)';
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: fs,
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: '2px 6px',
      textAlign: i === 0 ? 'left' : c.align || 'center',
      borderBottom: 'var(--border-hairline)',
      fontSize: dense ? 'var(--fs-th)' : 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      fontWeight: 'var(--fw-semibold)',
      background: c.shaded === false ? 'transparent' : 'var(--surface-thead)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((cell, ci) => {
    const v = cell && typeof cell === 'object' && !React.isValidElement(cell) ? cell : {
      value: cell
    };
    return /*#__PURE__*/React.createElement("td", {
      key: ci,
      style: {
        padding: '2px 6px',
        borderBottom: 'var(--border-hairline)',
        textAlign: ci === 0 ? 'left' : columns[ci] && columns[ci].align || 'center',
        fontFamily: 'var(--font-core)',
        fontWeight: ci === 0 ? 'var(--fw-semibold)' : v.strong ? 'var(--fw-black)' : 'var(--fw-regular)',
        color: v.color || (ci === 0 ? 'var(--navy)' : 'inherit'),
        whiteSpace: 'nowrap'
      }
    }, v.value);
  }))), footer && /*#__PURE__*/React.createElement("tr", null, footer.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      borderBottom: 'none',
      padding: '2px 6px',
      textAlign: ci === 0 ? 'left' : 'center',
      fontWeight: 'var(--fw-black)',
      fontSize: 14,
      whiteSpace: 'nowrap'
    }
  }, cell)))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Delta.jsx
try { (() => {
const TONE = {
  up: 'var(--delta-up)',
  down: 'var(--delta-down)',
  flat: 'var(--delta-flat)'
};
const ARROW = {
  up: '▲',
  down: '▼',
  flat: '—'
};
function Delta({
  dir = 'flat',
  children,
  size = 13,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size,
      color: color || TONE[dir],
      whiteSpace: 'nowrap',
      ...style
    }
  }, ARROW[dir], ' ', children);
}
Object.assign(__ds_scope, { Delta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Delta.jsx", error: String((e && e.message) || e) }); }

// components/data/FormulaFraction.jsx
try { (() => {
function FormulaFraction({
  lhs,
  numerator,
  denominator,
  suffix,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontSize: 13.5,
      color: 'var(--navy)',
      fontWeight: 'var(--fw-bold)',
      ...style
    }
  }, lhs ? /*#__PURE__*/React.createElement("span", null, lhs) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px 3px'
    }
  }, numerator), /*#__PURE__*/React.createElement("span", {
    style: {
      borderTop: '1.5px solid var(--navy)',
      padding: '3px 8px 0',
      alignSelf: 'stretch',
      textAlign: 'center'
    }
  }, denominator)), suffix ? /*#__PURE__*/React.createElement("span", null, suffix) : null);
}
Object.assign(__ds_scope, { FormulaFraction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FormulaFraction.jsx", error: String((e && e.message) || e) }); }

// components/data/IndTag.jsx
try { (() => {
const LEVELS = {
  excelente: {
    label: 'Excelente',
    bg: 'var(--state-excelente)',
    fg: '#fff'
  },
  bom: {
    label: 'Bom',
    bg: 'var(--state-bom-bg)',
    fg: 'var(--state-bom)'
  },
  atencao: {
    label: 'Atenção',
    bg: 'var(--state-atencao-bg)',
    fg: 'var(--state-atencao)'
  },
  ruim: {
    label: 'Ruim',
    bg: 'var(--state-ruim-bg)',
    fg: '#fff'
  }
};
function IndTag({
  level = 'bom',
  children,
  compact = false
}) {
  const s = LEVELS[level] || LEVELS.bom;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: compact ? '3px 10px' : '4px 13px',
      borderRadius: 'var(--radius-tag)',
      fontSize: compact ? 10 : 'var(--fs-tag)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: 'var(--ls-tag)',
      background: s.bg,
      color: s.fg,
      whiteSpace: 'nowrap'
    }
  }, children || s.label);
}
Object.assign(__ds_scope, { IndTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/IndTag.jsx", error: String((e && e.message) || e) }); }

// components/data/IndCard.jsx
try { (() => {
function IndCard({
  label,
  value,
  unit,
  delta,
  deltaDir = 'flat',
  level,
  rail = 'var(--ink-4)',
  valueColor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '16px 18px 14px',
      background: 'var(--surface-card)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 'var(--ind-rail-w)',
      background: rail
    }
  }), children || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-tag)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.3,
      minHeight: 26
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-kpi-m)',
      fontWeight: 'var(--fw-black)',
      color: valueColor || rail,
      lineHeight: 'var(--lh-tight)',
      marginTop: 6
    }
  }, value, unit ? /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 16,
      color: 'var(--ink-4)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, unit) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 7
    }
  }, delta ? /*#__PURE__*/React.createElement(__ds_scope.Delta, {
    dir: deltaDir,
    size: 11.5
  }, delta) : /*#__PURE__*/React.createElement("span", null), level ? /*#__PURE__*/React.createElement(__ds_scope.IndTag, {
    level: level
  }) : null)));
}
Object.assign(__ds_scope, { IndCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/IndCard.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiBox.jsx
try { (() => {
function KpiBox({
  label,
  value,
  unit,
  delta,
  deltaDir = 'flat',
  big = false,
  valueColor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '22px 20px',
      textAlign: 'center',
      background: 'var(--grad-kpi)',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, children, value != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: big ? 'var(--fs-kpi-hero)' : 'var(--fs-kpi-l)',
      fontWeight: 'var(--fw-bold)',
      color: valueColor || 'var(--navy)',
      lineHeight: 'var(--lh-tight)'
    }
  }, value, unit ? /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 22,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--ink-4)'
    }
  }, unit) : null), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      marginTop: 8,
      fontWeight: 'var(--fw-bold)'
    }
  }, label), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Delta, {
    dir: deltaDir,
    size: 12
  }, delta)));
}
Object.assign(__ds_scope, { KpiBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiBox.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiMini.jsx
try { (() => {
function KpiMini({
  label,
  value,
  unit,
  delta,
  deltaDir = 'flat',
  level,
  danger = false,
  style
}) {
  const c = danger ? 'var(--red)' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '14px 16px',
      background: 'var(--grad-kpi-mini)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: c || 'var(--text-label)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-kpi-s)',
      fontWeight: 'var(--fw-bold)',
      color: c || 'var(--navy)',
      lineHeight: 'var(--lh-tight)'
    }
  }, value, unit ? /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 19,
      color: c || 'var(--ink-4)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, unit) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      marginTop: 8,
      minHeight: 22
    }
  }, delta ? /*#__PURE__*/React.createElement(__ds_scope.Delta, {
    dir: deltaDir,
    color: c,
    size: 13
  }, delta) : /*#__PURE__*/React.createElement("span", null), level ? /*#__PURE__*/React.createElement(__ds_scope.IndTag, {
    level: level,
    compact: true
  }) : null));
}
Object.assign(__ds_scope, { KpiMini });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiMini.jsx", error: String((e && e.message) || e) }); }

// components/data/ThresholdScale.jsx
try { (() => {
function ThresholdScale({
  bands = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${bands.length || 1},1fr)`,
      gap: 8,
      paddingTop: 14,
      borderTop: 'var(--border-dashed)',
      ...style
    }
  }, bands.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-label)',
      fontWeight: 'var(--fw-bold)',
      whiteSpace: 'nowrap'
    }
  }, b.range), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: '.04em',
      color: b.color,
      marginTop: 3
    }
  }, b.label))));
}
Object.assign(__ds_scope, { ThresholdScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ThresholdScale.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailBody.jsx
try { (() => {
function EmailBody({
  children,
  padding = '40px 50px 20px 50px',
  fontSize = 15
}) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "mobile-padding",
    style: {
      background: 'var(--email-surface)',
      padding,
      textAlign: 'left',
      fontSize,
      lineHeight: 1.6,
      color: 'var(--email-text)'
    }
  }, children));
}
Object.assign(__ds_scope, { EmailBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailBody.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailButtonRow.jsx
try { (() => {
function EmailButtonRow({
  buttons = [],
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    width: "100%",
    style: {
      marginBottom: 30,
      ...style
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, buttons.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("td", {
    width: "2%",
    className: "hide-mobile"
  }), /*#__PURE__*/React.createElement("td", {
    className: "stack-column",
    width: Math.floor(96 / buttons.length) + '%',
    align: "center",
    valign: "top"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellSpacing: "0",
    cellPadding: "0"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    style: b.primary ? {
      borderRadius: 'var(--email-radius-s)',
      background: 'var(--email-navy)'
    } : {
      borderRadius: 'var(--email-radius-s)',
      border: '2px solid var(--email-navy)',
      background: 'var(--email-surface)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: b.href,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontSize: 13,
      fontFamily: 'var(--font-email)',
      textDecoration: 'none',
      padding: b.primary ? '12px 16px' : '10px 16px',
      display: 'inline-block',
      fontWeight: 600,
      borderRadius: 'var(--email-radius-s)',
      color: b.primary ? '#ffffff' : 'var(--email-navy)',
      border: b.primary ? '1px solid var(--email-navy)' : undefined
    }
  }, ' ' + b.label + ' ')))))))))));
}
Object.assign(__ds_scope, { EmailButtonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailButtonRow.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailCallout.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--email-info-bg)',
    rail: 'var(--email-navy)',
    title: 'var(--email-navy)'
  },
  clinica: {
    bg: 'var(--email-success-bg)',
    rail: 'var(--email-green)',
    title: 'var(--email-navy)'
  },
  norma: {
    bg: 'var(--email-warn-bg)',
    rail: 'var(--email-gold)',
    title: 'var(--email-navy)'
  },
  alerta: {
    bg: 'var(--email-danger-bg)',
    rail: 'var(--email-danger)',
    title: 'var(--email-danger)'
  }
};
function EmailCallout({
  tone = 'info',
  title,
  titleSize = 20,
  children,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      borderLeft: 'var(--email-rail) solid ' + t.rail,
      padding: 20,
      borderRadius: 'var(--email-radius-s)',
      margin: '0 0 25px',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px 0',
      fontFamily: 'var(--font-email-display)',
      fontSize: titleSize,
      color: t.title,
      letterSpacing: 'var(--email-ls-display)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--email-fs-small)',
      color: tone === 'info' ? 'var(--email-text)' : 'var(--email-text-2)',
      lineHeight: 1.6,
      textAlign: 'justify'
    }
  }, children));
}
Object.assign(__ds_scope, { EmailCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailCallout.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailChip.jsx
try { (() => {
function EmailChip({
  children,
  tone = 'navy'
}) {
  const s = tone === 'gold' ? {
    background: 'var(--email-gold)',
    color: 'var(--email-navy)',
    padding: '2px 6px',
    fontWeight: 600,
    fontSize: 13
  } : {
    background: 'var(--email-navy)',
    color: '#ffffff',
    padding: '2px 8px',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '.5px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 'var(--email-radius-s)',
      ...s
    }
  }, children);
}
Object.assign(__ds_scope, { EmailChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailChip.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailDataTable.jsx
try { (() => {
function EmailDataTable({
  columns = [],
  rows = [],
  emptyRow = true,
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "10",
    cellSpacing: "0",
    width: "100%",
    style: {
      width: '100%',
      border: '1px solid var(--email-line)',
      borderCollapse: 'collapse',
      margin: '0 0 30px 0',
      fontSize: 'var(--email-fs-table)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--email-navy)',
      color: '#ffffff'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    align: c.align || 'center',
    width: c.width,
    style: {
      border: '1px solid var(--email-line)',
      fontWeight: 600,
      textTransform: 'uppercase'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: ri % 2 ? 'var(--email-zebra)' : 'var(--email-surface)'
    }
  }, r.map((cell, ci) => {
    const c = columns[ci] || {};
    const v = cell && typeof cell === 'object' && !React.isValidElement(cell) ? cell : {
      value: cell
    };
    return /*#__PURE__*/React.createElement("td", {
      key: ci,
      align: c.align || 'center',
      style: {
        border: '1px solid var(--email-line)',
        color: v.color || (c.align === 'left' ? 'var(--email-text)' : 'var(--email-text-3)'),
        fontWeight: v.strong ? 600 : c.align === 'left' ? 500 : 400
      }
    }, v.value);
  }))), emptyRow && /*#__PURE__*/React.createElement("tr", {
    style: {
      background: rows.length % 2 ? 'var(--email-zebra)' : 'var(--email-surface)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    align: c.align || 'center',
    style: {
      border: '1px solid var(--email-line)',
      color: 'var(--email-text-4)'
    }
  }, i === 0 || c.align === 'left' ? '\u00a0' : '-')))));
}
Object.assign(__ds_scope, { EmailDataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailDataTable.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailFooter.jsx
try { (() => {
function EmailFooter({
  logo = 'https://i.imgur.com/v8L0kuH.png',
  om = 'Hospital Naval de Recife',
  setor = 'Junta Regular de Saúde',
  telefone = '(81) 3036 - 9073',
  email = 'hnre.jrs@marinha.mil.br',
  endereco = 'Avenida Cruz Cabugá 1200, Santo Amaro, Recife/PE'
}) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "mobile-padding",
    style: {
      background: 'var(--email-navy)',
      padding: '20px 50px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    width: "100%",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "stack-column",
    width: "50%",
    align: "center",
    valign: "middle",
    style: {
      paddingRight: 15
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    width: "260",
    style: {
      width: 260,
      maxWidth: '100%',
      height: 'auto',
      display: 'inline-block',
      border: 0
    },
    alt: "Logo Marinha do Brasil"
  })), /*#__PURE__*/React.createElement("td", {
    className: "hide-mobile",
    width: "1",
    style: {
      borderLeft: '1px solid rgba(255,255,255,0.2)',
      fontSize: 1,
      lineHeight: '1px'
    }
  }, "\xA0"), /*#__PURE__*/React.createElement("td", {
    className: "stack-column footer-text",
    width: "49%",
    align: "left",
    valign: "middle",
    style: {
      paddingLeft: 20,
      fontFamily: 'var(--font-email)',
      fontSize: 'var(--email-fs-footer)',
      lineHeight: 1.4,
      color: '#ffffff'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--email-gold)',
      fontSize: 12
    }
  }, om), /*#__PURE__*/React.createElement("br", null), setor, /*#__PURE__*/React.createElement("br", null), "\uD83D\uDCDE ", telefone, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 5px',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "|"), " \uD83D\uDCE7 ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: '#ffffff',
      textDecoration: 'underline'
    }
  }, email), /*#__PURE__*/React.createElement("br", null), "\uD83D\uDCCD ", endereco))))));
}
Object.assign(__ds_scope, { EmailFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailFooter.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailHeader.jsx
try { (() => {
function EmailHeader({
  src = 'https://i.imgur.com/Btu1CAG.png',
  width = 700,
  alt = 'Cabeçalho Hospital Naval de Recife - Junta Regular de Saúde'
}) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 0,
      textAlign: 'center',
      background: 'var(--email-navy)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    width: width,
    style: {
      width: '100%',
      maxWidth: width,
      height: 'auto',
      display: 'block',
      border: 0
    },
    alt: alt
  })));
}
Object.assign(__ds_scope, { EmailHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailHeader.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailQuote.jsx
try { (() => {
function EmailQuote({
  children,
  source,
  tone = 'info',
  style
}) {
  const rail = tone === 'alerta' ? 'var(--email-danger-rail)' : 'var(--email-navy)';
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: (tone === 'alerta' ? '3px' : '2px') + ' solid ' + rail,
      paddingLeft: 15,
      margin: '10px 0 0',
      fontStyle: 'italic',
      color: tone === 'alerta' ? '#444444' : 'var(--email-navy)',
      textAlign: 'justify',
      lineHeight: 1.6,
      fontSize: 'var(--email-fs-small)'
    }
  }, children), source && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      textAlign: 'right',
      fontSize: 12,
      color: 'var(--email-text-3)',
      fontWeight: 600
    }
  }, source));
}
Object.assign(__ds_scope, { EmailQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailQuote.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailSectionTitle.jsx
try { (() => {
function EmailSectionTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--email-navy)',
      fontFamily: 'var(--font-email-display)',
      fontSize: 'var(--email-fs-h3)',
      letterSpacing: 'var(--email-ls-display)',
      margin: '0 0 15px',
      borderBottom: '2px solid var(--email-gold)',
      paddingBottom: 5,
      fontWeight: 400,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { EmailSectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailSectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailShell.jsx
try { (() => {
function EmailShell({
  children,
  width = 700,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 0,
      padding: '40px 0',
      background: 'var(--email-bg)',
      fontFamily: 'var(--font-email)',
      WebkitFontSmoothing: 'antialiased',
      ...style
    }
  }, /*#__PURE__*/React.createElement("center", {
    style: {
      width: '100%',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: '0 auto',
      boxShadow: 'var(--email-shadow)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    align: "center",
    border: "0",
    cellSpacing: "0",
    cellPadding: "0",
    width: "100%",
    style: {
      maxWidth: width,
      margin: 'auto',
      background: 'var(--email-surface)',
      fontFamily: 'var(--font-email)',
      width: '100%',
      borderRadius: 'var(--email-radius)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, children)))));
}
Object.assign(__ds_scope, { EmailShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailShell.jsx", error: String((e && e.message) || e) }); }

// components/email/EmailSignature.jsx
try { (() => {
function EmailSignature({
  closing = 'Respeitosamente,',
  byOrderOf,
  signer,
  style
}) {
  const people = [].concat(byOrderOf || [], signer || []);
  return /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    width: "100%",
    style: {
      borderTop: '1px solid var(--email-line)',
      paddingTop: 25,
      ...style
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-email)',
      color: 'var(--email-navy)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      margin: '0 0 ' + (byOrderOf ? 20 : 15) + 'px 0',
      fontWeight: 600
    }
  }, closing), byOrderOf && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      margin: '0 0 5px 0',
      color: 'var(--email-text-3)',
      fontStyle: 'italic'
    }
  }, "Por ordem de:"), people.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: byOrderOf ? 16 : 18,
      fontWeight: 700,
      color: 'var(--email-navy)',
      margin: '0 0 2px 0'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: byOrderOf ? 13 : 14,
      lineHeight: 1.4,
      color: 'var(--email-text-3)',
      marginBottom: i < people.length - 1 ? 25 : 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, p.rank), /*#__PURE__*/React.createElement("br", null), p.role)))))));
}
Object.assign(__ds_scope, { EmailSignature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/email/EmailSignature.jsx", error: String((e && e.message) || e) }); }

// components/layout/ElevatedCard.jsx
try { (() => {
function ElevatedCard({
  title,
  children,
  flush = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: flush ? '12px 20px 4px' : '22px 26px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-black)',
      letterSpacing: '.04em',
      color: 'var(--navy)',
      margin: '0 0 10px'
    }
  }, title), children);
}
Object.assign(__ds_scope, { ElevatedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ElevatedCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-eyebrow)',
      margin: '0 0 7px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/layout/Fonte.jsx
try { (() => {
function Fonte({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      fontSize: 'var(--fs-fonte)',
      color: 'var(--text-muted)',
      borderTop: 'var(--border-dashed)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Fonte });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Fonte.jsx", error: String((e && e.message) || e) }); }

// components/layout/LegendList.jsx
try { (() => {
function LegendList({
  items = [],
  layout = 'grid',
  columns = 3,
  style
}) {
  const wrap = layout === 'grid' ? {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns},auto)`,
    justifyContent: 'center',
    gap: '8px 22px'
  } : {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 8,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: layout === 'grid' ? 7 : 8,
      fontSize: layout === 'grid' ? 12 : 'var(--fs-eyebrow)',
      fontWeight: layout === 'grid' ? 'var(--fw-semibold)' : 'var(--fw-regular)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: layout === 'grid' ? 12 : 10,
      height: layout === 'grid' ? 12 : 10,
      borderRadius: 'var(--radius-swatch)',
      flex: 'none',
      background: it.color
    }
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.value != null && /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy)',
      marginLeft: 'auto',
      fontFamily: 'var(--font-core)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { LegendList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/LegendList.jsx", error: String((e && e.message) || e) }); }

// components/layout/Nota.jsx
try { (() => {
function Nota({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: '9px 12px',
      borderLeft: 'var(--border-accent-left)',
      background: 'var(--accent-soft)',
      borderRadius: 'var(--radius-nota)',
      fontSize: 'var(--fs-nota)',
      lineHeight: 'var(--lh-nota)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children);
}
Object.assign(__ds_scope, { Nota });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Nota.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionLabel.jsx
try { (() => {
function SectionLabel({
  children,
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-section)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      textAlign: align,
      margin: '0 0 10px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/slide/SignatureCard.jsx
try { (() => {
function SignatureCard({
  name,
  rank,
  role,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: '18px 30px',
      textAlign: 'center',
      minWidth: '52%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-lead)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: '.02em',
      color: 'var(--navy)'
    }
  }, name), rank && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--blue)',
      marginTop: 6
    }
  }, rank), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--blue)'
    }
  }, role));
}
Object.assign(__ds_scope, { SignatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/SignatureCard.jsx", error: String((e && e.message) || e) }); }

// components/slide/SlideBrand.jsx
try { (() => {
function SlideBrand({
  side = 'left',
  src,
  alt = '',
  base = '../..'
}) {
  const file = src || (side === 'left' ? base + '/assets/marca-marinha.png' : base + '/assets/brasao-hnre.png');
  return /*#__PURE__*/React.createElement("img", {
    src: file,
    alt: alt,
    style: {
      position: 'absolute',
      top: 'var(--brand-top)',
      height: 'var(--brand-h)',
      width: 'auto',
      zIndex: 5,
      [side]: 'var(--brand-inset)'
    }
  });
}
Object.assign(__ds_scope, { SlideBrand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/SlideBrand.jsx", error: String((e && e.message) || e) }); }

// components/slide/SlideFoot.jsx
try { (() => {
function SlideFoot({
  side = 'left',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--foot-bottom)',
      [side]: 'var(--brand-inset)',
      fontSize: 'var(--fs-foot)',
      letterSpacing: 'var(--ls-foot)',
      textTransform: 'uppercase',
      color: 'var(--text-footer)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, children);
}
Object.assign(__ds_scope, { SlideFoot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/SlideFoot.jsx", error: String((e && e.message) || e) }); }

// components/slide/SlideTitle.jsx
try { (() => {
function SlideTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      top: 'var(--h2-top)',
      left: 120,
      right: 120,
      height: 'var(--h2-h)',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-black)',
      lineHeight: 'var(--lh-title)',
      color: 'var(--text-title)',
      textWrap: 'balance',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SlideTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/SlideTitle.jsx", error: String((e && e.message) || e) }); }

// components/slide/SlideFrame.jsx
try { (() => {
function SlideFrame({
  title,
  tag,
  footLeft,
  footRight,
  brand = true,
  cover = false,
  base = '../..',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-document-role": "page",
    "data-screen-label": title,
    style: {
      position: 'relative',
      width: 'var(--stage-w)',
      height: 'var(--stage-h)',
      background: 'var(--surface-page)',
      padding: cover ? '104px 70px 32px' : 'var(--slide-pad-top) var(--slide-pad-x) var(--slide-pad-bottom)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'var(--font-core)',
      color: 'var(--navy)',
      ...style
    }
  }, brand && /*#__PURE__*/React.createElement(__ds_scope.SlideBrand, {
    side: "left",
    base: base
  }), brand && /*#__PURE__*/React.createElement(__ds_scope.SlideBrand, {
    side: "right",
    base: base
  }), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: 26,
      fontSize: 'var(--fs-slide-tag)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-foot)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, tag), title && /*#__PURE__*/React.createElement(__ds_scope.SlideTitle, null, title), children, footLeft && /*#__PURE__*/React.createElement(__ds_scope.SlideFoot, {
    side: "left"
  }, footLeft), footRight && /*#__PURE__*/React.createElement(__ds_scope.SlideFoot, {
    side: "right"
  }, footRight));
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/ChartBox.jsx
try { (() => {
/** Canvas de Chart.js montado por nome de configuração de charts.js. */
function ChartBox({
  chart,
  onChart,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const api = window.CongesCharts && window.CongesCharts.mount[chart];
    if (!api || !ref.current) return;
    const inst = api(ref.current);
    if (onChart) onChart(inst);
    return () => inst.destroy();
  }, [chart]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: ref
  }));
}
Object.assign(__ds_scope, { ChartBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/ChartBox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/SlideCapa.jsx
try { (() => {
function SlideCapa({
  base = '../..',
  competencia = 'JUL/2026'
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    cover: true,
    base: base,
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--fs-capa)',
      fontWeight: 'var(--fw-black)',
      lineHeight: 'var(--lh-capa)',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--navy)',
      margin: '130px 0 0'
    }
  }, "JUNTA REGULAR", /*#__PURE__*/React.createElement("br", null), "DE SA\xDADE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SignatureCard, {
    name: "MAURISTON RENAN MARTINS SILVA",
    rank: "Capit\xE3o-Tenente (Md)",
    role: "Presidente"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -14,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'var(--fw-black)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--ink-3)'
    }
  }, competencia)));
}
Object.assign(__ds_scope, { SlideCapa });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/SlideCapa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/SlideDistribuicao.jsx
try { (() => {
function SlideDistribuicao({
  base = '../..',
  foot = ['JRS/HNRe — JUL2026', 'CT (Md) Mauriston']
}) {
  const [legend, setLegend] = React.useState([]);
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    title: "DISTRIBUI\xC7\xC3O DAS INSPE\xC7\xD5ES DE SA\xDADE",
    base: base,
    footLeft: foot[0],
    footRight: foot[1]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 'var(--gap-body-row)',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, "Por finalidade"), /*#__PURE__*/React.createElement(__ds_scope.ChartBox, {
    chart: "finalidades",
    onChart: c => setLegend(c.$legend || [])
  }), /*#__PURE__*/React.createElement(__ds_scope.LegendList, {
    columns: 3,
    items: legend,
    style: {
      marginTop: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, "Por AMP"), /*#__PURE__*/React.createElement(__ds_scope.ChartBox, {
    chart: "amp"
  }))));
}
Object.assign(__ds_scope, { SlideDistribuicao });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/SlideDistribuicao.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/SlideFarol.jsx
try { (() => {
const G = 'var(--green-dark)',
  R = 'var(--red)';
const ROWS = [['% IS concluídas', {
  value: '91,9%',
  strong: true,
  color: G
}, {
  value: 'Excelente',
  color: G
}, {
  value: '10',
  strong: true
}], ['% Restituição DAMP', {
  value: '25,0%',
  strong: true,
  color: R
}, {
  value: 'Ruim',
  color: R
}, {
  value: '0',
  strong: true
}], ['% Restituição JSD', {
  value: '0,0%',
  strong: true,
  color: G
}, {
  value: 'Excelente',
  color: G
}, {
  value: '10',
  strong: true
}], ['% Desnumeração IS', {
  value: '0,0%',
  strong: true,
  color: G
}, {
  value: 'Excelente',
  color: G
}, {
  value: '10',
  strong: true
}], ['% Reprovação AO', {
  value: '0,0%',
  strong: true,
  color: G
}, {
  value: 'Excelente',
  color: G
}, {
  value: '10',
  strong: true
}], ['% Recuperação Militar', {
  value: '33,0%',
  strong: true,
  color: G
}, {
  value: 'Excelente',
  color: G
}, {
  value: '10',
  strong: true
}]];
function SlideFarol({
  base = '../..',
  foot = ['JRS/HNRe — JUL2026', 'CT (Md) Mauriston']
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    title: "FAROL DE RESULTADOS DOS INDICADORES",
    base: base,
    footLeft: foot[0],
    footRight: foot[1]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-stack)',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.18,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ElevatedCard, {
    flush: true,
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'var(--fw-black)',
      color: 'var(--navy)',
      letterSpacing: '.02em',
      marginBottom: 12
    }
  }, "PR\xCAMIO EFICI\xCANCIA PERICIAL - CPMM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 3fr',
      gap: 24,
      flex: 1,
      minHeight: 0,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRight: 'var(--border-hairline)',
      paddingRight: 20,
      paddingTop: 5,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--blue)'
    }
  }, "Pontua\xE7\xE3o Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-kpi-xl)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      color: 'var(--green-dark)',
      marginTop: 12
    }
  }, "50", /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 19,
      color: 'var(--ink-4)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, " / 60")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 'var(--fw-black)',
      marginTop: 10,
      color: 'var(--green-dark)'
    }
  }, "\u25B2 +5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DataTable, {
    columns: [{
      label: 'Indicador'
    }, {
      label: 'Valor'
    }, {
      label: 'Resultado'
    }, {
      label: 'Pontuação (0–60)'
    }],
    rows: ROWS,
    footer: ['', '', '', '50 pontos']
  }))))), /*#__PURE__*/React.createElement(__ds_scope.ElevatedCard, {
    style: {
      flex: 1.25,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ChartBox, {
    chart: "pontuacao",
    style: {
      padding: 8
    }
  }))));
}
Object.assign(__ds_scope, { SlideFarol });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/SlideFarol.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/SlideRecuperados.jsx
try { (() => {
function SlideRecuperados({
  base = '../..',
  foot = ['JRS/HNRe — JUL2026', 'CT (Md) Mauriston']
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    title: "INDICADOR DE MILITARES RECUPERADOS",
    base: base,
    footLeft: foot[0],
    footRight: foot[1]
  }, /*#__PURE__*/React.createElement(__ds_scope.IndCard, {
    rail: "var(--green)",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2.6fr',
      alignItems: 'center',
      gap: 28,
      margin: '0 26px 18px',
      padding: '30px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-tag)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "% RECUPERA\xC7\xC3O MILITAR"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 57,
      fontWeight: 'var(--fw-black)',
      color: 'var(--green-dark)',
      lineHeight: 1,
      margin: '10px 0'
    }
  }, "33,3", /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 16,
      color: 'var(--ink-4)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, "%")), /*#__PURE__*/React.createElement(__ds_scope.Delta, {
    dir: "down",
    size: 11.5
  }, "30,9pp"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IndTag, {
    level: "excelente"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: 'var(--border-hairline)',
      paddingLeft: 26,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-tag)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "F\xF3rmula do indicador"), /*#__PURE__*/React.createElement(__ds_scope.FormulaFraction, {
    style: {
      marginTop: 12
    },
    lhs: "IMR =",
    numerator: "n\xBA IS de T\xE9rminos com aptid\xE3o plena",
    denominator: "n\xBA IS de T\xE9rminos",
    suffix: "\xD7 100%"
  }), /*#__PURE__*/React.createElement(__ds_scope.ThresholdScale, {
    style: {
      marginTop: 16
    },
    bands: [{
      range: '10% ≤ X',
      label: 'EXCELENTE',
      color: 'var(--green)'
    }, {
      range: '7% ≤ X < 10%',
      label: 'MUITO BOM',
      color: 'var(--green)'
    }, {
      range: '5% ≤ X < 7%',
      label: 'BOM',
      color: 'var(--green)'
    }, {
      range: '3% ≤ X < 5%',
      label: 'REGULAR',
      color: 'var(--gold-ink)'
    }, {
      range: '0% ≤ X < 3%',
      label: 'RUIM',
      color: 'var(--red)'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 'var(--gap-body-row)',
      minHeight: 0,
      padding: '14px 26px 8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ElevatedCard, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ChartBox, {
    chart: "recuperados"
  }))));
}
Object.assign(__ds_scope, { SlideRecuperados });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/SlideRecuperados.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/SlideRestituicoes.jsx
try { (() => {
function SlideRestituicoes({
  base = '../..',
  foot = ['JRS/HNRe — JUL2026', 'CT (Md) Mauriston']
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    title: "TAXA DE RESTITUI\xC7\xD5ES DE IS PELO DAMP E JSD",
    base: base,
    footLeft: foot[0],
    footRight: foot[1]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginBottom: 'var(--gap-stack)',
      width: 794,
      height: 113,
      marginLeft: 35
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IndCard, {
    label: "% Restitui\xE7\xE3o DAMP",
    value: "25,0",
    unit: "%",
    delta: "11,2pp",
    deltaDir: "up",
    level: "ruim",
    rail: "var(--red)"
  }), /*#__PURE__*/React.createElement(__ds_scope.IndCard, {
    label: "% Restitui\xE7\xE3o JSD",
    value: "0,0",
    unit: "%",
    delta: "7,7pp",
    deltaDir: "up",
    level: "excelente",
    rail: "var(--green-dark)"
  }), /*#__PURE__*/React.createElement(__ds_scope.IndCard, {
    label: "% Reprova\xE7\xE3o AO",
    value: "0,0",
    unit: "%",
    delta: "0,0pp",
    level: "excelente",
    rail: "var(--green-dark)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 'var(--gap-body-row)',
      minHeight: 0,
      padding: '14px 26px 8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ElevatedCard, {
    title: "Retrabalho Pericial 2026",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ChartBox, {
    chart: "restituicoes"
  }))));
}
Object.assign(__ds_scope, { SlideRestituicoes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/SlideRestituicoes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/SlideVariaveis.jsx
try { (() => {
function SlideVariaveis({
  base = '../..',
  foot = ['JRS/HNRe — JUL2026', 'CT (Md) Mauriston']
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    title: "VARI\xC1VEIS DAS INSPE\xC7\xD5ES DE SA\xDADE",
    base: base,
    footLeft: foot[0],
    footRight: foot[1]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gap-kpi-row)',
      marginBottom: 'var(--sp-11)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.KpiMini, {
    label: "IS realizadas no m\xEAs",
    value: "91",
    delta: "47,1%",
    deltaDir: "down"
  }), /*#__PURE__*/React.createElement(__ds_scope.KpiMini, {
    label: "Taxa de absente\xEDsmo",
    value: "3,0",
    unit: "%",
    delta: "+0,3pp",
    deltaDir: "up",
    danger: true
  }), /*#__PURE__*/React.createElement(__ds_scope.KpiMini, {
    label: "% IS conclu\xEDdas",
    value: "91,9",
    unit: "%",
    delta: "2,1pp",
    deltaDir: "down",
    level: "excelente"
  }), /*#__PURE__*/React.createElement(__ds_scope.KpiMini, {
    label: "% Desnumera\xE7\xE3o IS",
    value: "0,0",
    unit: "%",
    delta: "0,0pp",
    level: "excelente"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 'var(--gap-body-row)',
      minHeight: 0,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ElevatedCard, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ChartBox, {
    chart: "variaveis"
  }))));
}
Object.assign(__ds_scope, { SlideVariaveis });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/SlideVariaveis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/CongesDeck.jsx
try { (() => {
const SLIDES = [{
  label: 'Capa',
  C: __ds_scope.SlideCapa
}, {
  label: 'Variáveis das IS',
  C: __ds_scope.SlideVariaveis
}, {
  label: 'Distribuição das IS',
  C: __ds_scope.SlideDistribuicao
}, {
  label: 'Restituições DAMP e JSD',
  C: __ds_scope.SlideRestituicoes
}, {
  label: 'Militares Recuperados',
  C: __ds_scope.SlideRecuperados
}, {
  label: 'Farol de Resultados',
  C: __ds_scope.SlideFarol
}];
function CongesDeck({
  base = '../..'
}) {
  const [i, setI] = React.useState(() => {
    const h = parseInt((location.hash || '').slice(1), 10);
    if (!isNaN(h) && h >= 0 && h < SLIDES.length) return h;
    try {
      const s = localStorage.getItem('congesDeckSlide');
      if (s !== null) return Math.min(SLIDES.length - 1, parseInt(s, 10) || 0);
    } catch (e) {}
    return 0;
  });
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const fit = () => setScale(Math.min(innerWidth / 1024, innerHeight / 768));
    fit();
    addEventListener('resize', fit);
    return () => removeEventListener('resize', fit);
  }, []);
  React.useEffect(() => {
    history.replaceState(null, '', '#' + i);
    try {
      localStorage.setItem('congesDeckSlide', String(i));
    } catch (e) {}
  }, [i]);
  React.useEffect(() => {
    const go = d => setI(p => Math.max(0, Math.min(SLIDES.length - 1, p + d)));
    const key = e => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'Home') setI(0);else if (e.key === 'End') setI(SLIDES.length - 1);else if (e.key === 'f') document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    };
    const click = e => {
      if (e.target.closest('[data-nav]')) return;
      e.shiftKey ? go(-1) : go(1);
    };
    const ctx = e => {
      e.preventDefault();
      go(-1);
    };
    addEventListener('keydown', key);
    addEventListener('click', click);
    addEventListener('contextmenu', ctx);
    return () => {
      removeEventListener('keydown', key);
      removeEventListener('click', click);
      removeEventListener('contextmenu', ctx);
    };
  }, []);
  const Current = SLIDES[i].C;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 1024,
      height: 768,
      transformOrigin: 'center center',
      transform: 'translate(-50%,-50%) scale(' + scale + ')'
    }
  }, /*#__PURE__*/React.createElement(Current, {
    base: base
  })), /*#__PURE__*/React.createElement("div", {
    "data-nav": true,
    style: {
      position: 'fixed',
      bottom: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 12px',
      background: 'rgba(255,255,255,.92)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-tag)',
      boxShadow: 'var(--shadow-card)'
    }
  }, SLIDES.map((s, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    title: s.label,
    style: {
      width: n === i ? 26 : 9,
      height: 9,
      borderRadius: 6,
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: n === i ? 'var(--navy)' : 'var(--line)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-foot)',
      textTransform: 'uppercase',
      color: 'var(--ink-4)',
      marginLeft: 6
    }
  }, SLIDES[i].label)));
}
Object.assign(__ds_scope, { CongesDeck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/CongesDeck.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conges-deck/charts.js
try { (() => {
/* Configurações Chart.js do deck CONGES — valores e plugins transpostos do original. */
(function () {
  if (!window.Chart) return;
  Chart.defaults.font.family = 'Montserrat, sans-serif';
  const NAVY = '#121C4B',
    BLUE = '#1c4587',
    GOLD = '#FAB932',
    GREEN = '#079558',
    RED = '#85200c',
    GREY = '#B9BFD1';
  const CORES6 = [NAVY, BLUE, GOLD, GREEN, RED, GREY];
  const br = (v, d) => v.toFixed(d == null ? 1 : d).replace('.', ',');
  const tip = {
    backgroundColor: NAVY,
    padding: 10,
    cornerRadius: 8,
    titleFont: {
      weight: '800'
    }
  };
  function barValueLabels(values) {
    return {
      id: 'barValueLabels',
      afterDatasetsDraw(chart) {
        const {
            ctx
          } = chart,
          meta = chart.getDatasetMeta(0);
        ctx.save();
        ctx.font = '800 11.5px Montserrat, sans-serif';
        ctx.fillStyle = NAVY;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        meta.data.forEach((bar, i) => {
          if (values[i] == null) return;
          ctx.fillText(values[i], bar.x, bar.y - 6);
        });
        ctx.restore();
      }
    };
  }
  function lineValueLabels(fmt, fontSize, belowDatasets) {
    const fs = fontSize || 10.5,
      below = belowDatasets || [];
    return {
      id: 'lineValueLabels',
      afterDatasetsDraw(chart) {
        const {
          ctx
        } = chart;
        ctx.save();
        ctx.font = '800 ' + fs + 'px Montserrat, sans-serif';
        chart.data.datasets.forEach((ds, di) => {
          const meta = chart.getDatasetMeta(di),
            isBelow = below.indexOf(di) !== -1;
          ctx.fillStyle = ds.borderColor;
          meta.data.forEach((pt, i) => {
            const v = ds.data[i];
            if (v == null) return;
            const last = meta.data.length - 1;
            ctx.textAlign = i === 0 ? 'left' : i === last ? 'right' : 'center';
            const dx = i === 0 ? 5 : i === last ? -5 : 0;
            const bp = isBelow && pt.y + 9 + fs + 2 < chart.chartArea.bottom;
            ctx.textBaseline = bp ? 'top' : 'bottom';
            ctx.fillText(fmt(v), pt.x + dx, pt.y + (bp ? 9 : -9));
          });
        });
        ctx.restore();
      }
    };
  }
  function bandPlugin(bands) {
    return {
      id: 'bandPlugin',
      beforeDraw(chart) {
        const {
          ctx,
          chartArea: {
            left,
            right
          },
          scales: {
            y
          }
        } = chart;
        ctx.save();
        bands.forEach(b => {
          const y0 = y.getPixelForValue(Math.min(b.from, b.to)),
            y1 = y.getPixelForValue(Math.max(b.from, b.to));
          ctx.fillStyle = b.color;
          ctx.fillRect(left, y1, right - left, y0 - y1);
        });
        ctx.restore();
      }
    };
  }
  function thresholdLines(lines) {
    return {
      id: 'thresholdLines',
      afterDatasetsDraw(chart) {
        const {
          ctx,
          chartArea: {
            left,
            right
          },
          scales: {
            y
          }
        } = chart;
        ctx.save();
        lines.forEach(l => {
          const yp = y.getPixelForValue(l.v);
          ctx.setLineDash([4, 4]);
          ctx.strokeStyle = l.color;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(left, yp);
          ctx.lineTo(right, yp);
          ctx.stroke();
          ctx.setLineDash([]);
          if (l.label) {
            ctx.font = '700 9.5px Montserrat, sans-serif';
            ctx.fillStyle = l.color;
            ctx.textAlign = 'left';
            if (l.pos === 'below') {
              ctx.textBaseline = 'top';
              ctx.fillText(l.label, left + 4, yp + 3);
            } else {
              ctx.textBaseline = 'bottom';
              ctx.fillText(l.label, left + 4, yp - 3);
            }
          }
        });
        ctx.restore();
      }
    };
  }
  function curveFillToValue(dsIndex, value, color) {
    return {
      id: 'curveFill' + dsIndex + value,
      beforeDatasetsDraw(chart) {
        const {
            ctx,
            scales: {
              y
            }
          } = chart,
          meta = chart.getDatasetMeta(dsIndex);
        if (!meta || !meta.data.length) return;
        const yT = y.getPixelForValue(value);
        ctx.save();
        ctx.beginPath();
        meta.data.forEach((pt, i) => {
          i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
        });
        const last = meta.data[meta.data.length - 1];
        ctx.lineTo(last.x, yT);
        ctx.lineTo(meta.data[0].x, yT);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
      }
    };
  }
  const MESES12 = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const MESES7 = MESES12.slice(0, 7);
  const DATA = {
    y2026: [119, 76, 69, 101, 144, 200, 91, null, null, null, null, null],
    y2025: [71, 92, 60, 91, 93, 118, 172, 132, 92, 266, 96, 187],
    finalidades: [{
      n: 'Benefícios',
      v: 15
    }, {
      n: 'Ingresso',
      v: 13
    }, {
      n: 'Términos (Incap./Restrições)',
      v: 12
    }, {
      n: 'Licenciamentos SAM/SMV/SMI',
      v: 9
    }, {
      n: 'VDF',
      v: 7
    }, {
      n: '(Re)Engajamento',
      v: 6
    }, {
      n: 'Controle Trienal',
      v: 6
    }, {
      n: 'Prorrogação Tempo de Serviço',
      v: 5
    }, {
      n: 'TTC/RM1',
      v: 5
    }, {
      n: 'LTSPF',
      v: 5
    }, {
      n: 'Controle Semestral de Raios-X',
      v: 4
    }, {
      n: 'Outras/Eventuais',
      v: 1
    }],
    amp: [{
      n: 'IS concluídas por JRS',
      cod: 'JRS',
      v: 66,
      c: NAVY,
      txt: '#fff'
    }, {
      n: 'IS concluídas por MPI',
      cod: 'MPI',
      v: 22,
      c: GOLD,
      txt: NAVY
    }],
    recuperados: [43.90, 64.29, 58.33, 60.00, 46.67, 64.29, 33.33],
    damp: [64.29, 55.56, 33.33, 23.08, 43.24, 36.23, 25.00],
    jsd: [33.33, 22.22, 0.00, 16.67, 0.00, 7.69, 0.00],
    pontuacao: [40, 35, 47, 40, 45, 45, 50],
    aoEstoque: [38, 42, 35, 31, 27, 24, 21],
    aoConcluidos: [12, 9, 14, 11, 16, 13, 15]
  };
  const axis = extra => Object.assign({
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          weight: '600',
          size: 11
        },
        color: '#5A627A'
      },
      grid: {
        color: 'rgba(227,230,237,.7)'
      },
      border: {
        display: false
      }
    },
    x: {
      ticks: {
        font: {
          weight: '600',
          size: 11
        },
        color: NAVY
      },
      grid: {
        display: false
      }
    }
  }, extra || {});
  const API = {
    variaveis(cv) {
      return new Chart(cv, {
        data: {
          labels: MESES12,
          datasets: [{
            type: 'bar',
            label: '2026 (parcial)',
            data: DATA.y2026,
            backgroundColor: NAVY,
            borderRadius: 4,
            maxBarThickness: 30,
            order: 2
          }, {
            type: 'line',
            label: '2025 (completo)',
            data: DATA.y2025,
            borderColor: GOLD,
            backgroundColor: GOLD,
            borderWidth: 2.5,
            tension: .35,
            pointRadius: 3,
            pointBackgroundColor: '#fff',
            pointBorderColor: GOLD,
            pointBorderWidth: 1.5,
            order: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 28,
              right: 8
            }
          },
          scales: axis(),
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  weight: '600',
                  size: 11
                },
                boxWidth: 12,
                boxHeight: 12
              }
            },
            tooltip: tip
          }
        },
        plugins: [barValueLabels(DATA.y2026)]
      });
    },
    finalidades(cv) {
      const total = DATA.finalidades.reduce((s, x) => s + x.v, 0);
      const ord = [...DATA.finalidades].sort((a, b) => b.v - a.v);
      const top5 = ord.slice(0, 5).map((x, i) => ({
        ...x,
        c: CORES6[i]
      }));
      const resto = ord.slice(5).reduce((s, x) => s + x.v, 0);
      const dd = [...top5, {
        n: 'Outras (' + (ord.length - 5) + ' finalidades)',
        v: resto,
        c: CORES6[5]
      }];
      const TXT6 = ['#fff', '#fff', NAVY, '#fff', '#fff', NAVY];
      const centerText = {
        id: 'centerText',
        afterDraw(chart) {
          const {
            ctx,
            chartArea: {
              width,
              height,
              left,
              top
            }
          } = chart;
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '800 92px Montserrat, sans-serif';
          ctx.fillStyle = NAVY;
          ctx.fillText(total, left + width / 2, top + height / 2 - 16);
          ctx.font = '700 15px Montserrat, sans-serif';
          ctx.fillStyle = '#5A627A';
          ctx.fillText('IS NO MÊS', left + width / 2, top + height / 2 + 38);
          ctx.restore();
        }
      };
      const sliceLabels = {
        id: 'donutSliceLabels',
        afterDraw(chart) {
          const {
              ctx
            } = chart,
            meta = chart.getDatasetMeta(0);
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '800 14.5px Montserrat, sans-serif';
          meta.data.forEach((arc, i) => {
            const ang = (arc.startAngle + arc.endAngle) / 2,
              r = (arc.innerRadius + arc.outerRadius) / 2;
            ctx.fillStyle = TXT6[i];
            ctx.fillText(br(dd[i].v / total * 100) + '%', arc.x + Math.cos(ang) * r, arc.y + Math.sin(ang) * r);
          });
          ctx.restore();
        }
      };
      const ch = new Chart(cv, {
        type: 'doughnut',
        data: {
          labels: dd.map(x => x.n),
          datasets: [{
            data: dd.map(x => x.v),
            backgroundColor: dd.map(x => x.c),
            borderWidth: 2,
            borderColor: '#fff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '58%',
          layout: {
            padding: {
              left: 26,
              right: 26,
              top: 22,
              bottom: 22
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: tip
          }
        },
        plugins: [centerText, sliceLabels]
      });
      ch.$legend = dd.map(x => ({
        label: x.n.split(' (')[0],
        color: x.c
      }));
      return ch;
    },
    amp(cv) {
      const total = DATA.amp.reduce((s, d) => s + d.v, 0);
      const inline = {
        id: 'pieInlineLabels',
        afterDraw(chart) {
          const {
              ctx
            } = chart,
            meta = chart.getDatasetMeta(0);
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          meta.data.forEach((arc, i) => {
            const ang = (arc.startAngle + arc.endAngle) / 2,
              r = arc.outerRadius * .62;
            const x = arc.x + Math.cos(ang) * r,
              y = arc.y + Math.sin(ang) * r;
            ctx.fillStyle = DATA.amp[i].txt;
            ctx.font = '800 25px Montserrat, sans-serif';
            ctx.fillText(DATA.amp[i].cod, x, y - 13);
            ctx.font = '800 18px Montserrat, sans-serif';
            ctx.fillText(br(DATA.amp[i].v / total * 100) + '%', x, y + 13);
          });
          ctx.restore();
        }
      };
      return new Chart(cv, {
        type: 'pie',
        data: {
          labels: DATA.amp.map(d => d.n),
          datasets: [{
            data: DATA.amp.map(d => d.v),
            backgroundColor: DATA.amp.map(d => d.c),
            borderWidth: 2,
            borderColor: '#fff',
            offset: [0, 28]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 14,
              right: 38
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: Object.assign({}, tip, {
              callbacks: {
                label: c => c.label + ': ' + c.parsed + ' IS (' + br(c.parsed / total * 100) + '%)'
              }
            })
          }
        },
        plugins: [inline]
      });
    },
    recuperados(cv) {
      return new Chart(cv, {
        type: 'line',
        data: {
          labels: MESES7,
          datasets: [{
            data: DATA.recuperados,
            borderColor: NAVY,
            backgroundColor: NAVY,
            borderWidth: 2.5,
            tension: .4,
            pointRadius: 2.5,
            pointBackgroundColor: '#fff',
            pointBorderColor: NAVY,
            pointBorderWidth: 1.3,
            pointHoverRadius: 4,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 28,
              right: 42,
              left: 28
            }
          },
          scales: {
            y: {
              min: 0,
              max: 80,
              ticks: {
                callback: v => v + '%',
                font: {
                  weight: '600',
                  size: 11
                },
                color: '#3D4460'
              },
              grid: {
                color: 'rgba(255,255,255,.6)'
              },
              border: {
                display: false
              }
            },
            x: {
              ticks: {
                font: {
                  weight: '700',
                  size: 11
                },
                color: NAVY
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: Object.assign({}, tip, {
              callbacks: {
                label: c => br(c.parsed.y, 2) + '%'
              }
            })
          }
        },
        plugins: [bandPlugin([{
          from: 3,
          to: 5,
          color: 'rgba(250,185,50,.18)'
        }, {
          from: 0,
          to: 3,
          color: 'rgba(133,32,12,.12)'
        }]), curveFillToValue(0, 5, 'rgba(7,149,88,.22)'), thresholdLines([{
          v: 5,
          color: GREEN,
          label: 'Bom ≥5%',
          pos: 'above'
        }, {
          v: 3,
          color: RED,
          label: 'Ruim <3%',
          pos: 'below'
        }]), lineValueLabels(v => br(v) + '%', 13)]
      });
    },
    restituicoes(cv) {
      return new Chart(cv, {
        type: 'line',
        data: {
          labels: MESES7,
          datasets: [{
            label: '% Restituição DAMP',
            data: DATA.damp,
            borderColor: NAVY,
            backgroundColor: NAVY,
            borderWidth: 2.5,
            tension: .4,
            pointRadius: 2.5,
            pointBackgroundColor: '#fff',
            pointBorderColor: NAVY,
            pointBorderWidth: 1.3,
            pointHoverRadius: 4,
            fill: false
          }, {
            label: '% Restituição JSD',
            data: DATA.jsd,
            borderColor: RED,
            backgroundColor: RED,
            borderWidth: 2.5,
            tension: .4,
            pointRadius: 2.5,
            pointBackgroundColor: '#fff',
            pointBorderColor: RED,
            pointBorderWidth: 1.3,
            pointHoverRadius: 4,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 28,
              right: 42,
              left: 28
            }
          },
          scales: {
            y: {
              min: 0,
              max: 70,
              ticks: {
                callback: v => v + '%',
                font: {
                  weight: '600',
                  size: 11
                },
                color: '#3D4460'
              },
              grid: {
                color: 'rgba(255,255,255,.6)'
              },
              border: {
                display: false
              }
            },
            x: {
              ticks: {
                font: {
                  weight: '700',
                  size: 11
                },
                color: NAVY
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  weight: '600',
                  size: 11
                },
                boxWidth: 12,
                boxHeight: 12
              }
            },
            tooltip: Object.assign({}, tip, {
              callbacks: {
                label: c => c.dataset.label + ': ' + br(c.parsed.y, 2) + '%'
              }
            })
          }
        },
        plugins: [bandPlugin([{
          from: 0,
          to: 10,
          color: 'rgba(7,149,88,.07)'
        }, {
          from: 10,
          to: 15,
          color: 'rgba(250,185,50,.09)'
        }, {
          from: 15,
          to: 70,
          color: 'rgba(133,32,12,.06)'
        }]), thresholdLines([{
          v: 10,
          color: GREEN,
          label: 'Bom <10%',
          pos: 'below'
        }, {
          v: 15,
          color: RED,
          label: 'Ruim ≥15%',
          pos: 'above'
        }]), lineValueLabels(v => br(v) + '%', 11.5, [1])]
      });
    },
    pontuacao(cv) {
      return new Chart(cv, {
        type: 'line',
        data: {
          labels: MESES7,
          datasets: [{
            data: DATA.pontuacao,
            borderColor: NAVY,
            backgroundColor: 'rgba(7,149,88,.14)',
            borderWidth: 2.5,
            tension: .4,
            pointRadius: 2.5,
            pointBackgroundColor: '#fff',
            pointBorderColor: NAVY,
            pointBorderWidth: 1.3,
            pointHoverRadius: 4,
            fill: 'origin'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 30,
              right: 26
            }
          },
          scales: {
            y: {
              min: 0,
              max: 60,
              ticks: {
                font: c => ({
                  weight: '700',
                  size: c.tick && c.tick.value === 60 ? 22 : 11
                }),
                color: c => c.tick && c.tick.value === 60 ? NAVY : '#3D4460'
              },
              grid: {
                color: 'rgba(227,230,237,.7)'
              },
              border: {
                display: false
              }
            },
            x: {
              ticks: {
                font: {
                  weight: '700',
                  size: 11
                },
                color: NAVY
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: Object.assign({}, tip, {
              callbacks: {
                label: c => c.parsed.y + ' pts'
              }
            })
          }
        },
        plugins: [lineValueLabels(v => v + ' pts', 14)]
      });
    }
  };
  API.finalidadesBar = function (cv) {
    const ord = [...DATA.finalidades].sort((a, b) => b.v - a.v);
    return new Chart(cv, {
      type: 'bar',
      data: {
        labels: ord.map(x => x.n),
        datasets: [{
          data: ord.map(x => x.v),
          backgroundColor: NAVY,
          borderRadius: 4,
          maxBarThickness: 18
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            right: 26
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              font: {
                weight: '600',
                size: 10
              },
              color: '#5A627A'
            },
            grid: {
              color: 'rgba(227,230,237,.7)'
            },
            border: {
              display: false
            }
          },
          y: {
            ticks: {
              font: {
                weight: '700',
                size: 10
              },
              color: NAVY,
              autoSkip: false
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: tip
        }
      },
      plugins: [{
        id: 'hBarValues',
        afterDatasetsDraw(chart) {
          const {
              ctx
            } = chart,
            meta = chart.getDatasetMeta(0);
          ctx.save();
          ctx.font = '800 10.5px Montserrat, sans-serif';
          ctx.fillStyle = NAVY;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          meta.data.forEach((bar, i) => ctx.fillText(ord[i].v, bar.x + 6, bar.y));
          ctx.restore();
        }
      }]
    });
  };
  API.aoEstoque = function (cv) {
    return new Chart(cv, {
      data: {
        labels: MESES7,
        datasets: [{
          type: 'bar',
          label: 'AO concluídos',
          data: DATA.aoConcluidos,
          backgroundColor: GREEN,
          borderRadius: 4,
          maxBarThickness: 26,
          order: 2
        }, {
          type: 'line',
          label: 'Estoque de AO',
          data: DATA.aoEstoque,
          borderColor: RED,
          backgroundColor: RED,
          borderWidth: 2.5,
          tension: .35,
          pointRadius: 3,
          pointBackgroundColor: '#fff',
          pointBorderColor: RED,
          pointBorderWidth: 1.5,
          order: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 26,
            right: 10
          }
        },
        scales: axis(),
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                weight: '600',
                size: 10.5
              },
              boxWidth: 12,
              boxHeight: 12
            }
          },
          tooltip: tip
        }
      },
      plugins: [lineValueLabels(v => v, 11)]
    });
  };
  window.CongesCharts = {
    DATA,
    CORES6,
    mount: API,
    br
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conges-deck/charts.js", error: String((e && e.message) || e) }); }

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Delta = __ds_scope.Delta;

__ds_ns.FormulaFraction = __ds_scope.FormulaFraction;

__ds_ns.IndCard = __ds_scope.IndCard;

__ds_ns.IndTag = __ds_scope.IndTag;

__ds_ns.KpiBox = __ds_scope.KpiBox;

__ds_ns.KpiMini = __ds_scope.KpiMini;

__ds_ns.ThresholdScale = __ds_scope.ThresholdScale;

__ds_ns.EmailBody = __ds_scope.EmailBody;

__ds_ns.EmailButtonRow = __ds_scope.EmailButtonRow;

__ds_ns.EmailCallout = __ds_scope.EmailCallout;

__ds_ns.EmailChip = __ds_scope.EmailChip;

__ds_ns.EmailDataTable = __ds_scope.EmailDataTable;

__ds_ns.EmailFooter = __ds_scope.EmailFooter;

__ds_ns.EmailHeader = __ds_scope.EmailHeader;

__ds_ns.EmailQuote = __ds_scope.EmailQuote;

__ds_ns.EmailSectionTitle = __ds_scope.EmailSectionTitle;

__ds_ns.EmailShell = __ds_scope.EmailShell;

__ds_ns.EmailSignature = __ds_scope.EmailSignature;

__ds_ns.ElevatedCard = __ds_scope.ElevatedCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Fonte = __ds_scope.Fonte;

__ds_ns.LegendList = __ds_scope.LegendList;

__ds_ns.Nota = __ds_scope.Nota;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SignatureCard = __ds_scope.SignatureCard;

__ds_ns.SlideBrand = __ds_scope.SlideBrand;

__ds_ns.SlideFoot = __ds_scope.SlideFoot;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.SlideTitle = __ds_scope.SlideTitle;

__ds_ns.ChartBox = __ds_scope.ChartBox;

__ds_ns.CongesDeck = __ds_scope.CongesDeck;

__ds_ns.SlideCapa = __ds_scope.SlideCapa;

__ds_ns.SlideDistribuicao = __ds_scope.SlideDistribuicao;

__ds_ns.SlideFarol = __ds_scope.SlideFarol;

__ds_ns.SlideRecuperados = __ds_scope.SlideRecuperados;

__ds_ns.SlideRestituicoes = __ds_scope.SlideRestituicoes;

__ds_ns.SlideVariaveis = __ds_scope.SlideVariaveis;

})();
