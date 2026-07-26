import Link from "next/link";

type ReservationTabsProps = {
  active: "proxima" | "pasada" | "cancelada";
};

const tabs = [
  { key: "proxima" as const, label: "Proximos viajes" },
  { key: "pasada" as const, label: "Reservas pasadas" },
  { key: "cancelada" as const, label: "Canceladas" },
];

const ReservationTabs = ({ active }: ReservationTabsProps) => {
  return (
    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold ${
            tab.key === active
              ? "bg-zinc-900 text-white"
              : "bg-zinc-100 text-zinc-700"
          }`}
        >
          {tab.label}
        </button>
      ))}

      <Link
        href="/"
        className="ml-auto shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white"
      >
        Buscar mas
      </Link>
    </div>
  );
};

export default ReservationTabs;