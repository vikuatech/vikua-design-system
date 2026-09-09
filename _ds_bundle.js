/* @ds-bundle: {"format":4,"namespace":"VikuaDesignSystem_da98a9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DataLegend","sourcePath":"components/data/DataLegend.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Chip","sourcePath":"components/feedback/Chip.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ErrorState","sourcePath":"components/feedback/ErrorState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"AskDataPanel","sourcePath":"components/intelligence/AskDataPanel.jsx"},{"name":"InsightCard","sourcePath":"components/intelligence/InsightCard.jsx"},{"name":"MapPanel","sourcePath":"components/intelligence/MapPanel.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"75853e337ccb","components/actions/Fab.jsx":"4a83c91cb3e4","components/actions/IconButton.jsx":"1d8708609889","components/data/BarChart.jsx":"e0c414e12c6a","components/data/Card.jsx":"b8f83f112596","components/data/DataLegend.jsx":"662bd1d94541","components/data/DataTable.jsx":"2ea2aaca1935","components/data/Metric.jsx":"a978f685f288","components/feedback/Alert.jsx":"431a4ecbf173","components/feedback/Chip.jsx":"ce93edbbec89","components/feedback/EmptyState.jsx":"88f0896c2329","components/feedback/ErrorState.jsx":"0722c522fb91","components/feedback/Modal.jsx":"356844a010ba","components/feedback/Skeleton.jsx":"8ae6b33822d7","components/feedback/StatusBadge.jsx":"088a3c658eba","components/forms/Checkbox.jsx":"8260e4130be7","components/forms/Field.jsx":"6e8ecde71cdb","components/forms/SearchBar.jsx":"f28b5a86193b","components/forms/Select.jsx":"a8b3a27dd0a6","components/forms/Switch.jsx":"d61eed658149","components/icons/Icon.jsx":"648e992fc7b9","components/intelligence/AskDataPanel.jsx":"1ebf13fd3509","components/intelligence/InsightCard.jsx":"0703b5a56a9f","components/intelligence/MapPanel.jsx":"6ddef8813153","components/navigation/AppHeader.jsx":"6c46d03acd67","components/navigation/Sidebar.jsx":"5375112bd654","ui_kits/vikua_platform/BoardsScreen.jsx":"f4b948681a01","ui_kits/vikua_platform/InsightsScreen.jsx":"087a6a97ccd3","ui_kits/vikua_platform/MapScreen.jsx":"3a510b96b51e","ui_kits/vikua_platform/Shell.jsx":"fba0ada5f685","ui_kits/vikua_platform/UsersScreen.jsx":"b141c7834513"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VikuaDesignSystem_da98a9 = window.VikuaDesignSystem_da98a9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: 32,
    padding: "0 14px",
    fontSize: 13
  },
  md: {
    height: 40,
    padding: "0 20px",
    fontSize: 14
  },
  lg: {
    height: 48,
    padding: "0 26px",
    fontSize: 15
  }
};
function skin(variant) {
  switch (variant) {
    case "secondary":
      return {
        background: "var(--vk-brand-deep)",
        color: "var(--vk-on-brand)",
        border: "1px solid transparent"
      };
    case "outline":
      return {
        background: "var(--vk-surface)",
        color: "var(--vk-text-strong-2)",
        border: "1px solid var(--vk-border-strong)"
      };
    case "text":
      return {
        background: "transparent",
        color: "var(--vk-info)",
        border: "1px solid transparent"
      };
    case "destructive":
      return {
        background: "var(--vk-danger)",
        color: "#FFFFFF",
        border: "1px solid transparent"
      };
    default:
      return {
        background: "var(--vk-accent)",
        color: "#FFFFFF",
        border: "1px solid transparent"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  uppercase = false,
  fullWidth = false,
  icon = null,
  onClick,
  type = "button",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const look = skin(variant);
  const isPrimary = variant === "primary";
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--vk-space-2)",
      height: s.height,
      padding: variant === "text" ? "0 14px" : s.padding,
      fontSize: s.fontSize,
      fontFamily: "var(--vk-font-ui)",
      fontWeight: uppercase ? 700 : 600,
      letterSpacing: uppercase ? "0.04em" : "normal",
      textTransform: uppercase ? "uppercase" : "none",
      borderRadius: "var(--vk-radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      width: fullWidth ? "100%" : "auto",
      whiteSpace: "nowrap",
      transition: "background var(--vk-motion-fast) var(--vk-ease), color var(--vk-motion-fast) var(--vk-ease)",
      ...look,
      ...(disabled ? {
        background: "var(--vk-disabled-bg)",
        color: "var(--vk-disabled-text)",
        border: "1px solid transparent"
      } : null),
      ...(hover && !disabled ? isPrimary ? {
        background: "var(--vk-accent-hover)"
      } : variant === "secondary" ? {
        background: "#0A2450"
      } : variant === "outline" ? {
        background: "var(--vk-fill-subtle)"
      } : variant === "destructive" ? {
        background: "#C93F3E"
      } : {
        color: "var(--vk-brand-deep)"
      } : null),
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
function Fab({
  children,
  label = "Crear",
  size = 52,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: "var(--vk-radius-pill)",
      border: "none",
      background: hover ? "var(--vk-accent-hover)" : "var(--vk-accent)",
      color: "#FFFFFF",
      boxShadow: "var(--vk-elev-accent)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: Math.round(size / 2),
      fontWeight: 300,
      lineHeight: 1,
      transition: "background var(--vk-motion-fast) var(--vk-ease)",
      ...style
    }
  }, children || "+");
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 44
};
function IconButton({
  children,
  label,
  variant = "subtle",
  size = "md",
  shape = "square",
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const look = variant === "accent" ? {
    background: "var(--vk-accent)",
    color: "#FFFFFF"
  } : variant === "ghost" ? {
    background: "transparent",
    color: "var(--vk-text-strong-2)"
  } : variant === "onBrand" ? {
    background: "rgba(255,255,255,0.10)",
    color: "#FFFFFF"
  } : {
    background: "var(--vk-fill-subtle)",
    color: "var(--vk-text-strong-2)"
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: shape === "circle" ? "var(--vk-radius-pill)" : "var(--vk-radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      flexShrink: 0,
      transition: "background var(--vk-motion-fast) var(--vk-ease)",
      ...look,
      ...(hover && !disabled ? {
        background: variant === "accent" ? "var(--vk-accent-hover)" : "var(--vk-surface-subtle)"
      } : null),
      ...(disabled ? {
        background: "var(--vk-disabled-bg)",
        color: "var(--vk-disabled-text)"
      } : null),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function BarChart({
  data = [],
  highlight = -1,
  height = 120,
  note,
  style
}) {
  const max = Math.max(1, ...data.map(d => d.value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      height,
      paddingBottom: 6,
      borderBottom: "1px solid var(--vk-border)"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    title: d.label + ": " + d.value,
    style: {
      flex: 1,
      height: Math.round(d.value / max * 100) + "%",
      background: i === highlight ? "var(--vk-accent)" : "var(--vk-data-cat-1)",
      borderRadius: "4px 4px 0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11.5,
      color: "var(--vk-text-subtle)",
      marginTop: 6
    }
  }, data.map(d => /*#__PURE__*/React.createElement("span", {
    key: d.label
  }, d.label))), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontSize: 13,
      lineHeight: 1.65,
      color: "var(--vk-text-muted)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  children,
  title,
  subtitle,
  label,
  footnote,
  tone = "surface",
  padding = 20,
  elevation = 1,
  style
}) {
  const dark = tone === "brand";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? "var(--vk-brand-deep)" : "var(--vk-surface)",
      color: dark ? "var(--vk-on-brand)" : "var(--vk-text)",
      borderRadius: "var(--vk-radius-lg)",
      boxShadow: elevation === 0 ? "none" : elevation === 2 ? "var(--vk-elev-2)" : elevation === 3 ? "var(--vk-elev-3)" : "var(--vk-elev-1)",
      border: elevation === 0 && !dark ? "1px solid var(--vk-border)" : "none",
      padding,
      fontFamily: "var(--vk-font-ui)",
      boxSizing: "border-box",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--vk-text-subtle)",
      marginBottom: 18
    }
  }, label) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "24px"
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: dark ? "var(--vk-on-brand-muted)" : "var(--vk-text-subtle)",
      marginTop: 3
    }
  }, subtitle) : null, (title || subtitle) && children ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--vk-space-4)"
    }
  }) : null, children, footnote ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: "1px solid var(--vk-surface-subtle)",
      fontSize: 13,
      lineHeight: 1.65,
      color: "var(--vk-text-muted)"
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataLegend.jsx
try { (() => {
const SCALES = {
  sequential: ["var(--vk-data-seq-1)", "var(--vk-data-seq-2)", "var(--vk-data-seq-3)", "var(--vk-data-seq-4)", "var(--vk-data-seq-5)"],
  divergent: ["var(--vk-data-div-1)", "var(--vk-data-div-2)", "var(--vk-data-div-3)", "var(--vk-data-div-4)", "var(--vk-data-div-5)"]
};
const CATEGORICAL = ["var(--vk-data-cat-1)", "var(--vk-data-cat-2)", "var(--vk-data-cat-3)", "var(--vk-data-cat-4)", "var(--vk-data-cat-5)", "var(--vk-data-cat-6)"];
function DataLegend({
  scale = "sequential",
  title,
  labels = ["bajo", "alto"],
  series = [],
  unit,
  includeNull = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      marginBottom: 8
    }
  }, title) : null, scale === "categorical" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, series.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      color: "var(--vk-text-strong-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: CATEGORICAL[i % CATEGORICAL.length]
    }
  }), s))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderRadius: "var(--vk-radius-sm)",
      overflow: "hidden"
    }
  }, SCALES[scale].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 26,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--vk-text-subtle)",
      marginTop: 6
    }
  }, labels.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l)))), unit ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--vk-text-subtle)",
      marginTop: 6
    }
  }, unit) : null, includeNull ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      color: "var(--vk-text-strong-2)",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "var(--vk-data-null)"
    }
  }), "No disponible") : null);
}
Object.assign(__ds_scope, { DataLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataLegend.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  title,
  caption,
  footnote,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      boxShadow: "var(--vk-elev-1)",
      overflow: "hidden",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, title || caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 17
    }
  }, title), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--vk-text-subtle)"
    }
  }, caption) : null) : null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--vk-table-header)",
      color: "#FFFFFF"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.numeric ? "right" : "left",
      fontSize: 13,
      fontWeight: 600,
      padding: "11px 12px",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? "var(--vk-surface-alt)" : "var(--vk-surface)",
      borderBottom: "1px solid #F0F2F7"
    }
  }, columns.map(c => {
    const v = r[c.key];
    const missing = v === null || v === undefined || v === "";
    return /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        height: "var(--vk-row-height)",
        padding: "13px 12px",
        fontSize: 14,
        textAlign: c.numeric ? "right" : "left",
        fontVariantNumeric: c.numeric ? "tabular-nums" : "normal",
        fontWeight: c.emphasis ? 600 : 400,
        color: missing ? "var(--vk-text-subtle)" : c.emphasis ? "var(--vk-info)" : "var(--vk-text)"
      }
    }, missing ? "No disponible" : v);
  }))))), footnote ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px",
      borderTop: "1px solid var(--vk-surface-subtle)",
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--vk-text-muted)"
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
function Metric({
  label,
  value,
  delta,
  deltaTone = "neutral",
  note,
  progress,
  tone = "surface",
  style
}) {
  const dark = tone === "brand";
  const deltaColor = deltaTone === "up" ? "var(--vk-success)" : deltaTone === "down" ? "var(--vk-danger)" : dark ? "var(--vk-yellow)" : "var(--vk-text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? "var(--vk-brand-deep)" : "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      padding: "18px 20px",
      boxShadow: dark ? "none" : "var(--vk-elev-1)",
      fontFamily: "var(--vk-font-ui)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: dark ? "var(--vk-on-brand-muted)" : "var(--vk-text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: "var(--vk-metric-size)",
      lineHeight: "var(--vk-metric-line)",
      letterSpacing: "var(--vk-metric-track)",
      marginTop: 6,
      fontVariantNumeric: "tabular-nums",
      color: dark ? "var(--vk-on-brand)" : "var(--vk-text)"
    }
  }, value), delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: deltaColor,
      marginTop: 8
    }
  }, delta) : null, note && !delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: dark ? "var(--vk-on-brand-muted)" : "var(--vk-text-subtle)",
      marginTop: 8
    }
  }, note) : null, typeof progress === "number" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      flex: progress,
      background: "var(--vk-accent)",
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      flex: 100 - progress,
      background: "var(--vk-disabled-bg)",
      borderRadius: 3
    }
  })) : null);
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  success: {
    bg: "var(--vk-success-bg)",
    bar: "var(--vk-success)",
    title: "var(--vk-success-fg)",
    body: "#3A6656"
  },
  warning: {
    bg: "var(--vk-warning-bg)",
    bar: "var(--vk-warning)",
    title: "var(--vk-warning-fg)",
    body: "#6B5714"
  },
  danger: {
    bg: "var(--vk-danger-bg)",
    bar: "var(--vk-danger)",
    title: "var(--vk-danger-fg)",
    body: "#7C3230"
  },
  brand: {
    bg: "var(--vk-brand-deep)",
    bar: null,
    title: "#FFFFFF",
    body: "var(--vk-on-brand-muted)"
  }
};
function Alert({
  title,
  description,
  tone = "success",
  actionLabel,
  onAction,
  style
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--vk-space-3)",
      alignItems: tone === "brand" ? "center" : "stretch",
      background: t.bg,
      borderRadius: "var(--vk-radius-md)",
      padding: "13px 16px",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, t.bar ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      borderRadius: 2,
      background: t.bar,
      flexShrink: 0
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: t.title
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: t.body,
      marginTop: 2
    }
  }, description) : null), actionLabel ? /*#__PURE__*/React.createElement("span", {
    onClick: onAction,
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: tone === "brand" ? "#FFB98C" : t.title,
      cursor: "pointer",
      alignSelf: "center",
      whiteSpace: "nowrap"
    }
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Chip.jsx
try { (() => {
function Chip({
  children,
  variant = "outline",
  selected = false,
  onClick,
  style
}) {
  const look = variant === "dashed" ? {
    background: "var(--vk-surface)",
    border: "1px dashed var(--vk-border-dashed)",
    color: "#7A879C"
  } : variant === "fill" ? {
    background: "var(--vk-canvas)",
    border: "1px solid transparent",
    color: "var(--vk-text-strong-2)"
  } : {
    background: "var(--vk-surface)",
    border: "1px solid var(--vk-border)",
    color: selected ? "var(--vk-text-strong-2)" : "var(--vk-text-muted)"
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--vk-space-2)",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 13.5,
      fontWeight: selected ? 600 : 400,
      padding: "6px 14px",
      borderRadius: "var(--vk-radius-pill)",
      cursor: onClick ? "pointer" : "default",
      whiteSpace: "nowrap",
      ...look,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--vk-border-dashed)",
      borderRadius: "var(--vk-radius-lg)",
      padding: "26px 20px",
      textAlign: "center",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 15.5,
      marginBottom: 6
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--vk-text-muted)",
      lineHeight: 1.55,
      marginBottom: 14
    }
  }, description) : null, actionLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onAction
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ErrorState.jsx
try { (() => {
function ErrorState({
  title,
  description,
  primaryLabel = "Reintentar",
  secondaryLabel,
  onPrimary,
  onSecondary,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--vk-danger-border)",
      background: "var(--vk-danger-bg)",
      borderRadius: "var(--vk-radius-lg)",
      padding: 20,
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 15.5,
      color: "var(--vk-danger-fg)",
      marginBottom: 6
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "#7C3230",
      lineHeight: 1.55,
      marginBottom: 14
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPrimary,
    style: {
      height: 34,
      padding: "0 16px",
      border: "none",
      borderRadius: "var(--vk-radius-md)",
      background: "var(--vk-danger)",
      color: "#FFFFFF",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 13.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, primaryLabel), secondaryLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSecondary,
    style: {
      height: 34,
      padding: "0 16px",
      borderRadius: "var(--vk-radius-md)",
      background: "var(--vk-surface)",
      border: "1px solid #F0C9C8",
      color: "var(--vk-danger-fg)",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 13.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, secondaryLabel) : null));
}
Object.assign(__ds_scope, { ErrorState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ErrorState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  title,
  description,
  children,
  width = 520,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      background: "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      boxShadow: "var(--vk-elev-3)",
      overflow: "hidden",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      borderBottom: "1px solid var(--vk-surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 19
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--vk-text-muted)",
      marginTop: 3
    }
  }, description) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px",
      background: "var(--vk-surface-alt)",
      borderTop: "1px solid var(--vk-surface-subtle)",
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    }
  }, cancelLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: onCancel,
    style: {
      height: 38
    }
  }, cancelLabel) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onConfirm,
    style: {
      height: 38
    }
  }, confirmLabel)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  shape = "text",
  width = "100%",
  height,
  radius,
  style
}) {
  const h = height || (shape === "text" ? 14 : shape === "control" ? 36 : 80);
  const r = radius || (shape === "text" ? 4 : "var(--vk-radius-md)");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: h,
      borderRadius: r,
      background: "var(--vk-surface-subtle)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
const TONES = {
  success: {
    fg: "var(--vk-success-fg)",
    bg: "var(--vk-success-bg)"
  },
  warning: {
    fg: "var(--vk-warning-fg)",
    bg: "var(--vk-warning-bg)"
  },
  danger: {
    fg: "var(--vk-danger-fg)",
    bg: "var(--vk-danger-bg)"
  },
  risk: {
    fg: "var(--vk-risk-fg)",
    bg: "var(--vk-risk-bg)"
  },
  info: {
    fg: "var(--vk-info-fg)",
    bg: "var(--vk-info-bg)"
  },
  pattern: {
    fg: "var(--vk-pattern-fg)",
    bg: "var(--vk-pattern-bg)"
  }
};
function StatusBadge({
  children,
  tone = "info",
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: t.fg,
      background: t.bg,
      padding: "4px 10px",
      borderRadius: "var(--vk-radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--vk-font-ui)",
      fontSize: 13.5,
      color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 4,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--vk-accent)" : "transparent",
      border: checked ? "1.5px solid var(--vk-accent)" : "1.5px solid var(--vk-border-dashed)",
      transition: "background var(--vk-motion-fast) var(--vk-ease)"
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  value,
  placeholder = "",
  state = "default",
  hint,
  error,
  trailing = null,
  onChange,
  style
}) {
  const focused = state === "focus";
  const isError = state === "error";
  const disabled = state === "disabled";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: "var(--vk-space-1)",
      color: "var(--vk-text)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: "flex",
      alignItems: "center",
      gap: "var(--vk-space-2)",
      padding: "0 var(--vk-space-3)",
      borderRadius: "var(--vk-radius-md)",
      background: disabled ? "var(--vk-canvas)" : "var(--vk-surface)",
      border: isError ? "1.5px solid var(--vk-danger)" : focused ? "1.5px solid var(--vk-accent)" : disabled ? "1px solid var(--vk-border)" : "1px solid var(--vk-border-strong)",
      boxShadow: focused ? "var(--vk-focus-ring)" : "none",
      transition: "border-color var(--vk-motion-fast) var(--vk-ease), box-shadow var(--vk-motion-fast) var(--vk-ease)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    readOnly: !onChange,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 14,
      color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)"
    }
  }), trailing), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--vk-danger)",
      marginTop: 5
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--vk-text-subtle)",
      marginTop: 5
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function SearchBar({
  placeholder = "Buscar",
  value,
  onChange,
  onSearch,
  onFilters,
  filtersLabel = "Filtros",
  searchLabel = "BUSCAR",
  elevated = true,
  compact = false,
  style
}) {
  const h = compact ? 30 : 34;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--vk-space-3)",
      background: "var(--vk-surface)",
      borderRadius: compact ? 10 : "var(--vk-radius-lg)",
      border: elevated ? "none" : "1px solid var(--vk-border)",
      boxShadow: elevated ? "var(--vk-elev-1)" : "none",
      padding: compact ? "8px 8px 8px 14px" : "8px 8px 8px 16px",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    readOnly: !onChange,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--vk-font-ui)",
      fontSize: compact ? 13.5 : 14.5,
      color: "var(--vk-text)"
    }
  }), onFilters !== null ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onFilters,
    style: {
      height: h,
      padding: compact ? "0 12px" : "0 14px",
      border: "none",
      borderRadius: compact ? 7 : "var(--vk-radius-md)",
      background: "var(--vk-fill-subtle)",
      color: "var(--vk-text-strong-2)",
      fontFamily: "var(--vk-font-ui)",
      fontSize: compact ? 12.5 : 13.5,
      fontWeight: 600,
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, filtersLabel) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSearch,
    style: {
      height: h,
      padding: compact ? "0 16px" : "0 20px",
      border: "none",
      borderRadius: compact ? 7 : "var(--vk-radius-md)",
      background: "var(--vk-accent)",
      color: "#FFFFFF",
      fontFamily: "var(--vk-font-ui)",
      fontSize: compact ? 12.5 : 13.5,
      fontWeight: 700,
      letterSpacing: "0.04em",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, searchLabel));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  options = [],
  state = "default",
  onChange,
  style
}) {
  const disabled = state === "disabled";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: "var(--vk-space-1)",
      color: "var(--vk-text)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--vk-space-3)",
      borderRadius: "var(--vk-radius-md)",
      background: disabled ? "var(--vk-canvas)" : "var(--vk-surface)",
      border: state === "focus" ? "1.5px solid var(--vk-accent)" : "1px solid var(--vk-border-strong)",
      boxShadow: state === "focus" ? "var(--vk-focus-ring)" : "none"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      appearance: "none",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 14,
      color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--vk-text-subtle)",
      fontSize: 12
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--vk-font-ui)",
      fontSize: 13.5,
      color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 19,
      borderRadius: "var(--vk-radius-pill)",
      padding: 2,
      boxSizing: "border-box",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      background: disabled ? "var(--vk-disabled-bg)" : checked ? "var(--vk-accent)" : "var(--vk-border-dashed)",
      transition: "background var(--vk-motion-base) var(--vk-ease)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: "var(--vk-radius-pill)",
      background: "#FFFFFF"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Feather Icons (feathericons.com) es el set de iconografia del sistema.
