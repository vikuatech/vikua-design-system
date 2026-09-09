import React from "react";
import { Icon } from "../icons/Icon.jsx";

export function Sidebar({
  product = "Vikua Platform", logoSrc, items = [], activeId, onSelect,
  width = 236, floating = false, style,
}) {
  return (
    <nav
      style={{
        width, flexShrink: 0, boxSizing: "border-box",
        background: "var(--vk-brand-deep)", color: "var(--vk-on-brand)",
        padding: "14px 12px", fontFamily: "var(--vk-font-ui)",
        borderRadius: floating ? "var(--vk-radius-lg)" : "0 14px 14px 0",
        display: "flex", flexDirection: "column", ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 6px 18px" }}>
        <span
          style={{
            width: 30, height: 30, borderRadius: "var(--vk-radius-pill)", background: "#FFFFFF",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden",
          }}
        >
          {logoSrc ? <img src={logoSrc} alt="" style={{ width: 18, height: 18, objectFit: "contain" }} /> : null}
        </span>
        <span style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 14.5 }}>{product}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((it) => {
          const active = (it.id || it.label) === activeId;
          return (
            <button
              key={it.id || it.label}
              type="button"
              onClick={onSelect ? () => onSelect(it.id || it.label) : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 10, textAlign: "left",
                padding: "9px 12px", border: "none", borderRadius: "var(--vk-radius-md)",
                background: active ? "var(--vk-accent)" : "transparent",
                color: active ? "#FFFFFF" : "#E4ECF7",
                fontFamily: "var(--vk-font-ui)", fontSize: 13.5, fontWeight: active ? 600 : 400,
                cursor: "pointer", transition: "background var(--vk-motion-fast) var(--vk-ease)",
              }}
            >
              {it.icon ? <Icon name={it.icon} size={18} /> : null}
              {it.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
