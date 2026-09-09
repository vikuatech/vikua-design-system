Campos del sistema: 40px de alto, radio 8, borde #D6DCE6 y foco naranja con anillo de 3px.

```jsx
<Field label="Ubicacion" value="Caracas" />
<Field label="Radio" value="2.0.0 km" state="error" error="Introduce un radio entre 0,5 y 20 km." />
<Select label="Agregacion" value="Hexagonos H3 · r8" options={["Hexagonos H3 · r8", "Parroquias"]} />
<Checkbox label="Incluir competencia" checked onChange={setV} />
<Switch label="Capa de poblacion" checked />
```
