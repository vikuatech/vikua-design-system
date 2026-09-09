import type * as React from "react";

/** Tabla de datos: cabecera #9199A6, filas alternas #FAFBFD, 46px de alto, cifras a la derecha. */
export interface DataTableColumn {
  key: string;
  label: string;
  /** Alinea a la derecha y aplica tabular-nums. */
  numeric?: boolean;
  /** Resalta la celda en azul info y peso 600. */
  emphasis?: boolean;
}
export interface DataTableProps {
  columns: DataTableColumn[];
  /** Celdas vacias, null o undefined se rotulan automaticamente como "No disponible". */
  rows: Record<string, React.ReactNode>[];
  title?: string;
  caption?: string;
  footnote?: React.ReactNode;
  style?: React.CSSProperties;
}
export function DataTable(props: DataTableProps): React.ReactElement;
