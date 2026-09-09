import React from "react";
import { Button } from "../actions/Button.jsx";

export function Modal({ title, description, children, width = 520, confirmLabel = "Confirmar", cancelLabel = "Cancelar", onConfirm, onCancel, style }) {
  return (
    <div
      style={{
        width, background: "var(--vk-surface)", borderRadius: "var(--vk-radius-lg)",
        boxShadow: "var(--vk-elev-3)", overflow: "hidden", fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--vk-surface-subtle)" }}>
        <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 19 }}>{title}</div>
        {description ? <div style={{ fontSize: 13.5, color: "var(--vk-text-muted)", marginTop: 3 }}>{description}</div> : null}
      </div>
      <div style={{ padding: "20px 24px" }}>{children}</div>
      <div style={{ padding: "16px 24px", background: "var(--vk-surface-alt)", borderTop: "1px solid var(--vk-surface-subtle)", display: "flex", justifyContent: "flex-end", gap: 10 }}>
        {cancelLabel ? <Button variant="outline" onClick={onCancel} style={{ height: 38 }}>{cancelLabel}</Button> : null}
        <Button onClick={onConfirm} style={{ height: 38 }}>{confirmLabel}</Button>
      </div>
    </div>
  );
}
