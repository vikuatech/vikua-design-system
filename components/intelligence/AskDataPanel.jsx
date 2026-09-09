import React from "react";

export function AskDataPanel({
  label = "Preguntale a tus datos", placeholder = "¿Donde abrir la proxima tienda?",
  suggestions = [], value, onChange, onSubmit, style,
}) {
  return (
    <div
      style={{
        border: "1px solid var(--vk-border)", borderRadius: "var(--vk-radius-lg)",
        padding: "14px 16px", background: "var(--vk-surface-alt)", fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--vk-text-subtle)", marginBottom: 8 }}>{label}</div>
      <input
        value={value} placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        onKeyDown={onSubmit ? (e) => { if (e.key === "Enter") onSubmit(e.currentTarget.value); } : undefined}
        readOnly={!onChange}
        style={{
          width: "100%", boxSizing: "border-box", height: 40, padding: "0 12px",
          background: "var(--vk-surface)", border: "1px solid var(--vk-border-strong)",
          borderRadius: "var(--vk-radius-md)", outline: "none",
          fontFamily: "var(--vk-font-ui)", fontSize: 14, color: "var(--vk-text)",
        }}
      />
      {suggestions.length ? (
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          {suggestions.map((s) => (
            <span
              key={s}
              onClick={onSubmit ? () => onSubmit(s) : undefined}
              style={{
                fontSize: 12.5, background: "var(--vk-surface)", border: "1px solid var(--vk-border)",
                padding: "5px 11px", borderRadius: "var(--vk-radius-pill)", color: "var(--vk-text-strong-2)",
                cursor: onSubmit ? "pointer" : "default",
              }}
            >{s}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
