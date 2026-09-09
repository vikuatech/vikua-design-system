Superficies y datos. La cifra manda: Poppins 600, alineada a la derecha en tablas, con periodo de comparacion explicito.

```jsx
<Card label="Roles de interfaz" footnote="Nulos siempre rotulados.">…</Card>
<Metric label="Poblacion alcanzada" value="184.320" delta="↑ 3,10% vs. 2023" deltaTone="up" />
<Metric label="Indice de oportunidad" value="86" note="Top 10% del area" tone="brand" />
<DataTable
  title="Tabla de datos" caption="4 de 128 filas"
  columns={[{ key: "n", label: "Nombre" }, { key: "pob", label: "Poblacion", numeric: true }, { key: "idx", label: "Indice", numeric: true, emphasis: true }]}
  rows={[{ n: "Chacao", pob: "42.180", idx: 86 }, { n: "San Bernardino", pob: "27.860", idx: 61 }]}
/>
<BarChart data={[{label:"Chacao",value:78},{label:"Recreo",value:62}]} highlight={0} />
<DataLegend scale="sequential" title="Densidad" includeNull />
```
