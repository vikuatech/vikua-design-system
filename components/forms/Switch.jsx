import React from "react";

export function Switch({ label, checked = false, disabled = false, onChange, style }) {
  return (
    <label
      onClick={disabled ? undefined : () => onChange && onChange(!checked)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--vk-font-ui)",
        fontSize: 13.5, color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)",
        cursor: disabled ? "not-allowed" : "pointer", ...style,
      }}
    >
      <span
        style={{
          width: 34, height: 19, borderRadius: "var(--vk-radius-pill)", padding: 2, boxSizing: "border-box",
          display: "inline-flex", alignItems: "center", justifyContent: checked ? "flex-end" : "flex-start",
          background: disabled ? "var(--vk-disabled-bg)" : checked ? "var(--vk-accent)" : "var(--vk-border-dashed)",
          transition: "background var(--vk-motion-base) var(--vk-ease)", flexShrink: 0,
        }}
      >
        <span style={{ width: 15, height: 15, borderRadius: "var(--vk-radius-pill)", background: "#FFFFFF" }} />
      </span>
      {label}
    </label>
  );
}
