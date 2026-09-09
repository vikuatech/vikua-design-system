import React from "react";

export function BarChart({ data = [], highlight = -1, height = 120, note, style }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div style={{ fontFamily: "var(--vk-font-ui)", ...style }}>
      <div
        style={{
          display: "flex", alignItems: "flex-end", gap: 10, height,
          paddingBottom: 6, borderBottom: "1px solid var(--vk-border)",
        }}
      >
        {data.map((d, i) => (
          <div
            key={d.label}
            title={d.label + ": " + d.value}
            style={{
              flex: 1, height: Math.round((d.value / max) * 100) + "%",
              background: i === highlight ? "var(--vk-accent)" : "var(--vk-data-cat-1)",
              borderRadius: "4px 4px 0 0",
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: "var(--vk-text-subtle)", marginTop: 6 }}>
        {data.map((d) => (<span key={d.label}>{d.label}</span>))}
      </div>
      {note ? <div style={{ marginTop: 20, fontSize: 13, lineHeight: 1.65, color: "var(--vk-text-muted)" }}>{note}</div> : null}
    </div>
  );
}
