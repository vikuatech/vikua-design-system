import type * as React from "react";

/** Leyenda de color de datos: secuencial, divergente o categorica (hasta 6 series). */
export interface DataLegendProps {
  scale?: "sequential" | "divergent" | "categorical";
  title?: string;
  /** Extremos de la escala, p.ej. ["bajo", "alto"] o ["−", "0", "+"]. */
  labels?: string[];
  /** Nombres de serie para la escala categorica. */
  series?: string[];
  unit?: string;
  /** Anade la categoria No disponible en #E4E9F2. */
  includeNull?: boolean;
  style?: React.CSSProperties;
}
export function DataLegend(props: DataLegendProps): React.ReactElement;
