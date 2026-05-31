import { ProductCard } from "@/components/category-product-listing/product-card";
import type { Product } from "@/components/category-product-listing/data";

interface SearchProductGridProps {
  products: Product[];
}

/**
 * 5-column product grid for search results (5×12 = 60 products per page).
 * Reuses ProductCard from category-product-listing.
 */
export function SearchProductGrid({ products }: SearchProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <div key={product.slug} className="min-w-0">
          <ProductCard product={product} variant="transparent" />
        </div>
      ))}
    </div>
  );
}
