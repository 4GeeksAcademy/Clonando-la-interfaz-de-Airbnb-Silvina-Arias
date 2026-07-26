import Link from "next/link";

const BackToCatalog = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700"
    >
      ← Volver al catalogo
    </Link>
  );
};

export default BackToCatalog;
