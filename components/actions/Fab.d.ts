import type * as React from "react";

/** Accion flotante naranja, 52px, inferior derecha del lienzo: crear tablero, carpeta o empresa. */
export interface FabProps {
  children?: React.ReactNode;
  label?: string;
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Fab(props: FabProps): React.ReactElement;
