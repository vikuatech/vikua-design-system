import React from "react";

export function DataTable({ columns = [], rows = [], title, caption, footnote, style }) {
  return (
    <div
      style={{
        background: "var(--vk-surface)", borderRadius: "var(--vk-radius-lg)",
        boxShadow: "var(--vk-elev-1)", overflow: "hidden", fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      {title || caption ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px" }}>
          <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 17 }}>{title}</div>
          {caption ? <span style={{ fontSize: 13, color: "var(--vk-text-subtle)" }}>{caption}</span> : null}
        </div>
      ) : null}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "var(--vk-table-header)", color: "#FFFFFF" }}>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{
                  textAlign: c.numeric ? "right" : "left", fontSize: 13, fontWeight: 600,
                  padding: "11px 12px", whiteSpace: "nowrap",
                }}
              >{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ background: i % 2 ? "var(--vk-surface-alt)" : "var(--vk-surface)", borderBottom: "1px solid #F0F2F7" }}>
              {columns.map((c) => {
                const v = r[c.key];
                const missing = v === null || v === undefined || v === "";
                return (
                  <td
                    key={c.key}
                    style={{
                      height: "var(--vk-row-height)", padding: "13px 12px", fontSize: 14,
                      textAlign: c.numeric ? "right" : "left",
                      fontVariantNumeric: c.numeric ? "tabular-nums" : "normal",
                      fontWeight: c.emphasis ? 600 : 400,
                      color: missing ? "var(--vk-text-subtle)" : c.emphasis ? "var(--vk-info)" : "var(--vk-text)",
                    }}
                  >{missing ? "No disponible" : v}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote ? (
        <div style={{ padding: "14px 20px", borderTop: "1px solid var(--vk-surface-subtle)", fontSize: 13, lineHeight: 1.6, color: "var(--vk-text-muted)" }}>{footnote}</div>
      ) : null}
    </div>
  );
}
