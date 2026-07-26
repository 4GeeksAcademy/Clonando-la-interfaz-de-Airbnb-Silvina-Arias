"use client";

import { useMemo, useState } from "react";

type ReservationBoxProps = {
  pricePerNight: number;
};

const ReservationBox = ({ pricePerNight }: ReservationBoxProps) => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const decreaseGuests = () => setGuests((prev) => Math.max(1, prev - 1));
  const increaseGuests = () => setGuests((prev) => Math.min(10, prev + 1));

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  }, [checkIn, checkOut]);

  const total = nights * pricePerNight;

  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-xl font-extrabold text-zinc-900">${pricePerNight} / noche</p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <label className="text-xs font-semibold text-zinc-700">
          Check-in
          <input
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-2 py-1.5 text-sm"
          />
        </label>
        <label className="text-xs font-semibold text-zinc-700">
          Check-out
          <input
            type="date"
            value={checkOut}
            min={checkIn || undefined}
            onChange={(event) => setCheckOut(event.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-2 py-1.5 text-sm"
          />
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-700">Huespedes</span>
        <div className="flex items-center gap-3">
          <button type="button" onClick={decreaseGuests} className="rounded-full border border-zinc-300 px-3 py-1">-</button>
          <span className="w-5 text-center font-semibold">{guests}</span>
          <button type="button" onClick={increaseGuests} className="rounded-full border border-zinc-300 px-3 py-1">+</button>
        </div>
      </div>
      <button type="button" className="mt-5 w-full rounded-xl bg-brand px-4 py-3 font-bold text-white">
        Reservar
      </button>

      <p className="mt-3 text-sm text-zinc-700">
        {nights > 0 ? `${nights} noche(s) · Total estimado: $${total}` : "Selecciona fechas para calcular el total"}
      </p>
    </aside>
  );
};

export default ReservationBox;
