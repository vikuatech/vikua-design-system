import React from "react";
import { StatusBadge } from "../feedback/StatusBadge.jsx";

export function InsightCard({ kind = "Riesgo", tone = "risk", title, description, source, actionLabel = "Ver en el mapa", onAction, style }) {
  return (
    <article
      style={{
        border: "1px solid var(--vk-border)", borderRadius: "var(--vk-radius-lg)",
        padding: "14px 16px", background: "var(--vk-surface)", fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <div style={{ marginBottom: 8 }}><StatusBadge tone={tone}>{kind}</StatusBadge></div>
      <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--vk-text-muted)" }}>{description}</div>
      {(source || actionLabel) ? (
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, paddingTop: 10, borderTop: "1px solid #F0F2F7" }}>
          {source ? <span style={{ fontSize: 12, color: "var(--vk-text-subtle)" }}>{source}</span> : null}
          <div style={{ flex: 1 }} />
          {actionLabel ? (
            <span onClick={onAction} style={{ fontSize: 13, fontWeight: 600, color: "var(--vk-info)", cursor: "pointer" }}>{actionLabel}</span>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
