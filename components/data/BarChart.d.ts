import type * as React from "react";

/** Barras de comparacion: una serie en azul del logo, serie destacada en naranja. Sin degradados ni 3D. */
export interface BarChartProps {
  data: { label: string; value: number }[];
  /** Indice de la barra destacada en naranja de accion. */
  highlight?: number;
  height?: number;
  note?: React.ReactNode;
  style?: React.CSSProperties;
}
export function BarChart(props: BarChartProps): React.ReactElement;
