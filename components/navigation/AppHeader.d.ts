import type * as React from "react";

/** Cabecera de seccion: titulo Poppins 26/32 y acciones de cuenta en circulos de 34px. */
export interface AppHeaderProps {
  title: string;
  /** Nombres de iconos Feather para las acciones de cuenta. */
  actions?: string[];
  initials?: string;
  onAction?: (name: string) => void;
  style?: React.CSSProperties;
}
export function AppHeader(props: AppHeaderProps): React.ReactElement;
