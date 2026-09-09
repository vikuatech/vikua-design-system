import type * as React from "react";

/**
 * Estado vacio con borde discontinuo y una sola accion de salida.
 */
export interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export function EmptyState(props: EmptyStateProps): React.ReactElement;
