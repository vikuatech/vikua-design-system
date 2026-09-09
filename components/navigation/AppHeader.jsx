import React from "react";
import { Icon } from "../icons/Icon.jsx";
import { IconButton } from "../actions/IconButton.jsx";

export function AppHeader({ title, actions = ["help-circle", "bell"], initials = "JP", onAction, style }) {
  return (
    <header
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <h1
        style={{
          margin: 0, fontFamily: "var(--vk-font-brand)", fontWeight: 600,
          fontSize: 26, lineHeight: "32px", letterSpacing: "-0.02em", color: "var(--vk-text)",
        }}
      >{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--vk-space-2)" }}>
        {actions.map((a) => (
          <IconButton key={a} label={a} shape="circle" size="sm" onClick={onAction ? () => onAction(a) : undefined}>
            <Icon name={a} size={17} />
          </IconButton>
        ))}
        <span
          style={{
            width: 34, height: 34, borderRadius: "var(--vk-radius-pill)", background: "var(--vk-brand-deep)",
            color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 600, flexShrink: 0,
          }}
        >{initials}</span>
      </div>
    </header>
  );
}
