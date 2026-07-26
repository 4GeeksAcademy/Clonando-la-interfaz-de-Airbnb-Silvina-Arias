type Category = {
  id: string;
  icon: string;
  label: string;
};

type CategoryFilterRowProps = {
  categories: Category[];
  activeCategory: string;
  onSelect: (category: string) => void;
};

const CategoryFilterRow = ({
  categories,
  activeCategory,
  onSelect,
}: CategoryFilterRowProps) => {
  return (
    <nav className="container-main mt-4 flex gap-2 overflow-x-auto pb-1">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            <span aria-hidden>{category.icon}</span> {category.label}
          </button>
        );
      })}
    </nav>
  );
};

export default CategoryFilterRow;
