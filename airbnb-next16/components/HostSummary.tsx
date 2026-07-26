type HostSummaryProps = {
  hostName: string;
  hostYears: number;
};

const HostSummary = ({ hostName, hostYears }: HostSummaryProps) => {
  const initials = hostName.slice(0, 1).toUpperCase();

  return (
    <section className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-zinc-900 text-lg font-bold text-white">
        {initials}
      </div>
      <div>
        <p className="text-base font-bold text-zinc-900">Anfitrion: {hostName}</p>
        <p className="text-sm text-zinc-600">{hostYears} anos como anfitrion</p>
      </div>
    </section>
  );
};

export default HostSummary;
