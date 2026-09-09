import React from "react";

const SCALES = {
  sequential: ["var(--vk-data-seq-1)", "var(--vk-data-seq-2)", "var(--vk-data-seq-3)", "var(--vk-data-seq-4)", "var(--vk-data-seq-5)"],
  divergent: ["var(--vk-data-div-1)", "var(--vk-data-div-2)", "var(--vk-data-div-3)", "var(--vk-data-div-4)", "var(--vk-data-div-5)"],
};
const CATEGORICAL = ["var(--vk-data-cat-1)", "var(--vk-data-cat-2)", "var(--vk-data-cat-3)", "var(--vk-data-cat-4)", "var(--vk-data-cat-5)", "var(--vk-data-cat-6)"];

export function DataLegend({ scale = "sequential", title, labels = ["bajo", "alto"], series = [], unit, includeNull = false, style }) {
  return (
    <div style={{ fontFamily: "var(--vk-font-ui)", ...style }}>
      {title ? <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 8 }}>{title}</div> : null}
      {scale === "categorical" ? (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {series.map((s, i) => (
            <span key={s} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "var(--vk-text-strong-2)" }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: CATEGORICAL[i % CATEGORICAL.length] }} />
              {s}
            </span>
          ))}
        </div>
      ) : (
        <>
          <div style={{ display: "flex", borderRadius: "var(--vk-radius-sm)", overflow: "hidden" }}>
            {SCALES[scale].map((c, i) => (<div key={i} style={{ flex: 1, height: 26, background: c }} />))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--vk-text-subtle)", marginTop: 6 }}>
            {labels.map((l) => (<span key={l}>{l}</span>))}
          </div>
        </>
      )}
      {unit ? <div style={{ fontSize: 12, color: "var(--vk-text-subtle)", marginTop: 6 }}>{unit}</div> : null}
      {includeNull ? (
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "var(--vk-text-strong-2)", marginTop: 10 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: "var(--vk-data-null)" }} />
          No disponible
        </div>
      ) : null}
    </div>
  );
}
