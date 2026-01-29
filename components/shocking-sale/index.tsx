"use client";

import { ShockingSaleHeader } from "./header";
import { ProductCarousel } from "./product-carousel";
import { mockShockingSaleConfig } from "./data";

export function ShockingSale() {
  return (
    <div
      role="main"
      className="w-[1200px] mx-auto -mt-[25rem]"
    >
      <div className="bg-white min-h-72">
        <ShockingSaleHeader config={mockShockingSaleConfig} />
        <ProductCarousel products={mockShockingSaleConfig.products} />
      </div>
    </div>
  );
}
