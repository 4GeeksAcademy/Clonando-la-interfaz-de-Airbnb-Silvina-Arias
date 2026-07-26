import Link from "next/link";
import Image from "next/image";
import type { Room } from "@/components/staysData";

type StayCardProps = {
  room: Room;
};

const StayCard = ({ room }: StayCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <Link href={`/rooms/${room.id}`} className="block">
        <div className="relative h-52 w-full bg-zinc-200">
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="space-y-1 p-4">
          <h3 className="text-lg font-bold text-zinc-900">{room.title}</h3>
          <p className="text-sm text-zinc-500">{room.location}</p>
          <p className="text-sm font-semibold text-zinc-800">${room.pricePerNight} por noche</p>
          <p className="text-sm font-semibold text-zinc-700">★ {room.rating.toFixed(2)}</p>
        </div>
      </Link>
    </article>
  );
};

export default StayCard;
