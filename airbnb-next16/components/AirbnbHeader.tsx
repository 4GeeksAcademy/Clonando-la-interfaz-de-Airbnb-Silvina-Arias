import Link from "next/link";

type AirbnbHeaderProps = {
  active: "inicio" | "detalle" | "reservas";
};

const tabs = [
  { href: "/", label: "Todo", icon: "🌍", key: "inicio" as const },
  {
    href: "/propiedad",
    label: "Alojamientos",
    icon: "🏨",
    key: "detalle" as const,
  },
  {
    href: "/reservas",
    label: "Reservas",
    icon: "🧳",
    key: "reservas" as const,
  },
];

const AirbnbHeader = ({ active }: AirbnbHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm air-divider">
      <div className="container-main py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-2xl font-extrabold text-brand">
            TuHospedaje
          </Link>
          <p className="hidden text-sm font-semibold text-zinc-700 md:block">
            Conviertete en anfitrion
          </p>
        </div>

        <nav className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 md:justify-center md:gap-8 md:overflow-visible md:pb-0">
          {tabs.map((tab) => {
            const isActive = tab.key === active;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                <span aria-hidden>{tab.icon}</span> {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default AirbnbHeader;