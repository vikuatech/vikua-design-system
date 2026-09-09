const { Card, MapPanel, DataLegend, Switch, Select, Chip, Button, Icon, Skeleton } = window.VikuaDesignSystem_da98a9;

const HEX = [
  { id: "h1", name: "Chacao · r8", pob: "42.180", precio: "$1.240", comp: 14, idx: 86, step: 5 },
  { id: "h2", name: "El Recreo · r8", pob: "38.940", precio: "$1.080", comp: 11, idx: 79, step: 4 },
  { id: "h3", name: "Leoncio Martinez · r8", pob: "31.205", precio: "$960", comp: 9, idx: 74, step: 3 },
  { id: "h4", name: "San Bernardino · r8", pob: "27.860", precio: "$720", comp: null, idx: 61, step: 2 },
  { id: "h5", name: "El Paraiso · r8", pob: "24.110", precio: "$610", comp: 4, idx: 52, step: 1 },
];
const STEP_COLOR = { 1: "var(--vk-data-seq-1)", 2: "var(--vk-data-seq-2)", 3: "var(--vk-data-seq-3)", 4: "var(--vk-data-seq-4)", 5: "var(--vk-data-seq-5)" };

function MapScreen() {
  const [sel, setSel] = React.useState(HEX[0]);
  const [layer, setLayer] = React.useState("Poblacion");
  const [loading, setLoading] = React.useState(false);
  const cambiar = (v) => { setLayer(v); setLoading(true); setTimeout(() => setLoading(false), 700); };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 16, alignItems: "start" }}>
      <Card label="Control de capas">
        <div style={{ display: "grid", gap: 14 }}>
          <Select label="Variable coloreada" value={layer} options={["Poblacion", "Precio m²", "Competidores", "Indice de oportunidad"]} onChange={cambiar} />
          <Switch label="Puntos de venta" checked />
          <Switch label="Competencia" checked />
          <Switch label="Vias principales" />
          <Switch label="Limites de parroquia" checked />
        </div>
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--vk-surface-subtle)" }}>
          <DataLegend scale="sequential" title={layer} labels={["bajo", "alto"]} includeNull />
        </div>
        <div style={{ marginTop: 18 }}>
          <Button variant="outline" size="sm" fullWidth icon={<Icon name="download" size={15} />}>Exportar capa</Button>
        </div>
      </Card>

      <div
        style={{
          position: "relative", height: 620, borderRadius: "var(--vk-radius-lg)",
          background: "var(--vk-surface-subtle)", overflow: "hidden", boxShadow: "var(--vk-elev-1)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 2, padding: 60, boxSizing: "border-box" }}>
          {HEX.map((h) => (
            <button
              key={h.id} type="button" onClick={() => setSel(h)}
              title={h.name}
              style={{
                border: sel.id === h.id ? "2px solid #FFFFFF" : "2px solid transparent",
                borderRadius: "var(--vk-radius-sm)", cursor: "pointer",
                background: h.comp === null ? "var(--vk-data-null)" : STEP_COLOR[h.step],
                transition: "border-color var(--vk-motion-fast) var(--vk-ease)",
              }}
            />
          ))}
        </div>

        <div style={{ position: "absolute", left: 20, top: 20, display: "flex", gap: 8 }}>
          <Chip variant="fill">Caracas, Venezuela</Chip>
          <Chip variant="fill">Radio 2,0 km</Chip>
          <Chip variant="fill">Hexagonos H3 · r8</Chip>
        </div>

        <div style={{ position: "absolute", right: 20, top: 20 }}>
          {loading ? (
            <div style={{ width: 290, background: "var(--vk-surface)", borderRadius: "var(--vk-radius-lg)", boxShadow: "var(--vk-elev-2)", padding: 18, display: "grid", gap: 10 }}>
              <Skeleton shape="text" width="60%" />
              <Skeleton shape="text" width="85%" />
              <Skeleton shape="text" width="70%" />
            </div>
          ) : (
            <MapPanel
              title={sel.name} subtitle="Hexagono seleccionado"
              rows={[
                { label: "Poblacion", value: sel.pob },
                { label: "Precio m² venta", value: sel.precio },
                { label: "Competidores", value: sel.comp },
                { label: "Indice de oportunidad", value: sel.idx },
              ]}
            />
          )}
        </div>

        <div style={{ position: "absolute", left: 20, bottom: 20, background: "var(--vk-surface)", borderRadius: "var(--vk-radius-lg)", boxShadow: "var(--vk-elev-2)", padding: "14px 16px", width: 260 }}>
          <DataLegend scale="sequential" title={layer} labels={["bajo", "alto"]} unit={layer === "Poblacion" ? "habitantes por hexagono" : null} includeNull />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MapScreen, HEX });
