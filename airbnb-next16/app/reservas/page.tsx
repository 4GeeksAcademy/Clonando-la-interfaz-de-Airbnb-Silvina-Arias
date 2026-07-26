import AirbnbHeader from "@/components/AirbnbHeader";
import ReservationCard from "@/components/ReservationCard";
import ReservationTabs from "@/components/ReservationTabs";
import { reservations } from "@/components/mockData";

const ReservationsPage = () => {
  return (
    <main className="min-h-screen pb-10">
      <AirbnbHeader active="reservas" />

      <section className="container-main mt-5">
        <h1 className="text-3xl font-extrabold text-zinc-900 md:text-4xl">Mis reservas</h1>
        <p className="mt-1 text-zinc-600">
          Consulta estancias proximas, historial y reservas canceladas.
        </p>

        <ReservationTabs active="proxima" />

        <div className="mt-5 grid gap-4">
          {reservations.map((item) => (
            <ReservationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ReservationsPage;