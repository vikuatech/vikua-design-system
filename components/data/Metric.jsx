import React from "react";

export function Metric({ label, value, delta, deltaTone = "neutral", note, progress, tone = "surface", style }) {
  const dark = tone === "brand";
  const deltaColor =
    deltaTone === "up" ? "var(--vk-success)"
    : deltaTone === "down" ? "var(--vk-danger)"
    : dark ? "var(--vk-yellow)" : "var(--vk-text-muted)";
  return (
    <div
      style={{
        background: dark ? "var(--vk-brand-deep)" : "var(--vk-surface)",
        borderRadius: "var(--vk-radius-lg)", padding: "18px 20px",
        boxShadow: dark ? "none" : "var(--vk-elev-1)", fontFamily: "var(--vk-font-ui)",
        boxSizing: "border-box", ...style,
      }}
    >
      <div style={{ fontSize: 13.5, color: dark ? "var(--vk-on-brand-muted)" : "var(--vk-text-muted)" }}>{label}</div>
      <div
        style={{
          fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: "var(--vk-metric-size)",
          lineHeight: "var(--vk-metric-line)", letterSpacing: "var(--vk-metric-track)",
          marginTop: 6, fontVariantNumeric: "tabular-nums",
          color: dark ? "var(--vk-on-brand)" : "var(--vk-text)",
        }}
      >{value}</div>
      {delta ? <div style={{ fontSize: 13, color: deltaColor, marginTop: 8 }}>{delta}</div> : null}
      {note && !delta ? <div style={{ fontSize: 13, color: dark ? "var(--vk-on-brand-muted)" : "var(--vk-text-subtle)", marginTop: 8 }}>{note}</div> : null}
      {typeof progress === "number" ? (
        <div style={{ display: "flex", gap: 3, marginTop: 12 }}>
          <div style={{ height: 6, flex: progress, background: "var(--vk-accent)", borderRadius: 3 }} />
          <div style={{ height: 6, flex: 100 - progress, background: "var(--vk-disabled-bg)", borderRadius: 3 }} />
        </div>
      ) : null}
    </div>
  );
}
