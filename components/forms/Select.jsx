import React from "react";

export function Select({ label, value, options = [], state = "default", onChange, style }) {
  const disabled = state === "disabled";
  return (
    <label style={{ display: "block", fontFamily: "var(--vk-font-ui)", ...style }}>
      {label ? (
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: "var(--vk-space-1)", color: "var(--vk-text)" }}>{label}</div>
      ) : null}
      <div
        style={{
          height: 40, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 var(--vk-space-3)", borderRadius: "var(--vk-radius-md)",
          background: disabled ? "var(--vk-canvas)" : "var(--vk-surface)",
          border: state === "focus" ? "1.5px solid var(--vk-accent)" : "1px solid var(--vk-border-strong)",
          boxShadow: state === "focus" ? "var(--vk-focus-ring)" : "none",
        }}
      >
        <select
          value={value} disabled={disabled}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          style={{
            flex: 1, border: "none", outline: "none", background: "transparent", appearance: "none",
            fontFamily: "var(--vk-font-ui)", fontSize: 14,
            color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)", cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <span aria-hidden="true" style={{ color: "var(--vk-text-subtle)", fontSize: 12 }}>&#9662;</span>
      </div>
    </label>
  );
}
