import React from "react";

export function Checkbox({ label, checked = false, disabled = false, onChange, style }) {
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
          width: 18, height: 18, borderRadius: 4, flexShrink: 0,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: checked ? "var(--vk-accent)" : "transparent",
          border: checked ? "1.5px solid var(--vk-accent)" : "1.5px solid var(--vk-border-dashed)",
          transition: "background var(--vk-motion-fast) var(--vk-ease)",
        }}
      >
        {checked ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        ) : null}
      </span>
      {label}
    </label>
  );
}
