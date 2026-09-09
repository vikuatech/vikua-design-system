import React from "react";

// Feather Icons (feathericons.com) es el set de iconografia del sistema.
// Renderiza el placeholder <i data-feather> y deja que feather.replace()
// inserte el SVG real; si feather aun no cargo, se reintenta al montar.
export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 2, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const paint = () => {
      if (!window.feather || !node.isConnected) return false;
      node.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-feather", name);
      node.appendChild(el);
      window.feather.replace({ width: size, height: size, "stroke-width": strokeWidth });
      return true;
    };
    if (paint()) return;
    const t = setInterval(() => { if (paint()) clearInterval(t); }, 120);
    return () => clearInterval(t);
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, color, flexShrink: 0, ...style }}
    />
  );
}
