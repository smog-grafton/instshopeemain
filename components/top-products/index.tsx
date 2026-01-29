import { TopProductsHeader } from "./top-products-header";
import { TopProductsCarousel } from "./top-products-carousel";
import { topProductsData } from "./data";

export function TopProducts() {
  return (
    <div className="pt-5" tabIndex={0}>
      <TopProductsHeader />
      <TopProductsCarousel products={topProductsData} />
    </div>
  );
}