// Renderiza el placeholder <i data-feather> y deja que feather.replace()
// inserte el SVG real; si feather aun no cargo, se reintenta al montar.
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const paint = () => {
      if (!window.feather || !node.isConnected) return false;
      node.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-feather", name);
      node.appendChild(el);
      window.feather.replace({
        width: size,
        height: size,
        "stroke-width": strokeWidth
      });
      return true;
    };
    if (paint()) return;
    const t = setInterval(() => {
      if (paint()) clearInterval(t);
    }, 120);
    return () => clearInterval(t);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/intelligence/AskDataPanel.jsx
try { (() => {
function AskDataPanel({
  label = "Preguntale a tus datos",
  placeholder = "¿Donde abrir la proxima tienda?",
  suggestions = [],
  value,
  onChange,
  onSubmit,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--vk-border)",
      borderRadius: "var(--vk-radius-lg)",
      padding: "14px 16px",
      background: "var(--vk-surface-alt)",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--vk-text-subtle)",
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onKeyDown: onSubmit ? e => {
      if (e.key === "Enter") onSubmit(e.currentTarget.value);
    } : undefined,
    readOnly: !onChange,
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 40,
      padding: "0 12px",
      background: "var(--vk-surface)",
      border: "1px solid var(--vk-border-strong)",
      borderRadius: "var(--vk-radius-md)",
      outline: "none",
      fontFamily: "var(--vk-font-ui)",
      fontSize: 14,
      color: "var(--vk-text)"
    }
  }), suggestions.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 10,
      flexWrap: "wrap"
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    onClick: onSubmit ? () => onSubmit(s) : undefined,
    style: {
      fontSize: 12.5,
      background: "var(--vk-surface)",
      border: "1px solid var(--vk-border)",
      padding: "5px 11px",
      borderRadius: "var(--vk-radius-pill)",
      color: "var(--vk-text-strong-2)",
      cursor: onSubmit ? "pointer" : "default"
    }
  }, s))) : null);
}
Object.assign(__ds_scope, { AskDataPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/intelligence/AskDataPanel.jsx", error: String((e && e.message) || e) }); }

// components/intelligence/InsightCard.jsx
try { (() => {
function InsightCard({
  kind = "Riesgo",
  tone = "risk",
  title,
  description,
  source,
  actionLabel = "Ver en el mapa",
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      border: "1px solid var(--vk-border)",
      borderRadius: "var(--vk-radius-lg)",
      padding: "14px 16px",
      background: "var(--vk-surface)",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    tone: tone
  }, kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: "var(--vk-text-muted)"
    }
  }, description), source || actionLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 12,
      paddingTop: 10,
      borderTop: "1px solid #F0F2F7"
    }
  }, source ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--vk-text-subtle)"
    }
  }, source) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), actionLabel ? /*#__PURE__*/React.createElement("span", {
    onClick: onAction,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--vk-info)",
      cursor: "pointer"
    }
  }, actionLabel) : null) : null);
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/intelligence/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/intelligence/MapPanel.jsx
try { (() => {
function MapPanel({
  title,
  subtitle,
  rows = [],
  width = 290,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width,
      boxSizing: "border-box",
      background: "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      boxShadow: "var(--vk-elev-2)",
      padding: "16px 18px",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--vk-text-subtle)"
    }
  }, subtitle || "Hexagono seleccionado"), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "24px",
      marginTop: 6
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--vk-text-muted)"
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums",
      color: r.value === null || r.value === undefined || r.value === "" ? "var(--vk-text-subtle)" : "var(--vk-text)"
    }
  }, r.value === null || r.value === undefined || r.value === "" ? "No disponible" : r.value)))));
}
Object.assign(__ds_scope, { MapPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/intelligence/MapPanel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
function AppHeader({
  title,
  actions = ["help-circle", "bell"],
  initials = "JP",
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--vk-font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: "32px",
      letterSpacing: "-0.02em",
      color: "var(--vk-text)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--vk-space-2)"
    }
  }, actions.map(a => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: a,
    label: a,
    shape: "circle",
    size: "sm",
    onClick: onAction ? () => onAction(a) : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a,
    size: 17
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--vk-radius-pill)",
      background: "var(--vk-brand-deep)",
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 600,
      flexShrink: 0
    }
  }, initials)));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  product = "Vikua Platform",
  logoSrc,
  items = [],
  activeId,
  onSelect,
  width = 236,
  floating = false,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      flexShrink: 0,
      boxSizing: "border-box",
      background: "var(--vk-brand-deep)",
      color: "var(--vk-on-brand)",
      padding: "14px 12px",
      fontFamily: "var(--vk-font-ui)",
      borderRadius: floating ? "var(--vk-radius-lg)" : "0 14px 14px 0",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 6px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "var(--vk-radius-pill)",
      background: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      overflow: "hidden"
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      width: 18,
      height: 18,
      objectFit: "contain"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 14.5
    }
  }, product)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(it => {
    const active = (it.id || it.label) === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id || it.label,
      type: "button",
      onClick: onSelect ? () => onSelect(it.id || it.label) : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textAlign: "left",
        padding: "9px 12px",
        border: "none",
        borderRadius: "var(--vk-radius-md)",
        background: active ? "var(--vk-accent)" : "transparent",
        color: active ? "#FFFFFF" : "#E4ECF7",
        fontFamily: "var(--vk-font-ui)",
        fontSize: 13.5,
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
        transition: "background var(--vk-motion-fast) var(--vk-ease)"
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }) : null, it.label);
  })));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vikua_platform/BoardsScreen.jsx
