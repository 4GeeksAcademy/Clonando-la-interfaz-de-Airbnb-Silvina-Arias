import Image from "next/image";
import type { Reservation } from "@/components/mockData";

type ReservationCardProps = {
  item: Reservation;
};

const ReservationCard = ({ item }: ReservationCardProps) => {
  return (
    <article className="soft-panel overflow-hidden rounded-3xl">
      <div className="grid md:grid-cols-[220px_1fr]">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={600}
          className="h-40 w-full object-cover md:h-full"
        />

        <div className="p-4 md:p-5">
          <p className="text-xs font-extrabold uppercase tracking-wide text-zinc-500">
            {item.status}
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-zinc-900">{item.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{item.address}</p>
          <p className="mt-2 text-sm font-semibold text-zinc-700">{item.dates}</p>
          <p className="mt-3 text-base font-bold text-zinc-900">Total: {item.total}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className="rounded-xl bg-zinc-900 px-3 py-2 text-sm font-bold text-white">
              Ver detalles
            </button>
            <button type="button" className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-bold text-zinc-700">
              Contactar anfitrion
            </button>
            <button type="button" className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-bold text-zinc-700">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReservationCard;