import React from "react";

export function Fab({ children, label = "Crear", size = 52, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" aria-label={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, borderRadius: "var(--vk-radius-pill)", border: "none",
        background: hover ? "var(--vk-accent-hover)" : "var(--vk-accent)", color: "#FFFFFF",
        boxShadow: "var(--vk-elev-accent)", cursor: "pointer",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontSize: Math.round(size / 2), fontWeight: 300, lineHeight: 1,
        transition: "background var(--vk-motion-fast) var(--vk-ease)",
        ...style,
      }}
    >
      {children || "+"}
    </button>
  );
}
