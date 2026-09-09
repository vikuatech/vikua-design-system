const { DataTable, SearchBar, Chip, StatusBadge, Button, Icon, Card, Metric } = window.VikuaDesignSystem_da98a9;

const USERS = [
  { n: "Maria Fernanda Rivas", e: "mf.rivas@wawa.com", emp: "Wawa", rol: "Administrador", est: "success", estl: "Activo", ult: "hace 12 min" },
  { n: "Jose Parra", e: "jparra@bancoplaza.com", emp: "Banco Plaza", rol: "Analista", est: "success", estl: "Activo", ult: "hace 3 h" },
  { n: "Luis Bermudez", e: "lbermudez@banplus.com", emp: "Banplus", rol: "Analista", est: "warning", estl: "En revision", ult: "hace 2 d" },
  { n: "Andrea Silva", e: "asilva@vikua.com", emp: "Vikua", rol: "Super admin", est: "success", estl: "Activo", ult: "hace 1 h" },
  { n: "Carlos Mendoza", e: "cmendoza@wawa.com", emp: "Wawa", rol: "Lector", est: "danger", estl: "Bloqueado", ult: "hace 41 d" },
];

function UsersScreen() {
  const [q, setQ] = React.useState("");
  const [emp, setEmp] = React.useState("Todas");
  const rows = USERS
    .filter((u) => emp === "Todas" || u.emp === emp)
    .filter((u) => (u.n + u.e).toLowerCase().includes(q.toLowerCase()))
    .map((u) => ({
      usuario: (
        <div>
          <div style={{ fontWeight: 600 }}>{u.n}</div>
          <div style={{ fontSize: 12.5, color: "var(--vk-text-subtle)" }}>{u.e}</div>
        </div>
      ),
      empresa: u.emp,
      rol: u.rol,
      estado: <StatusBadge tone={u.est}>{u.estl}</StatusBadge>,
      ultimo: u.ult,
    }));
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        <Metric label="Usuarios activos" value="248" delta="↑ 12 este mes" deltaTone="up" />
        <Metric label="Empresas conectadas" value="17" />
        <Metric label="Sesiones ultimos 7 d" value="1.906" delta="↓ 4,20% semana" deltaTone="down" />
        <Metric label="Bloqueados" value="3" note="Revisar accesos" />
      </div>
      <Card padding={0} style={{ overflow: "hidden" }}>
        <div style={{ padding: 20, display: "grid", gap: 14 }}>
          <SearchBar value={q} onChange={setQ} placeholder="Buscar usuario por nombre o correo" onSearch={() => {}} onFilters={() => {}} />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            {["Todas", "Vikua", "Wawa", "Banco Plaza", "Banplus"].map((e) => (
              <Chip key={e} selected={emp === e} onClick={() => setEmp(e)}>{e}</Chip>
            ))}
            <div style={{ flex: 1 }} />
            <Button size="sm" icon={<Icon name="plus" size={15} />}>Invitar usuario</Button>
          </div>
        </div>
        <DataTable
          columns={[
            { key: "usuario", label: "Usuario" },
            { key: "empresa", label: "Empresa" },
            { key: "rol", label: "Rol" },
            { key: "estado", label: "Estado" },
            { key: "ultimo", label: "Ultimo ingreso" },
          ]}
          rows={rows}
          footnote="Cabecera gris #9199A6, filas alternas #FAFBFD, altura de fila 46 px. Las celdas vacias se rotulan No disponible."
          style={{ boxShadow: "none", borderRadius: 0 }}
        />
      </Card>
    </div>
  );
}

Object.assign(window, { UsersScreen, USERS });
