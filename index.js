/**
 * Sistema de Diseno Vikua — punto de entrada unico de componentes.
 *
 * Los proyectos importan siempre desde aqui, nunca desde las rutas internas
 * (`_adherence.oxlintrc.json` lo verifica con `no-restricted-imports`).
 *
 *   import { Button, Metric, Sidebar } from "@vikuatech/design-system";
 *   import "@vikuatech/design-system/styles.css";
 */

/* actions */
export { Button } from "./components/actions/Button.jsx";
export { IconButton } from "./components/actions/IconButton.jsx";
export { Fab } from "./components/actions/Fab.jsx";

/* forms */
export { Field } from "./components/forms/Field.jsx";
export { Select } from "./components/forms/Select.jsx";
export { Checkbox } from "./components/forms/Checkbox.jsx";
export { Switch } from "./components/forms/Switch.jsx";
export { SearchBar } from "./components/forms/SearchBar.jsx";

/* data */
export { Card } from "./components/data/Card.jsx";
export { Metric } from "./components/data/Metric.jsx";
export { DataTable } from "./components/data/DataTable.jsx";
export { BarChart } from "./components/data/BarChart.jsx";
export { DataLegend } from "./components/data/DataLegend.jsx";

/* feedback */
export { Alert } from "./components/feedback/Alert.jsx";
export { StatusBadge } from "./components/feedback/StatusBadge.jsx";
export { Chip } from "./components/feedback/Chip.jsx";
export { Skeleton } from "./components/feedback/Skeleton.jsx";
export { EmptyState } from "./components/feedback/EmptyState.jsx";
export { ErrorState } from "./components/feedback/ErrorState.jsx";
export { Modal } from "./components/feedback/Modal.jsx";

/* navigation */
export { Sidebar } from "./components/navigation/Sidebar.jsx";
export { AppHeader } from "./components/navigation/AppHeader.jsx";

/* intelligence */
export { InsightCard } from "./components/intelligence/InsightCard.jsx";
export { AskDataPanel } from "./components/intelligence/AskDataPanel.jsx";
export { MapPanel } from "./components/intelligence/MapPanel.jsx";

/* icons */
export { Icon } from "./components/icons/Icon.jsx";
