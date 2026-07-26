import ListingCard from "@/components/ListingCard";
import type { Listing } from "@/components/mockData";

type ListingRowProps = {
  title: string;
  subtitle?: string;
  items: Listing[];
};

const ListingRow = ({ title, subtitle, items }: ListingRowProps) => {
  return (
    <section className="container-main mt-8 md:mt-12">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-zinc-900">{title}</h2>
          {subtitle ? <p className="text-zinc-500">{subtitle}</p> : null}
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-zinc-200 text-zinc-700">
          ➜
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 md:gap-4">
        {items.map((item) => (
          <ListingCard key={item.id} listing={item} />
        ))}
      </div>
    </section>
  );
};

export default ListingRow;