import type { Amenity } from "@/components/staysData";

type AmenitiesGridProps = {
  amenities: Amenity[];
};

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section>
      <h2 className="mb-3 text-xl font-extrabold text-zinc-900">Servicios</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((item) => (
          <div key={item.label} className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-3">
            <span aria-hidden>{item.icon}</span>
            <span className="text-sm font-semibold text-zinc-700">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesGrid;
