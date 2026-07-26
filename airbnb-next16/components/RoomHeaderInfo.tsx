type RoomHeaderInfoProps = {
  title: string;
  rating: number;
  reviews: number;
  location: string;
};

const RoomHeaderInfo = ({ title, rating, reviews, location }: RoomHeaderInfoProps) => {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-extrabold text-zinc-900">{title}</h1>
      <p className="text-sm font-semibold text-zinc-700">
        ★ {rating.toFixed(2)} · {reviews} resenas · {location}
      </p>
    </header>
  );
};

export default RoomHeaderInfo;
