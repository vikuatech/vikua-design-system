import React from "react";

export function Chip({ children, variant = "outline", selected = false, onClick, style }) {
  const look =
    variant === "dashed" ? { background: "var(--vk-surface)", border: "1px dashed var(--vk-border-dashed)", color: "#7A879C" }
    : variant === "fill" ? { background: "var(--vk-canvas)", border: "1px solid transparent", color: "var(--vk-text-strong-2)" }
    : { background: "var(--vk-surface)", border: "1px solid var(--vk-border)", color: selected ? "var(--vk-text-strong-2)" : "var(--vk-text-muted)" };
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: "var(--vk-space-2)",
        fontFamily: "var(--vk-font-ui)", fontSize: 13.5, fontWeight: selected ? 600 : 400,
        padding: "6px 14px", borderRadius: "var(--vk-radius-pill)",
        cursor: onClick ? "pointer" : "default", whiteSpace: "nowrap", ...look, ...style,
      }}
    >{children}</span>
  );
}
