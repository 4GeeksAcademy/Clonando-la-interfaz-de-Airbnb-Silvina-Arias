import StayCard from "@/components/StayCard";
import type { Room } from "@/components/staysData";

type StayGridProps = {
  rooms: Room[];
};

const StayGrid = ({ rooms }: StayGridProps) => {
  return (
    <section className="container-main mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room) => (
        <StayCard key={room.id} room={room} />
      ))}
    </section>
  );
};

export default StayGrid;
