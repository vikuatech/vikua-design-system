Mapas e inteligencia generativa. Todo hallazgo lleva tipo, cifra, fuente y una accion que lo devuelve al dato.

```jsx
<InsightCard
  kind="Riesgo" tone="risk"
  title="Saturacion en el eje Chacao–Altamira"
  description="14 competidores en 1,2 km². La demanda por punto cae 18% frente al promedio metropolitano."
  source="Fuente: Google Places · Kontur"
/>
<AskDataPanel suggestions={["Zonas sin cobertura", "Comparar parroquias"]} />
<MapPanel title="Chacao · r8" rows={[{ label: "Poblacion", value: "42.180" }, { label: "Competidores", value: null }]} />
```
