"use client";

import { useEffect, useState } from "react";
import { TopProductsHeader } from "./top-products-header";
import { TopProductsCarousel } from "./top-products-carousel";
import { type TopProduct } from "./data";
import { getRecommendedProducts, type ApiProduct } from "@/lib/api-client";

function transformApiProductToTopProduct(p: ApiProduct, index: number): TopProduct {
  const monthlySales = p.soldCount >= 1000
    ? `${(p.soldCount / 1000).toFixed(0)}k+`
    : `${p.soldCount}+`;
  
  return {
    id: p.slug,
    name: p.title,
    monthlySales,
    imageSrc: p.imageSrc, // Use actual product image from API
    imageId: ((index % 18) + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18, // Fallback for mock data
    href: `/product/${p.slug}`,
  };
}

export function TopProducts() {
  const [products, setProducts] = useState<TopProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const apiProducts = await getRecommendedProducts(18);
        const transformed = apiProducts.map((p, i) => transformApiProductToTopProduct(p, i));
        setProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch top products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="pt-5" tabIndex={0}>
      <TopProductsHeader />
      {loading ? (
        <div className="py-8 text-center text-gray-500">Loading top products...</div>
      ) : products.length === 0 ? (
        <div className="py-8 text-center text-gray-500">No top products available yet.</div>
      ) : (
        <TopProductsCarousel products={products} />
      )}
    </div>
  );
}
