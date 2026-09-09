import type * as React from "react";

/**
 * Hallazgo generado por IA: tipo, cifra, fuente y una accion que devuelve al dato.
 */
export interface InsightCardProps {
  /** Rotulo del tipo de hallazgo: Riesgo, Oportunidad, Patron. */
  kind?: string;
  tone?: "risk" | "info" | "pattern" | "success" | "warning" | "danger";
  title: string;
  description: string;
  /** Origen del dato. Nunca se presenta una conclusion de IA sin su fuente. */
  source?: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export function InsightCard(props: InsightCardProps): React.ReactElement;
