import { TopNavbar } from "@/components/top-navbar";
import { SiteFooter } from "@/components/site-footer";
import { CartHeader } from "@/components/cart/cart-header";
import { CartProductListSection } from "@/components/cart/cart-product-list-section";
import { CartFooter } from "@/components/cart/cart-footer";
import { CartYouMayAlsoLike } from "@/components/cart/cart-you-may-also-like";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <CartHeader />
      <main
        id="component"
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,sans-serif] text-sm leading-tight text-black/80"
      >
        <div className="w-[1200px] mx-auto py-6">
          <CartProductListSection />
          <CartFooter />

          {/* Bottom recommendation section: You May Also Like */}
          <CartYouMayAlsoLike />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

