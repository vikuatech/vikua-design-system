import React from "react";

export function SearchBar({
  placeholder = "Buscar", value, onChange, onSearch, onFilters,
  filtersLabel = "Filtros", searchLabel = "BUSCAR", elevated = true, compact = false, style,
}) {
  const h = compact ? 30 : 34;
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: "var(--vk-space-3)",
        background: "var(--vk-surface)", borderRadius: compact ? 10 : "var(--vk-radius-lg)",
        border: elevated ? "none" : "1px solid var(--vk-border)",
        boxShadow: elevated ? "var(--vk-elev-1)" : "none",
        padding: compact ? "8px 8px 8px 14px" : "8px 8px 8px 16px",
        fontFamily: "var(--vk-font-ui)", ...style,
      }}
    >
      <input
        value={value} placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        readOnly={!onChange}
        style={{
          flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
          fontFamily: "var(--vk-font-ui)", fontSize: compact ? 13.5 : 14.5, color: "var(--vk-text)",
        }}
      />
      {onFilters !== null ? (
        <button
          type="button" onClick={onFilters}
          style={{
            height: h, padding: compact ? "0 12px" : "0 14px", border: "none",
            borderRadius: compact ? 7 : "var(--vk-radius-md)", background: "var(--vk-fill-subtle)",
            color: "var(--vk-text-strong-2)", fontFamily: "var(--vk-font-ui)",
            fontSize: compact ? 12.5 : 13.5, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
          }}
        >{filtersLabel}</button>
      ) : null}
      <button
        type="button" onClick={onSearch}
        style={{
          height: h, padding: compact ? "0 16px" : "0 20px", border: "none",
          borderRadius: compact ? 7 : "var(--vk-radius-md)", background: "var(--vk-accent)",
          color: "#FFFFFF", fontFamily: "var(--vk-font-ui)", fontSize: compact ? 12.5 : 13.5,
          fontWeight: 700, letterSpacing: "0.04em", cursor: "pointer", whiteSpace: "nowrap",
        }}
      >{searchLabel}</button>
    </div>
  );
}
