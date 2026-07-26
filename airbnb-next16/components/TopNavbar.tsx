import Link from "next/link";

type TopNavbarProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

const TopNavbar = ({ searchText, onSearchChange }: TopNavbarProps) => {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="container-main flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-2xl font-extrabold text-brand">
          TuHospedaje
        </Link>

        <label className="flex w-full items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 md:max-w-md">
          <span aria-hidden>🔎</span>
          <input
            value={searchText}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full bg-transparent text-sm text-zinc-800 outline-none"
            placeholder="Busca por ciudad o nombre del alojamiento"
            aria-label="Buscar alojamientos"
          />
        </label>

        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            type="button"
            className="rounded-full border border-zinc-300 px-3 py-2 text-sm font-semibold"
            aria-label="Idioma"
          >
            🌐
          </button>
          <button
            type="button"
            className="rounded-full border border-zinc-300 px-3 py-2 text-sm font-semibold"
            aria-label="Menu de usuario"
          >
            ☰ 👤
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
