import React from "react";
import { Button } from "../actions/Button.jsx";

export function EmptyState({ title, description, actionLabel, onAction, style }) {
  return (
    <div
      style={{
        border: "1px dashed var(--vk-border-dashed)", borderRadius: "var(--vk-radius-lg)",
        padding: "26px 20px", textAlign: "center", fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 15.5, marginBottom: 6 }}>{title}</div>
      {description ? (
        <div style={{ fontSize: 13.5, color: "var(--vk-text-muted)", lineHeight: 1.55, marginBottom: 14 }}>{description}</div>
      ) : null}
      {actionLabel ? <Button size="sm" onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  );
}
