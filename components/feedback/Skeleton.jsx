import React from "react";

export function Skeleton({ shape = "text", width = "100%", height, radius, style }) {
  const h = height || (shape === "text" ? 14 : shape === "control" ? 36 : 80);
  const r = radius || (shape === "text" ? 4 : "var(--vk-radius-md)");
  return <div style={{ width, height: h, borderRadius: r, background: "var(--vk-surface-subtle)", ...style }} />;
}
