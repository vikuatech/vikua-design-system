import React from "react";

const SIZES = {
  sm: { height: 32, padding: "0 14px", fontSize: 13 },
  md: { height: 40, padding: "0 20px", fontSize: 14 },
  lg: { height: 48, padding: "0 26px", fontSize: 15 },
};

function skin(variant) {
  switch (variant) {
    case "secondary":
      return { background: "var(--vk-brand-deep)", color: "var(--vk-on-brand)", border: "1px solid transparent" };
    case "outline":
      return { background: "var(--vk-surface)", color: "var(--vk-text-strong-2)", border: "1px solid var(--vk-border-strong)" };
    case "text":
      return { background: "transparent", color: "var(--vk-info)", border: "1px solid transparent" };
    case "destructive":
      return { background: "var(--vk-danger)", color: "#FFFFFF", border: "1px solid transparent" };
    default:
      return { background: "var(--vk-accent)", color: "#FFFFFF", border: "1px solid transparent" };
  }
}

export function Button({
  children, variant = "primary", size = "md", disabled = false,
  uppercase = false, fullWidth = false, icon = null, onClick, type = "button", style,
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const look = skin(variant);
  const isPrimary = variant === "primary";
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--vk-space-2)",
        height: s.height, padding: variant === "text" ? "0 14px" : s.padding, fontSize: s.fontSize,
        fontFamily: "var(--vk-font-ui)", fontWeight: uppercase ? 700 : 600,
        letterSpacing: uppercase ? "0.04em" : "normal", textTransform: uppercase ? "uppercase" : "none",
        borderRadius: "var(--vk-radius-md)", cursor: disabled ? "not-allowed" : "pointer",
        width: fullWidth ? "100%" : "auto", whiteSpace: "nowrap",
        transition: "background var(--vk-motion-fast) var(--vk-ease), color var(--vk-motion-fast) var(--vk-ease)",
        ...look,
        ...(disabled ? { background: "var(--vk-disabled-bg)", color: "var(--vk-disabled-text)", border: "1px solid transparent" } : null),
        ...(hover && !disabled
          ? isPrimary ? { background: "var(--vk-accent-hover)" }
          : variant === "secondary" ? { background: "#0A2450" }
          : variant === "outline" ? { background: "var(--vk-fill-subtle)" }
          : variant === "destructive" ? { background: "#C93F3E" }
          : { color: "var(--vk-brand-deep)" }
          : null),
        ...style,
      }}
    >
      {icon}
      {children}
    </button>
  );
}
