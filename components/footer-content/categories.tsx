import type { Category } from "./data";
import { CategoryColumn } from "./category-column";

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  // Split categories into 5 columns
  const columns: Category[][] = [];
  const itemsPerColumn = Math.ceil(categories.length / 5);

  for (let i = 0; i < 5; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    columns.push(categories.slice(start, end));
  }

  return (
    <div className="w-[75rem] mt-16 mb-2.5 mx-auto pb-16">
      <div className="font-bold">Categories</div>
      <div className="flex -mx-1.5">
        {columns.map((columnCategories, columnIndex) => (
          <div key={columnIndex} className="w-1/5 p-1.5">
            {columnCategories.map((category, index) => (
              <CategoryColumn key={index} category={category} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
