import React from "react";

export function ErrorState({ title, description, primaryLabel = "Reintentar", secondaryLabel, onPrimary, onSecondary, style }) {
  return (
    <div
      style={{
        border: "1px solid var(--vk-danger-border)", background: "var(--vk-danger-bg)",
        borderRadius: "var(--vk-radius-lg)", padding: 20, fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 15.5, color: "var(--vk-danger-fg)", marginBottom: 6 }}>{title}</div>
      {description ? (
        <div style={{ fontSize: 13.5, color: "#7C3230", lineHeight: 1.55, marginBottom: 14 }}>{description}</div>
      ) : null}
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button" onClick={onPrimary}
          style={{ height: 34, padding: "0 16px", border: "none", borderRadius: "var(--vk-radius-md)", background: "var(--vk-danger)", color: "#FFFFFF", fontFamily: "var(--vk-font-ui)", fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}
        >{primaryLabel}</button>
        {secondaryLabel ? (
          <button
            type="button" onClick={onSecondary}
            style={{ height: 34, padding: "0 16px", borderRadius: "var(--vk-radius-md)", background: "var(--vk-surface)", border: "1px solid #F0C9C8", color: "var(--vk-danger-fg)", fontFamily: "var(--vk-font-ui)", fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}
          >{secondaryLabel}</button>
        ) : null}
      </div>
    </div>
  );
}
