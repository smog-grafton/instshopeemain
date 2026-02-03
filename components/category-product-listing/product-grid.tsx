import { ProductCard } from "./product-card";
import type { Product } from "./data";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-5 gap-x-2 gap-y-2">
      {products.map((product) => (
        <div key={product.slug} className="min-w-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
