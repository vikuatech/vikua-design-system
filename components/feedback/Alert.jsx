import React from "react";

const TONES = {
  success: { bg: "var(--vk-success-bg)", bar: "var(--vk-success)", title: "var(--vk-success-fg)", body: "#3A6656" },
  warning: { bg: "var(--vk-warning-bg)", bar: "var(--vk-warning)", title: "var(--vk-warning-fg)", body: "#6B5714" },
  danger: { bg: "var(--vk-danger-bg)", bar: "var(--vk-danger)", title: "var(--vk-danger-fg)", body: "#7C3230" },
  brand: { bg: "var(--vk-brand-deep)", bar: null, title: "#FFFFFF", body: "var(--vk-on-brand-muted)" },
};

export function Alert({ title, description, tone = "success", actionLabel, onAction, style }) {
  const t = TONES[tone] || TONES.success;
  return (
    <div
      style={{
        display: "flex", gap: "var(--vk-space-3)", alignItems: tone === "brand" ? "center" : "stretch",
        background: t.bg, borderRadius: "var(--vk-radius-md)", padding: "13px 16px",
        fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      {t.bar ? <div style={{ width: 4, borderRadius: 2, background: t.bar, flexShrink: 0 }} /> : null}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: t.title }}>{title}</div>
        {description ? <div style={{ fontSize: 13, color: t.body, marginTop: 2 }}>{description}</div> : null}
      </div>
      {actionLabel ? (
        <span
          onClick={onAction}
          style={{ fontSize: 13.5, fontWeight: 600, color: tone === "brand" ? "#FFB98C" : t.title, cursor: "pointer", alignSelf: "center", whiteSpace: "nowrap" }}
        >{actionLabel}</span>
      ) : null}
    </div>
  );
}
