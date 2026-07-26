type CatalogToolbarProps = {
  total: number;
  sortOrder: "asc" | "desc";
  onSortChange: (value: "asc" | "desc") => void;
};

const CatalogToolbar = ({ total, sortOrder, onSortChange }: CatalogToolbarProps) => {
  return (
    <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-semibold text-zinc-700">{total} resultados encontrados</p>
      <label className="flex items-center gap-2 text-sm text-zinc-700">
        Orden por precio
        <select
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as "asc" | "desc")}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 font-semibold"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
    </div>
  );
};

export default CatalogToolbar;
