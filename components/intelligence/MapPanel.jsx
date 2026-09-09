import React from "react";

export function MapPanel({ title, subtitle, rows = [], width = 290, style }) {
  return (
    <aside
      style={{
        width, boxSizing: "border-box", background: "var(--vk-surface)",
        borderRadius: "var(--vk-radius-lg)", boxShadow: "var(--vk-elev-2)",
        padding: "16px 18px", fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: "var(--vk-text-subtle)" }}>
        {subtitle || "Hexagono seleccionado"}
      </div>
      {title ? (
        <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 17, lineHeight: "24px", marginTop: 6 }}>{title}</div>
      ) : null}
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map((r) => (
          <div key={r.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <span style={{ fontSize: 13, color: "var(--vk-text-muted)" }}>{r.label}</span>
            <span
              style={{
                fontSize: 14, fontWeight: 600, fontVariantNumeric: "tabular-nums",
                color: r.value === null || r.value === undefined || r.value === "" ? "var(--vk-text-subtle)" : "var(--vk-text)",
              }}
            >{r.value === null || r.value === undefined || r.value === "" ? "No disponible" : r.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
