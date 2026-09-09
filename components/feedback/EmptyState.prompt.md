Estados de carga, vacio y error.

```jsx
<Skeleton shape="text" width="70%" /><Skeleton shape="control" /><Skeleton shape="block" />
<EmptyState title="Aun no hay tableros" description="Conecta una fuente de datos para generar tu primer analisis." actionLabel="Conectar fuente" />
<ErrorState title="No pudimos cargar el tablero" description="La consulta a BigQuery supero el tiempo de espera." secondaryLabel="Ver detalle" />
<Modal title="Nuevo analisis" description="Define el area y las variables que quieres cruzar." confirmLabel="Crear analisis">…</Modal>
```

Los esqueletos toman la forma del contenido final; no se usan spinners en tableros.
