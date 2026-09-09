import type * as React from "react";

/** Chip de filtro o capa activa, pill de 6x14. */
export interface ChipProps {
  children: React.ReactNode;
  /** outline (borde solido) · dashed (anadir) · fill (gris de lienzo) */
  variant?: "outline" | "dashed" | "fill";
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): React.ReactElement;
