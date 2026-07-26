const BookingWidget = () => {
  return (
    <aside className="soft-panel rounded-3xl p-5 md:sticky md:top-28">
      <p className="text-2xl font-extrabold text-zinc-900">$214,000 COP noche</p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-300">
        <div className="grid grid-cols-2">
          <div className="border-r border-zinc-300 p-3">
            <p className="text-[11px] font-extrabold uppercase">Check-in</p>
            <p className="text-sm text-zinc-600">20 Ago</p>
          </div>
          <div className="p-3">
            <p className="text-[11px] font-extrabold uppercase">Check-out</p>
            <p className="text-sm text-zinc-600">24 Ago</p>
          </div>
        </div>
        <div className="border-t border-zinc-300 p-3">
          <p className="text-[11px] font-extrabold uppercase">Huespedes</p>
          <p className="text-sm text-zinc-600">2 huespedes</p>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-brand py-3 text-base font-extrabold text-white"
      >
        Reservar
      </button>

      <div className="mt-4 text-sm text-zinc-600">
        <p className="flex items-center justify-between py-1">
          <span>$214,000 x 4 noches</span>
          <strong>$856,000</strong>
        </p>
        <p className="flex items-center justify-between py-1">
          <span>Tarifa de servicio</span>
          <strong>$68,000</strong>
        </p>
        <p className="mt-2 flex items-center justify-between border-t border-zinc-300 pt-3 font-bold text-zinc-900">
          <span>Total</span>
          <span>$924,000 COP</span>
        </p>
      </div>
    </aside>
  );
};

export default BookingWidget;