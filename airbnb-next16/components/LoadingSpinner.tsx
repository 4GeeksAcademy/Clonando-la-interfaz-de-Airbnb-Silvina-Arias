const LoadingSpinner = () => {
  return (
    <div className="container-main mt-10 flex justify-center">
      <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700">
        <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
        Cargando alojamientos...
      </div>
    </div>
  );
};

export default LoadingSpinner;
