import { ProductCard } from "./product-card";
import type { Product } from "./data";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <div key={product.slug} className="min-w-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
