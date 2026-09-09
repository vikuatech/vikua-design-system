/**
 * Sistema de Diseno Vikua — tipos de los componentes.
 *
 * Los proyectos importan siempre desde aqui, nunca desde las rutas internas
 * (`_adherence.oxlintrc.json` lo verifica con `no-restricted-imports`).
 *
 *   import { Button, Metric, Sidebar } from "@vikuatech/design-system";
 *   import "@vikuatech/design-system/styles.css";
 */

/* actions */
export * from "./components/actions/Button";
export * from "./components/actions/IconButton";
export * from "./components/actions/Fab";

/* forms */
export * from "./components/forms/Field";
export * from "./components/forms/Select";
export * from "./components/forms/Checkbox";
export * from "./components/forms/Switch";
export * from "./components/forms/SearchBar";

/* data */
export * from "./components/data/Card";
export * from "./components/data/Metric";
export * from "./components/data/DataTable";
export * from "./components/data/BarChart";
export * from "./components/data/DataLegend";

/* feedback */
export * from "./components/feedback/Alert";
export * from "./components/feedback/StatusBadge";
export * from "./components/feedback/Chip";
export * from "./components/feedback/Skeleton";
export * from "./components/feedback/EmptyState";
export * from "./components/feedback/ErrorState";
export * from "./components/feedback/Modal";

/* navigation */
export * from "./components/navigation/Sidebar";
export * from "./components/navigation/AppHeader";

/* intelligence */
export * from "./components/intelligence/InsightCard";
export * from "./components/intelligence/AskDataPanel";
export * from "./components/intelligence/MapPanel";

/* icons */
export * from "./components/icons/Icon";
