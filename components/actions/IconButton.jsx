import React from "react";

const SIZES = { sm: 32, md: 40, lg: 44 };

export function IconButton({ children, label, variant = "subtle", size = "md", shape = "square", disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const look =
    variant === "accent" ? { background: "var(--vk-accent)", color: "#FFFFFF" }
    : variant === "ghost" ? { background: "transparent", color: "var(--vk-text-strong-2)" }
    : variant === "onBrand" ? { background: "rgba(255,255,255,0.10)", color: "#FFFFFF" }
    : { background: "var(--vk-fill-subtle)", color: "var(--vk-text-strong-2)" };
  return (
    <button
      type="button" aria-label={label} disabled={disabled} onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: "none", borderRadius: shape === "circle" ? "var(--vk-radius-pill)" : "var(--vk-radius-md)",
        cursor: disabled ? "not-allowed" : "pointer", flexShrink: 0,
        transition: "background var(--vk-motion-fast) var(--vk-ease)",
        ...look,
        ...(hover && !disabled ? { background: variant === "accent" ? "var(--vk-accent-hover)" : "var(--vk-surface-subtle)" } : null),
        ...(disabled ? { background: "var(--vk-disabled-bg)", color: "var(--vk-disabled-text)" } : null),
        ...style,
      }}
    >
      {children}
    </button>
  );
}
