import React from "react";

const TONES = {
  success: { fg: "var(--vk-success-fg)", bg: "var(--vk-success-bg)" },
  warning: { fg: "var(--vk-warning-fg)", bg: "var(--vk-warning-bg)" },
  danger: { fg: "var(--vk-danger-fg)", bg: "var(--vk-danger-bg)" },
  risk: { fg: "var(--vk-risk-fg)", bg: "var(--vk-risk-bg)" },
  info: { fg: "var(--vk-info-fg)", bg: "var(--vk-info-bg)" },
  pattern: { fg: "var(--vk-pattern-fg)", bg: "var(--vk-pattern-bg)" },
};

export function StatusBadge({ children, tone = "info", style }) {
  const t = TONES[tone] || TONES.info;
  return (
    <span
      style={{
        display: "inline-block", fontFamily: "var(--vk-font-ui)", fontSize: 11.5, fontWeight: 700,
        letterSpacing: "0.06em", textTransform: "uppercase", color: t.fg, background: t.bg,
        padding: "4px 10px", borderRadius: "var(--vk-radius-sm)", whiteSpace: "nowrap", ...style,
      }}
    >{children}</span>
  );
}
