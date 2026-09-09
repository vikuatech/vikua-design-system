import React from "react";

export function Card({ children, title, subtitle, label, footnote, tone = "surface", padding = 20, elevation = 1, style }) {
  const dark = tone === "brand";
  return (
    <div
      style={{
        background: dark ? "var(--vk-brand-deep)" : "var(--vk-surface)",
        color: dark ? "var(--vk-on-brand)" : "var(--vk-text)",
        borderRadius: "var(--vk-radius-lg)",
        boxShadow: elevation === 0 ? "none" : elevation === 2 ? "var(--vk-elev-2)" : elevation === 3 ? "var(--vk-elev-3)" : "var(--vk-elev-1)",
        border: elevation === 0 && !dark ? "1px solid var(--vk-border)" : "none",
        padding, fontFamily: "var(--vk-font-ui)", boxSizing: "border-box", ...style,
      }}
    >
      {label ? (
        <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: "var(--vk-text-subtle)", marginBottom: 18 }}>{label}</div>
      ) : null}
      {title ? (
        <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 17, lineHeight: "24px" }}>{title}</div>
      ) : null}
      {subtitle ? (
        <div style={{ fontSize: 13, color: dark ? "var(--vk-on-brand-muted)" : "var(--vk-text-subtle)", marginTop: 3 }}>{subtitle}</div>
      ) : null}
      {(title || subtitle) && children ? <div style={{ height: "var(--vk-space-4)" }} /> : null}
      {children}
      {footnote ? (
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--vk-surface-subtle)", fontSize: 13, lineHeight: 1.65, color: "var(--vk-text-muted)" }}>{footnote}</div>
      ) : null}
    </div>
  );
}
