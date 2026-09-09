import type * as React from "react";

/** Entrada de lenguaje natural sobre los datos del cliente, con sugerencias en chips. */
export interface AskDataPanelProps {
  label?: string;
  placeholder?: string;
  suggestions?: string[];
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  style?: React.CSSProperties;
}
export function AskDataPanel(props: AskDataPanelProps): React.ReactElement;
