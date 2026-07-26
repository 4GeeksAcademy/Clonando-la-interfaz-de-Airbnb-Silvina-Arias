const reviews = [
  {
    id: 1,
    author: "Lucia",
    text: "Excelente ubicacion y departamento impecable. Volveria sin dudas.",
  },
  {
    id: 2,
    author: "Pedro",
    text: "Muy buena comunicacion con la anfitriona. Check-in sencillo.",
  },
  {
    id: 3,
    author: "Nora",
    text: "La cama comodisima y el balcon con una vista preciosa de noche.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="mt-8 border-t border-zinc-200 pt-6">
      <h3 className="text-xl font-extrabold text-zinc-900">Resenas</h3>
      <p className="mt-1 text-sm font-semibold text-zinc-700">
        ★ 4.91 · 148 evaluaciones
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-2xl bg-zinc-100 p-4">
            <p className="text-sm font-bold text-zinc-900">{review.author}</p>
            <p className="mt-1 text-sm text-zinc-600">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;