import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/components/mockData";

type ListingCardProps = {
  listing: Listing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <article className="w-[210px] shrink-0 md:w-[240px]">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={listing.image}
          alt={listing.title}
          width={600}
          height={480}
          className="h-44 w-full object-cover md:h-48"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800">
          {listing.badge}
        </span>
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-zinc-900/30 p-1.5 text-white"
          aria-label="Agregar a favoritos"
        >
          ♡
        </button>
      </div>

      <div className="mt-2">
        <Link
          href="/propiedad"
          className="line-clamp-1 text-base font-bold text-zinc-900 hover:underline"
        >
          {listing.title}
        </Link>
        <p className="text-sm text-zinc-500">{listing.price}</p>
        <p className="text-sm font-semibold text-zinc-700">★ {listing.rating}</p>
      </div>
    </article>
  );
};

export default ListingCard;