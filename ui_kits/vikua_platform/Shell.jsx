const { Sidebar, AppHeader, Fab, Modal, Field, Select } = window.VikuaDesignSystem_da98a9;

const NAV = [
  { id: "tableros", label: "Mis tableros", icon: "grid" },
  { id: "vikua", label: "Tableros Vikua", icon: "layout" },
  { id: "insights", label: "Insights", icon: "zap" },
  { id: "player", label: "Data Player", icon: "bar-chart-2" },
  { id: "midata", label: "Mi data", icon: "database" },
  { id: "datavikua", label: "Data vikua", icon: "layers" },
  { id: "usuarios", label: "Usuarios", icon: "users" },
  { id: "empresas", label: "Empresas", icon: "briefcase" },
  { id: "reportes", label: "Reportes", icon: "trending-up" },
  { id: "salir", label: "Salir", icon: "log-out" },
];

const TITLES = {
  tableros: "Mis tableros", vikua: "Tableros Vikua", insights: "Insights",
  player: "Data Player", midata: "Mi data", datavikua: "Data vikua",
  usuarios: "Usuarios", empresas: "Empresas", reportes: "Reportes", salir: "Salir",
};

function PlatformApp() {
  const [nav, setNav] = React.useState("tableros");
  const [modal, setModal] = React.useState(false);
  const [boards, setBoards] = React.useState(BOARDS);

  const create = (name) => {
    setBoards([{ id: "n" + Date.now(), name: name || "Nuevo tablero", owner: "Tu", ago: "ahora", likes: 0, fresh: true }, ...boards]);
    setModal(false);
    setNav("tableros");
  };

  let screen = null;
  if (nav === "tableros" || nav === "vikua") screen = <BoardsScreen boards={boards} vikua={nav === "vikua"} onCreate={() => setModal(true)} />;
  else if (nav === "insights") screen = <InsightsScreen />;
  else if (nav === "player") screen = <MapScreen />;
  else if (nav === "usuarios") screen = <UsersScreen />;
  else screen = <Placeholder title={TITLES[nav]} />;

  return (
    <div style={{ display: "flex", gap: 20, padding: 20, minHeight: "100vh", boxSizing: "border-box", background: "var(--vk-canvas)", fontFamily: "var(--vk-font-ui)" }}>
      <Sidebar
        floating product="Vikua Platform" logoSrc="../../assets/isotipo-vikua.png"
        items={NAV} activeId={nav} onSelect={setNav}
        style={{ position: "sticky", top: 20, alignSelf: "flex-start", minHeight: 760 }}
      />
      <main style={{ flex: 1, minWidth: 0, position: "relative", paddingRight: 8 }}>
        <AppHeader title={TITLES[nav]} initials="JP" />
        <div style={{ marginTop: 20 }}>{screen}</div>
        <Fab label="Crear tablero" onClick={() => setModal(true)} style={{ position: "fixed", right: 40, bottom: 40 }} />
      </main>
      {modal ? <CreateBoardModal onCancel={() => setModal(false)} onConfirm={create} /> : null}
    </div>
  );
}

function CreateBoardModal({ onCancel, onConfirm }) {
  const [name, setName] = React.useState("Cobertura Caracas");
  const [radio, setRadio] = React.useState("2,0 km");
  return (
    <div
      onClick={onCancel}
      style={{ position: "fixed", inset: 0, background: "rgba(0,19,50,0.42)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 40 }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          title="Nuevo analisis" description="Define el area y las variables que quieres cruzar."
          confirmLabel="Crear analisis" cancelLabel="Cancelar"
          onCancel={onCancel} onConfirm={() => onConfirm(name)}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Nombre del tablero" value={name} onChange={setName} />
            <Field label="Ubicacion" value="Caracas, Venezuela" />
            <Field label="Radio" value={radio} onChange={setRadio} hint="Entre 0,5 y 20 km." />
            <Select label="Agregacion" value="Hexagonos H3 · r8" options={["Hexagonos H3 · r8", "Parroquias", "Municipios"]} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

function Placeholder({ title }) {
  const { EmptyState } = window.VikuaDesignSystem_da98a9;
  return (
    <EmptyState
      title={title + ": sin diseno de referencia"}
      description="Esta seccion existe en el producto pero no hay pantalla en las fuentes entregadas. Se deja vacia a proposito."
      style={{ background: "var(--vk-surface)" }}
    />
  );
}

Object.assign(window, { PlatformApp, CreateBoardModal, Placeholder, NAV });
