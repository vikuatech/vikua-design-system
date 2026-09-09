import type * as React from "react";

/**
 * Etiqueta de estado en mayusculas. Los significados son del nucleo: un producto los hereda, nunca los redefine.
 */
export interface StatusBadgeProps {
  children: React.ReactNode;
  /** success Aprobado · warning En revision · danger No disponible · risk Riesgo · info Oportunidad · pattern Patron */
  tone?: "success" | "warning" | "danger" | "risk" | "info" | "pattern";
  style?: React.CSSProperties;
}
export function StatusBadge(props: StatusBadgeProps): React.ReactElement;
