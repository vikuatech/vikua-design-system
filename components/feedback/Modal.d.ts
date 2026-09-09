import type * as React from "react";

/** Modal de 520px, elevacion 3, pie con fondo #FAFBFD y la accion primaria a la derecha. */
export interface ModalProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  width?: number;
  confirmLabel?: string;
  /** Cadena vacia o null para un modal de una sola accion. */
  cancelLabel?: string | null;
  onConfirm?: () => void;
  onCancel?: () => void;
  style?: React.CSSProperties;
}
export function Modal(props: ModalProps): React.ReactElement;
