import type * as React from "react";

/** Cifra destacada: Poppins 600 32/36 con tabular-nums y variacion en color semantico. */
export interface MetricProps {
  label: string;
  value: string | number;
  /** Texto de variacion, p.ej. "↑ 3,10% vs. 2023". Siempre con periodo explicito. */
  delta?: string;
  deltaTone?: "up" | "down" | "neutral";
  note?: string;
  /** 0-100: pinta la barra de cobertura en naranja. */
  progress?: number;
  tone?: "surface" | "brand";
  style?: React.CSSProperties;
}
export function Metric(props: MetricProps): React.ReactElement;
