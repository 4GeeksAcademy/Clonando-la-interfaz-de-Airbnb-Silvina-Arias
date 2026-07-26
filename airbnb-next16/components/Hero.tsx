type HeroProps = {
  title: string;
  description: string;
};

const Hero = ({ title, description }: HeroProps) => {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-rose-600">
        Airbnb Clone UI
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base leading-7 text-zinc-600">{description}</p>
    </section>
  );
};

export default Hero;
