const { SearchBar, Chip, Icon, IconButton, EmptyState } = window.VikuaDesignSystem_da98a9;

const BOARDS = [
  { id: "b1", name: "Panel de ventas Q3", owner: "Vikua", ago: "hace 1 h", likes: 124 },
  { id: "b2", name: "Marketing Q3", owner: "Vikua", ago: "hace 2 h", likes: 87 },
  { id: "b3", name: "Finanzas 2025", owner: "Vikua", ago: "hace 3 h", likes: 23 },
  { id: "b4", name: "Operaciones", owner: "Vikua", ago: "ayer", likes: 45 },
  { id: "b5", name: "Satisfaccion del cliente", owner: "Vikua", ago: "ayer", likes: 62 },
  { id: "b6", name: "Supply Chain", owner: "Vikua", ago: "hace 2 d", likes: 31 },
];

function BoardCard({ board }) {
  const [liked, setLiked] = React.useState(false);
  return (
    <article
      style={{
        background: "var(--vk-surface)", borderRadius: "var(--vk-radius-lg)", padding: 16,
        boxShadow: "var(--vk-elev-1)", display: "flex", flexDirection: "column", gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div style={{ fontFamily: "var(--vk-font-brand)", fontWeight: 600, fontSize: 15.5, letterSpacing: "-0.01em" }}>{board.name}</div>
        <IconButton label="Mas opciones" variant="ghost" size="sm"><Icon name="more-horizontal" size={17} /></IconButton>
      </div>
      <div
        style={{
          height: 132, borderRadius: "var(--vk-radius-md)", background: "var(--vk-surface-subtle)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <Icon name="bar-chart-2" size={30} color="var(--vk-text-subtle)" />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11.5, color: "var(--vk-text-subtle)" }}>{board.owner} · {board.ago}</span>
        <button
          type="button" onClick={() => setLiked(!liked)}
          style={{ display: "flex", alignItems: "center", gap: 6, border: "none", background: "transparent", cursor: "pointer", color: liked ? "var(--vk-accent)" : "var(--vk-text-subtle)", fontSize: 12.5, fontFamily: "var(--vk-font-ui)", fontVariantNumeric: "tabular-nums" }}
        >
          <Icon name="heart" size={15} />
          {board.likes + (liked ? 1 : 0)}
        </button>
      </div>
    </article>
  );
}

function BoardsScreen({ boards = BOARDS, vikua = false, onCreate }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("Todos");
  const list = boards.filter((b) => b.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <SearchBar value={q} onChange={setQ} placeholder="Buscar tablero por nombre o descripcion" onSearch={() => {}} onFilters={() => {}} />
      <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
        {["Todos", "Favoritos", "Compartidos conmigo", "Actualizados esta semana"].map((c) => (
          <Chip key={c} selected={filter === c} onClick={() => setFilter(c)}>{c}</Chip>
        ))}
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 13, color: "var(--vk-text-subtle)", alignSelf: "center" }}>
          {list.length} de {boards.length} tableros
        </span>
      </div>
      <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: "var(--vk-text-subtle)", margin: "24px 0 12px" }}>
        {vikua ? "Tableros creados por Vikua" : "Mis tableros"}
      </div>
      {list.length ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {list.map((b) => (<BoardCard key={b.id} board={b} />))}
        </div>
      ) : (
        <EmptyState
          title="Aun no hay tableros"
          description="Conecta una fuente de datos para generar tu primer analisis."
          actionLabel="Conectar fuente" onAction={onCreate}
          style={{ background: "var(--vk-surface)" }}
        />
      )}
    </div>
  );
}

Object.assign(window, { BoardsScreen, BoardCard, BOARDS });
