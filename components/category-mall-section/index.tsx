import { CategoryMallBar } from "./category-mall-bar";
import { StoreLogosCarousel } from "./store-logos-carousel";

/**
 * Shopee Mall section for the category page: bar (Shopee Mall + See All)
 * and store logos carousel. Separate from the home page mall section.
 */
export function CategoryMallSection() {
  return (
    <div className="relative w-full bg-white text-sm leading-tight text-black/80">
      <CategoryMallBar />
      <StoreLogosCarousel />
    </div>
  );
}