try { (() => {
const {
  SearchBar,
  Chip,
  Icon,
  IconButton,
  EmptyState
} = window.VikuaDesignSystem_da98a9;
const BOARDS = [{
  id: "b1",
  name: "Panel de ventas Q3",
  owner: "Vikua",
  ago: "hace 1 h",
  likes: 124
}, {
  id: "b2",
  name: "Marketing Q3",
  owner: "Vikua",
  ago: "hace 2 h",
  likes: 87
}, {
  id: "b3",
  name: "Finanzas 2025",
  owner: "Vikua",
  ago: "hace 3 h",
  likes: 23
}, {
  id: "b4",
  name: "Operaciones",
  owner: "Vikua",
  ago: "ayer",
  likes: 45
}, {
  id: "b5",
  name: "Satisfaccion del cliente",
  owner: "Vikua",
  ago: "ayer",
  likes: 62
}, {
  id: "b6",
  name: "Supply Chain",
  owner: "Vikua",
  ago: "hace 2 d",
  likes: 31
}];
function BoardCard({
  board
}) {
  const [liked, setLiked] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      padding: 16,
      boxShadow: "var(--vk-elev-1)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--vk-font-brand)",
      fontWeight: 600,
      fontSize: 15.5,
      letterSpacing: "-0.01em"
    }
  }, board.name), /*#__PURE__*/React.createElement(IconButton, {
    label: "Mas opciones",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 132,
      borderRadius: "var(--vk-radius-md)",
      background: "var(--vk-surface-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bar-chart-2",
    size: 30,
    color: "var(--vk-text-subtle)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--vk-text-subtle)"
    }
  }, board.owner, " \xB7 ", board.ago), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLiked(!liked),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: liked ? "var(--vk-accent)" : "var(--vk-text-subtle)",
      fontSize: 12.5,
      fontFamily: "var(--vk-font-ui)",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 15
  }), board.likes + (liked ? 1 : 0))));
}
function BoardsScreen({
  boards = BOARDS,
  vikua = false,
  onCreate
}) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("Todos");
  const list = boards.filter(b => b.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchBar, {
    value: q,
    onChange: setQ,
    placeholder: "Buscar tablero por nombre o descripcion",
    onSearch: () => {},
    onFilters: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 16,
      flexWrap: "wrap"
    }
  }, ["Todos", "Favoritos", "Compartidos conmigo", "Actualizados esta semana"].map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--vk-text-subtle)",
      alignSelf: "center"
    }
  }, list.length, " de ", boards.length, " tableros")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--vk-text-subtle)",
      margin: "24px 0 12px"
    }
  }, vikua ? "Tableros creados por Vikua" : "Mis tableros"), list.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, list.map(b => /*#__PURE__*/React.createElement(BoardCard, {
    key: b.id,
    board: b
  }))) : /*#__PURE__*/React.createElement(EmptyState, {
    title: "Aun no hay tableros",
    description: "Conecta una fuente de datos para generar tu primer analisis.",
    actionLabel: "Conectar fuente",
    onAction: onCreate,
    style: {
      background: "var(--vk-surface)"
    }
  }));
}
Object.assign(window, {
  BoardsScreen,
  BoardCard,
  BOARDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vikua_platform/BoardsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vikua_platform/InsightsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Metric,
  Card,
  InsightCard,
  AskDataPanel,
  Alert,
  Chip,
  DataLegend,
  BarChart
} = window.VikuaDesignSystem_da98a9;
const INSIGHTS = [{
  kind: "Riesgo",
  tone: "risk",
  title: "Saturacion en el eje Chacao–Altamira",
  description: "14 competidores en 1,2 km². La demanda por punto cae 18% frente al promedio metropolitano.",
  source: "Fuente: Google Places · Kontur"
}, {
  kind: "Oportunidad",
  tone: "info",
  title: "Demanda sin cubrir en El Paraiso",
  description: "12 hexagonos con poblacion alta y ningun punto de venta en un radio de 1,5 km.",
  source: "Fuente: Kontur Population · ventas propias"
}, {
  kind: "Patron",
  tone: "pattern",
  title: "El ticket sube los jueves en zonas de oficina",
  description: "+9,4% de ticket promedio entre las 12:00 y 15:00 en hexagonos con densidad de empleo alta.",
  source: "Fuente: transacciones 2025 · Vikua Platform"
}];
function InsightsScreen() {
  const [pregunta, setPregunta] = React.useState("");
  const [ultima, setUltima] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Poblacion alcanzada",
    value: "184.320",
    delta: "\u2191 3,10% vs. 2023",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Precio m\xB2 venta",
    value: "$1.240",
    delta: "\u2193 1,80% trimestre",
    deltaTone: "down"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Cobertura de datos",
    value: "92%",
    progress: 92
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Indice de oportunidad",
    value: "86",
    note: "Top 10% del area",
    tone: "brand"
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Cobertura parcial",
    description: "4 de 52 hexagonos sin datos de competencia."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    label: "Hallazgos generados por IA",
    footnote: "Todo hallazgo lleva tipo, cifra, fuente y una accion que lo devuelve al dato."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, INSIGHTS.map(i => /*#__PURE__*/React.createElement(InsightCard, _extends({
    key: i.title
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AskDataPanel, {
    value: pregunta,
    onChange: setPregunta,
    onSubmit: v => {
      setUltima(v);
      setPregunta("");
    },
    suggestions: ["Zonas sin cobertura", "Comparar parroquias", "Donde abrir la proxima tienda"]
  }), ultima ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Consulta enviada al modelo",
    description: '"' + ultima + '" · resultado en unos segundos.'
  }) : null, /*#__PURE__*/React.createElement(Card, {
    title: "Demanda por parroquia",
    subtitle: "Indice de oportunidad, 2025"
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: [{
      label: "Chacao",
      value: 86
    }, {
      label: "Recreo",
      value: 79
    }, {
      label: "L. Martinez",
      value: 74
    }, {
      label: "S. Bernardino",
      value: 61
    }, {
      label: "El Paraiso",
      value: 52
    }],
    highlight: 0,
    height: 130
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(DataLegend, {
    scale: "categorical",
    series: ["Indice", "Destacado"]
  })), /*#__PURE__*/React.createElement(Card, {
    label: "Capas activas"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    selected: true
  }, "Kontur Population"), /*#__PURE__*/React.createElement(Chip, null, "Google Places"), /*#__PURE__*/React.createElement(Chip, null, "Ventas propias"), /*#__PURE__*/React.createElement(Chip, {
    variant: "dashed"
  }, "+ Nueva capa"))))));
}
Object.assign(window, {
  InsightsScreen,
  INSIGHTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vikua_platform/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vikua_platform/MapScreen.jsx
try { (() => {
const {
  Card,
  MapPanel,
  DataLegend,
  Switch,
  Select,
  Chip,
  Button,
  Icon,
  Skeleton
} = window.VikuaDesignSystem_da98a9;
const HEX = [{
  id: "h1",
  name: "Chacao · r8",
  pob: "42.180",
  precio: "$1.240",
  comp: 14,
  idx: 86,
  step: 5
}, {
  id: "h2",
  name: "El Recreo · r8",
  pob: "38.940",
  precio: "$1.080",
  comp: 11,
  idx: 79,
  step: 4
}, {
  id: "h3",
  name: "Leoncio Martinez · r8",
  pob: "31.205",
  precio: "$960",
  comp: 9,
  idx: 74,
  step: 3
}, {
  id: "h4",
  name: "San Bernardino · r8",
  pob: "27.860",
  precio: "$720",
  comp: null,
  idx: 61,
  step: 2
}, {
  id: "h5",
  name: "El Paraiso · r8",
  pob: "24.110",
  precio: "$610",
  comp: 4,
  idx: 52,
  step: 1
}];
const STEP_COLOR = {
  1: "var(--vk-data-seq-1)",
  2: "var(--vk-data-seq-2)",
  3: "var(--vk-data-seq-3)",
  4: "var(--vk-data-seq-4)",
  5: "var(--vk-data-seq-5)"
};
function MapScreen() {
  const [sel, setSel] = React.useState(HEX[0]);
  const [layer, setLayer] = React.useState("Poblacion");
  const [loading, setLoading] = React.useState(false);
  const cambiar = v => {
    setLayer(v);
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    label: "Control de capas"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Variable coloreada",
    value: layer,
    options: ["Poblacion", "Precio m²", "Competidores", "Indice de oportunidad"],
    onChange: cambiar
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Puntos de venta",
    checked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Competencia",
    checked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Vias principales"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Limites de parroquia",
    checked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: "1px solid var(--vk-surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement(DataLegend, {
    scale: "sequential",
    title: layer,
    labels: ["bajo", "alto"],
    includeNull: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "Exportar capa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 620,
      borderRadius: "var(--vk-radius-lg)",
      background: "var(--vk-surface-subtle)",
      overflow: "hidden",
      boxShadow: "var(--vk-elev-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 2,
      padding: 60,
      boxSizing: "border-box"
    }
  }, HEX.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    type: "button",
    onClick: () => setSel(h),
    title: h.name,
    style: {
      border: sel.id === h.id ? "2px solid #FFFFFF" : "2px solid transparent",
      borderRadius: "var(--vk-radius-sm)",
      cursor: "pointer",
      background: h.comp === null ? "var(--vk-data-null)" : STEP_COLOR[h.step],
      transition: "border-color var(--vk-motion-fast) var(--vk-ease)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 20,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "fill"
  }, "Caracas, Venezuela"), /*#__PURE__*/React.createElement(Chip, {
    variant: "fill"
  }, "Radio 2,0 km"), /*#__PURE__*/React.createElement(Chip, {
    variant: "fill"
  }, "Hexagonos H3 \xB7 r8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 20,
      top: 20
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 290,
      background: "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      boxShadow: "var(--vk-elev-2)",
      padding: 18,
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    shape: "text",
    width: "60%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    shape: "text",
    width: "85%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    shape: "text",
    width: "70%"
  })) : /*#__PURE__*/React.createElement(MapPanel, {
    title: sel.name,
    subtitle: "Hexagono seleccionado",
    rows: [{
      label: "Poblacion",
      value: sel.pob
    }, {
      label: "Precio m² venta",
      value: sel.precio
    }, {
      label: "Competidores",
      value: sel.comp
    }, {
      label: "Indice de oportunidad",
      value: sel.idx
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      bottom: 20,
      background: "var(--vk-surface)",
      borderRadius: "var(--vk-radius-lg)",
      boxShadow: "var(--vk-elev-2)",
      padding: "14px 16px",
      width: 260
    }
  }, /*#__PURE__*/React.createElement(DataLegend, {
    scale: "sequential",
    title: layer,
    labels: ["bajo", "alto"],
    unit: layer === "Poblacion" ? "habitantes por hexagono" : null,
    includeNull: true
  }))));
}
Object.assign(window, {
  MapScreen,
  HEX
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vikua_platform/MapScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vikua_platform/Shell.jsx
try { (() => {
const {
  Sidebar,
  AppHeader,
  Fab,
  Modal,
  Field,
  Select
} = window.VikuaDesignSystem_da98a9;
const NAV = [{
  id: "tableros",
  label: "Mis tableros",
  icon: "grid"
}, {
  id: "vikua",
  label: "Tableros Vikua",
  icon: "layout"
}, {
  id: "insights",
  label: "Insights",
  icon: "zap"
}, {
  id: "player",
  label: "Data Player",
  icon: "bar-chart-2"
}, {
  id: "midata",
  label: "Mi data",
  icon: "database"
}, {
  id: "datavikua",
  label: "Data vikua",
  icon: "layers"
}, {
  id: "usuarios",
  label: "Usuarios",
  icon: "users"
}, {
  id: "empresas",
  label: "Empresas",
  icon: "briefcase"
}, {
  id: "reportes",
  label: "Reportes",
  icon: "trending-up"
}, {
  id: "salir",
  label: "Salir",
  icon: "log-out"
}];
const TITLES = {
  tableros: "Mis tableros",
  vikua: "Tableros Vikua",
  insights: "Insights",
  player: "Data Player",
  midata: "Mi data",
  datavikua: "Data vikua",
  usuarios: "Usuarios",
  empresas: "Empresas",
  reportes: "Reportes",
  salir: "Salir"
};
function PlatformApp() {
  const [nav, setNav] = React.useState("tableros");
  const [modal, setModal] = React.useState(false);
  const [boards, setBoards] = React.useState(BOARDS);
  const create = name => {
    setBoards([{
      id: "n" + Date.now(),
      name: name || "Nuevo tablero",
      owner: "Tu",
      ago: "ahora",
      likes: 0,
      fresh: true
    }, ...boards]);
    setModal(false);
    setNav("tableros");
  };
  let screen = null;
  if (nav === "tableros" || nav === "vikua") screen = /*#__PURE__*/React.createElement(BoardsScreen, {
    boards: boards,
    vikua: nav === "vikua",
    onCreate: () => setModal(true)
  });else if (nav === "insights") screen = /*#__PURE__*/React.createElement(InsightsScreen, null);else if (nav === "player") screen = /*#__PURE__*/React.createElement(MapScreen, null);else if (nav === "usuarios") screen = /*#__PURE__*/React.createElement(UsersScreen, null);else screen = /*#__PURE__*/React.createElement(Placeholder, {
    title: TITLES[nav]
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      padding: 20,
      minHeight: "100vh",
      boxSizing: "border-box",
      background: "var(--vk-canvas)",
      fontFamily: "var(--vk-font-ui)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    floating: true,
    product: "Vikua Platform",
    logoSrc: "../../assets/isotipo-vikua.png",
    items: NAV,
    activeId: nav,
    onSelect: setNav,
    style: {
      position: "sticky",
      top: 20,
      alignSelf: "flex-start",
      minHeight: 760
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      position: "relative",
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    title: TITLES[nav],
    initials: "JP"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, screen), /*#__PURE__*/React.createElement(Fab, {
    label: "Crear tablero",
    onClick: () => setModal(true),
    style: {
      position: "fixed",
      right: 40,
      bottom: 40
    }
  })), modal ? /*#__PURE__*/React.createElement(CreateBoardModal, {
    onCancel: () => setModal(false),
    onConfirm: create
  }) : null);
}
function CreateBoardModal({
  onCancel,
  onConfirm
}) {
  const [name, setName] = React.useState("Cobertura Caracas");
  const [radio, setRadio] = React.useState("2,0 km");
  return /*#__PURE__*/React.createElement("div", {
    onClick: onCancel,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,19,50,0.42)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(Modal, {
    title: "Nuevo analisis",
    description: "Define el area y las variables que quieres cruzar.",
    confirmLabel: "Crear analisis",
    cancelLabel: "Cancelar",
    onCancel: onCancel,
    onConfirm: () => onConfirm(name)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre del tablero",
    value: name,
    onChange: setName
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Ubicacion",
    value: "Caracas, Venezuela"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Radio",
    value: radio,
    onChange: setRadio,
    hint: "Entre 0,5 y 20 km."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Agregacion",
    value: "Hexagonos H3 \xB7 r8",
    options: ["Hexagonos H3 · r8", "Parroquias", "Municipios"]
  })))));
}
function Placeholder({
  title
}) {
  const {
    EmptyState
  } = window.VikuaDesignSystem_da98a9;
  return /*#__PURE__*/React.createElement(EmptyState, {
    title: title + ": sin diseno de referencia",
    description: "Esta seccion existe en el producto pero no hay pantalla en las fuentes entregadas. Se deja vacia a proposito.",
    style: {
      background: "var(--vk-surface)"
    }
  });
}
Object.assign(window, {
  PlatformApp,
  CreateBoardModal,
  Placeholder,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vikua_platform/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vikua_platform/UsersScreen.jsx
try { (() => {
const {
  DataTable,
  SearchBar,
  Chip,
  StatusBadge,
  Button,
  Icon,
  Card,
  Metric
} = window.VikuaDesignSystem_da98a9;
const USERS = [{
  n: "Maria Fernanda Rivas",
  e: "mf.rivas@wawa.com",
  emp: "Wawa",
  rol: "Administrador",
  est: "success",
  estl: "Activo",
  ult: "hace 12 min"
}, {
  n: "Jose Parra",
  e: "jparra@bancoplaza.com",
  emp: "Banco Plaza",
  rol: "Analista",
  est: "success",
  estl: "Activo",
  ult: "hace 3 h"
}, {
  n: "Luis Bermudez",
  e: "lbermudez@banplus.com",
  emp: "Banplus",
  rol: "Analista",
  est: "warning",
  estl: "En revision",
  ult: "hace 2 d"
}, {
  n: "Andrea Silva",
  e: "asilva@vikua.com",
  emp: "Vikua",
  rol: "Super admin",
  est: "success",
  estl: "Activo",
  ult: "hace 1 h"
}, {
  n: "Carlos Mendoza",
  e: "cmendoza@wawa.com",
  emp: "Wawa",
  rol: "Lector",
  est: "danger",
  estl: "Bloqueado",
  ult: "hace 41 d"
}];
function UsersScreen() {
  const [q, setQ] = React.useState("");
  const [emp, setEmp] = React.useState("Todas");
  const rows = USERS.filter(u => emp === "Todas" || u.emp === emp).filter(u => (u.n + u.e).toLowerCase().includes(q.toLowerCase())).map(u => ({
    usuario: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, u.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--vk-text-subtle)"
      }
    }, u.e)),
    empresa: u.emp,
    rol: u.rol,
    estado: /*#__PURE__*/React.createElement(StatusBadge, {
      tone: u.est
    }, u.estl),
    ultimo: u.ult
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Usuarios activos",
    value: "248",
    delta: "\u2191 12 este mes",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Empresas conectadas",
    value: "17"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Sesiones ultimos 7 d",
    value: "1.906",
    delta: "\u2193 4,20% semana",
    deltaTone: "down"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Bloqueados",
    value: "3",
    note: "Revisar accesos"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    value: q,
    onChange: setQ,
    placeholder: "Buscar usuario por nombre o correo",
    onSearch: () => {},
    onFilters: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, ["Todas", "Vikua", "Wawa", "Banco Plaza", "Banplus"].map(e => /*#__PURE__*/React.createElement(Chip, {
    key: e,
    selected: emp === e,
    onClick: () => setEmp(e)
  }, e)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })
  }, "Invitar usuario"))), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "usuario",
      label: "Usuario"
    }, {
      key: "empresa",
      label: "Empresa"
    }, {
      key: "rol",
      label: "Rol"
    }, {
      key: "estado",
      label: "Estado"
    }, {
      key: "ultimo",
      label: "Ultimo ingreso"
    }],
    rows: rows,
    footnote: "Cabecera gris #9199A6, filas alternas #FAFBFD, altura de fila 46 px. Las celdas vacias se rotulan No disponible.",
    style: {
      boxShadow: "none",
      borderRadius: 0
    }
  })));
}
Object.assign(window, {
  UsersScreen,
  USERS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vikua_platform/UsersScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataLegend = __ds_scope.DataLegend;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ErrorState = __ds_scope.ErrorState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.AskDataPanel = __ds_scope.AskDataPanel;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.MapPanel = __ds_scope.MapPanel;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.Sidebar = __ds_scope.Sidebar;

})();
