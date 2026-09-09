const { Metric, Card, InsightCard, AskDataPanel, Alert, Chip, DataLegend, BarChart } = window.VikuaDesignSystem_da98a9;

const INSIGHTS = [
  { kind: "Riesgo", tone: "risk", title: "Saturacion en el eje Chacao–Altamira",
    description: "14 competidores en 1,2 km². La demanda por punto cae 18% frente al promedio metropolitano.",
    source: "Fuente: Google Places · Kontur" },
  { kind: "Oportunidad", tone: "info", title: "Demanda sin cubrir en El Paraiso",
    description: "12 hexagonos con poblacion alta y ningun punto de venta en un radio de 1,5 km.",
    source: "Fuente: Kontur Population · ventas propias" },
  { kind: "Patron", tone: "pattern", title: "El ticket sube los jueves en zonas de oficina",
    description: "+9,4% de ticket promedio entre las 12:00 y 15:00 en hexagonos con densidad de empleo alta.",
    source: "Fuente: transacciones 2025 · Vikua Platform" },
];

function InsightsScreen() {
  const [pregunta, setPregunta] = React.useState("");
  const [ultima, setUltima] = React.useState(null);
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        <Metric label="Poblacion alcanzada" value="184.320" delta="↑ 3,10% vs. 2023" deltaTone="up" />
        <Metric label="Precio m² venta" value="$1.240" delta="↓ 1,80% trimestre" deltaTone="down" />
        <Metric label="Cobertura de datos" value="92%" progress={92} />
        <Metric label="Indice de oportunidad" value="86" note="Top 10% del area" tone="brand" />
      </div>

      <Alert tone="warning" title="Cobertura parcial" description="4 de 52 hexagonos sin datos de competencia." />

      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 16, alignItems: "start" }}>
        <Card label="Hallazgos generados por IA" footnote="Todo hallazgo lleva tipo, cifra, fuente y una accion que lo devuelve al dato.">
          <div style={{ display: "grid", gap: 14 }}>
            {INSIGHTS.map((i) => (<InsightCard key={i.title} {...i} />))}
          </div>
        </Card>
        <div style={{ display: "grid", gap: 16 }}>
          <AskDataPanel
            value={pregunta} onChange={setPregunta}
            onSubmit={(v) => { setUltima(v); setPregunta(""); }}
            suggestions={["Zonas sin cobertura", "Comparar parroquias", "Donde abrir la proxima tienda"]}
          />
          {ultima ? (
            <Alert tone="success" title="Consulta enviada al modelo" description={'"' + ultima + '" · resultado en unos segundos.'} />
          ) : null}
          <Card title="Demanda por parroquia" subtitle="Indice de oportunidad, 2025">
            <BarChart
              data={[{ label: "Chacao", value: 86 }, { label: "Recreo", value: 79 }, { label: "L. Martinez", value: 74 }, { label: "S. Bernardino", value: 61 }, { label: "El Paraiso", value: 52 }]}
              highlight={0} height={130}
            />
            <div style={{ height: 18 }} />
            <DataLegend scale="categorical" series={["Indice", "Destacado"]} />
          </Card>
          <Card label="Capas activas">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Chip selected>Kontur Population</Chip>
              <Chip>Google Places</Chip>
              <Chip>Ventas propias</Chip>
              <Chip variant="dashed">+ Nueva capa</Chip>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { InsightsScreen, INSIGHTS });
