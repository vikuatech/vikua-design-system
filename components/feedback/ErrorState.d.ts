import type * as React from "react";

/** Estado de error: caja roja clara, causa concreta y accion de reintento. */
export interface ErrorStateProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  style?: React.CSSProperties;
}
export function ErrorState(props: ErrorStateProps): React.ReactElement;
