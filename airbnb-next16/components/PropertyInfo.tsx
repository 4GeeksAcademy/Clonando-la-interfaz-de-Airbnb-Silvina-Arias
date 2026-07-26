const amenities = [
  "2 huespedes",
  "1 dormitorio",
  "1 cama",
  "1 bano",
  "Wi-Fi",
  "Cocina completa",
  "Aire acondicionado",
  "Check-in autonomo",
];

const PropertyInfo = () => {
  return (
    <section>
      <div className="air-divider pb-5">
        <h2 className="text-xl font-bold text-zinc-900">Alojamiento entero</h2>
        <p className="mt-1 text-zinc-600">Anfitrion: Martina · Superhost</p>
      </div>

      <p className="air-divider py-5 text-zinc-600">
        Disfruta de una estadia centrica con balcon, luz natural y una decoracion
        calida inspirada en la ciudad. Ideal para viajes de trabajo o escapadas
        de fin de semana.
      </p>

      <ul className="grid grid-cols-1 gap-2 py-5 text-sm font-semibold text-zinc-700 md:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity} className="rounded-xl bg-zinc-100 px-3 py-2">
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PropertyInfo;