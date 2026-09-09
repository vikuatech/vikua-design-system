Estructura de aplicacion: sidebar fija + cabecera + lienzo #F5F6FA + accion flotante.

```jsx
<Sidebar
  product="Vikua Platform" logoSrc="assets/isotipo-vikua.png" floating
  items={[{ label: "Mis tableros", icon: "grid" }, { label: "Insights", icon: "zap" }]}
  activeId="Mis tableros" onSelect={setNav}
/>
<AppHeader title="Mis tableros" initials="JP" />
```

El naranja del item activo es el mismo de la accion primaria: nunca dos naranjas visibles compitiendo en la misma vista.
