import React from "react";

export function Field({
  label, value, placeholder = "", state = "default", hint, error,
  trailing = null, onChange, style,
}) {
  const focused = state === "focus";
  const isError = state === "error";
  const disabled = state === "disabled";
  return (
    <label style={{ display: "block", fontFamily: "var(--vk-font-ui)", ...style }}>
      {label ? (
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: "var(--vk-space-1)", color: "var(--vk-text)" }}>{label}</div>
      ) : null}
      <div
        style={{
          height: 40, display: "flex", alignItems: "center", gap: "var(--vk-space-2)",
          padding: "0 var(--vk-space-3)", borderRadius: "var(--vk-radius-md)",
          background: disabled ? "var(--vk-canvas)" : "var(--vk-surface)",
          border: isError ? "1.5px solid var(--vk-danger)"
            : focused ? "1.5px solid var(--vk-accent)"
            : disabled ? "1px solid var(--vk-border)" : "1px solid var(--vk-border-strong)",
          boxShadow: focused ? "var(--vk-focus-ring)" : "none",
          transition: "border-color var(--vk-motion-fast) var(--vk-ease), box-shadow var(--vk-motion-fast) var(--vk-ease)",
        }}
      >
        <input
          value={value} placeholder={placeholder} disabled={disabled}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          readOnly={!onChange}
          style={{
            flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            fontFamily: "var(--vk-font-ui)", fontSize: 14,
            color: disabled ? "var(--vk-disabled-text)" : "var(--vk-text)",
          }}
        />
        {trailing}
      </div>
      {error ? (
        <div style={{ fontSize: 12.5, color: "var(--vk-danger)", marginTop: 5 }}>{error}</div>
      ) : hint ? (
        <div style={{ fontSize: 12.5, color: "var(--vk-text-subtle)", marginTop: 5 }}>{hint}</div>
      ) : null}
    </label>
  );
}
