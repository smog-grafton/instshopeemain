"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth/auth-context";
import { ProductCard } from "@/components/category-product-listing/product-card";
import type { Product } from "@/components/category-product-listing/data";
import {
  getBuyerWallet,
  getBuyerWalletWithdrawals,
  getRecommendedProducts,
  getUiBlocksSafe,
  resolveCountryIdForBrowser,
  type ApiProduct,
  type ApiUiBlock,
} from "@/lib/api-client";
import { formatPrice } from "@/lib/utils";

type WalletSummary = {
  balance?: string;
  available_balance?: string;
  pending_balance?: string;
  currency?: string;
};

type ToolItem = {
  label: string;
  sublabel?: string;
  href: string;
  icon: string;
  tone: string;
};

const orderTools: ToolItem[] = [
  { label: "Payment", href: "/user/purchase?type=unpaid", icon: "card", tone: "text-zinc-700 bg-white" },
  { label: "Shipment", href: "/user/purchase?type=toship", icon: "box", tone: "text-zinc-700 bg-white" },
  { label: "Delivery", href: "/user/purchase?type=shipping", icon: "truck", tone: "text-zinc-700 bg-white" },
  { label: "Review", href: "/user/purchase?type=completed", icon: "chat", tone: "text-zinc-700 bg-white" },
  { label: "Refund", href: "/user/purchase?type=cancelled", icon: "return", tone: "text-zinc-700 bg-white" },
];

const essentialTools: ToolItem[] = [
  { label: "Goods", href: "/products", icon: "bag", tone: "text-fuchsia-600 bg-fuchsia-100" },
  { label: "My Orders", href: "/user/purchase", icon: "clipboard", tone: "text-cyan-600 bg-cyan-100" },
  { label: "Address", href: "/user/account/address", icon: "pin", tone: "text-orange-600 bg-orange-100" },
  { label: "Collection", href: "/user/stores-you-follow", icon: "heart", tone: "text-rose-600 bg-rose-100" },
  { label: "Customer Service", href: "/user/my-message", icon: "support", tone: "text-red-600 bg-red-100" },
  { label: "Wallet address", href: "/user/wallet", icon: "wallet", tone: "text-purple-600 bg-purple-100" },
  { label: "Login Password", href: "/user/account/password", icon: "key", tone: "text-teal-600 bg-teal-100" },
  { label: "Payment Password", href: "/user/account/payment", icon: "shield", tone: "text-amber-600 bg-amber-100" },
  { label: "Apply Merchant", href: "/user/apply-for-merchant", icon: "store", tone: "text-pink-600 bg-pink-100" },
  { label: "Sign Out", href: "/logout", icon: "logout", tone: "text-emerald-600 bg-emerald-100" },
];

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5";
  const paths: Record<string, string> = {
    card: "M4 6h16v12H4zM4 9h16M7 15h5",
    box: "M4 8l8-4 8 4-8 4-8-4Zm0 0v8l8 4 8-4V8",
    truck: "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 18a2 2 0 100-4 2 2 0 000 4Zm11 0a2 2 0 100-4 2 2 0 000 4Z",
    chat: "M5 6h14v10H8l-3 3zM8 10h8M8 13h5",
    return: "M7 7h8a4 4 0 010 8H5M8 4 4 8l4 4",
    cart: "M5 5h2l2 10h8l2-7H8M10 20a1 1 0 100-2 1 1 0 000 2Zm7 0a1 1 0 100-2 1 1 0 000 2Z",
    store: "M4 10h16l-1.5-5h-13zM6 10v10h12V10M9 20v-6h6v6",
    bag: "M6 8h12l-1 12H7zM9 8a3 3 0 016 0",
    clipboard: "M8 4h8v3H8zM6 6h12v14H6zM9 11h6M9 15h4",
    pin: "M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    heart: "M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z",
    support: "M5 12a7 7 0 1114 0v3a2 2 0 01-2 2h-2M5 12v3a2 2 0 002 2h1M9 18h6",
    message: "M4 5h16v11H7l-3 3zM8 9h8M8 12h5",
    wallet: "M4 7h15a1 1 0 011 1v11H5a2 2 0 01-2-2V6a2 2 0 012-2h12M16 13h4",
    key: "M14 7a4 4 0 106 6 4 4 0 00-6-6zM14 13l-8 8H3v-3l8-8",
    shield: "M12 3 5 6v5c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6z",
    download: "M12 4v10M8 10l4 4 4-4M5 20h14",
    info: "M12 17v-6M12 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z",
    logout: "M10 17l5-5-5-5M15 12H3M21 4v16",
  };

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[name] || paths.info} />
    </svg>
  );
}

function toProduct(product: ApiProduct): Product {
  return {
    id: product.slug,
    slug: product.slug,
    title: product.title,
    price: formatPrice(product.currencySymbol, product.price),
    originalPrice: product.originalPrice ? formatPrice(product.currencySymbol, product.originalPrice) : undefined,
    discount: product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : undefined,
    imageSrc: product.imageSrc,
    soldCount: product.soldCount >= 1000 ? `${(product.soldCount / 1000).toFixed(1)}k` : String(product.soldCount),
    rating: product.rating,
    location: product.location,
    textBadges: Array.isArray(product.textBadges) ? (product.textBadges as Product["textBadges"]) : undefined,
    imageBadges: Array.isArray(product.imageBadges) ? (product.imageBadges as Product["imageBadges"]) : undefined,
    promotionLabel: product.promotionLabel || undefined,
    href: `/product/${product.slug}`,
  };
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="min-w-0 text-center">
      <div className="text-lg font-semibold leading-none text-white">{value}</div>
      <div className="mt-1 truncate text-[11px] text-white/85">{label}</div>
    </div>
  );
}

function ToolLink({ item }: { item: ToolItem }) {
  return (
    <Link href={item.href} className="flex min-w-0 flex-col items-center gap-2 rounded-md px-1 py-2 text-center no-underline active:bg-neutral-50">
      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.tone}`}>
        <Icon name={item.icon} />
      </span>
      <span className="line-clamp-2 min-h-[2rem] text-[11px] leading-4 text-neutral-700">{item.label}</span>
    </Link>
  );
}

function Banner({ banner }: { banner: ApiUiBlock }) {
  return (
    <Link href={banner.href || "/user/apply-for-merchant"} className="relative block overflow-hidden rounded-lg bg-[#f15b21] px-4 py-4 text-white no-underline shadow-sm">
      {banner.imageSrc ? (
        <img src={banner.imageSrc} alt="" className="absolute inset-y-0 right-0 h-full w-1/2 object-cover object-center opacity-90" />
      ) : null}
      <div className="relative z-10 max-w-[62%]">
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/85">{banner.subtitle || "Become a platform merchant"}</div>
        <div className="mt-2 text-xl font-bold leading-6">{banner.title || "Join shopee for a better life!"}</div>
      </div>
    </Link>
  );
}

export function BuyerAccountHome() {
  const { user } = useAuth();
  const [wallet, setWallet] = useState<WalletSummary | null>(null);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [banners, setBanners] = useState<ApiUiBlock[]>([]);
  const [pendingWithdrawals, setPendingWithdrawals] = useState(0);

  useEffect(() => {
    let active = true;

    async function load() {
      const countryId = await resolveCountryIdForBrowser();
      const [walletResult, productsResult, bannerResult, withdrawalsResult] = await Promise.allSettled([
        getBuyerWallet(),
        getRecommendedProducts(8),
        getUiBlocksSafe({ key: "buyer_dashboard_banner", country_id: countryId ?? undefined }),
        getBuyerWalletWithdrawals("pending"),
      ]);

      if (!active) return;

      if (walletResult.status === "fulfilled") setWallet(walletResult.value.wallet);
      if (productsResult.status === "fulfilled") setRecommendations(productsResult.value.map(toProduct));
      if (bannerResult.status === "fulfilled") setBanners(bannerResult.value);
      if (withdrawalsResult.status === "fulfilled") {
        setPendingWithdrawals(withdrawalsResult.value.records?.total ?? withdrawalsResult.value.records?.data?.length ?? 0);
      }
    }

    void load();
    return () => {
      active = false;
    };
  }, []);

  const balance = useMemo(() => {
    const amount = Number(wallet?.available_balance ?? wallet?.balance ?? 0);
    return formatPrice(wallet?.currency || "$", Number.isFinite(amount) ? amount : 0);
  }, [wallet]);

  const memberName = user?.username || user?.name || "Buyer";
  const accountId = user?.id ? String(user.id).padStart(7, "0") : "0000000";

  return (
    <div className="space-y-3 lg:space-y-5">
      <section className="overflow-hidden rounded-xl bg-gradient-to-br from-[#ff4d33] via-[#ff6a2d] to-[#ff8a25] text-white shadow-sm lg:rounded-sm">
        <div className="px-4 pb-6 pt-5 sm:px-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/50 bg-white/20 text-lg font-semibold">
                {memberName.slice(0, 1).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="truncate text-lg font-semibold">ID: {accountId}</div>
                <div className="mt-1 inline-flex items-center rounded-full bg-[#17335f] px-2.5 py-1 text-[11px] font-medium text-white">
                  Ordinary member
                </div>
              </div>
            </div>
            <Link href="/user/wallet" className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#ee4d2d] no-underline shadow-sm">
              Wallet
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            <Stat label="Collection" value="0" />
            <Stat label="Shop Collection" value="0" />
            <Stat label="Browse" value="25" />
            <Stat label="Balance" value={balance} />
          </div>
        </div>
      </section>

      <section className="-mt-8 grid grid-cols-2 gap-3 px-2 lg:mt-0 lg:px-0">
        <Link href="/user/wallet" className="flex min-w-0 items-center justify-between rounded-xl bg-white p-4 text-neutral-900 no-underline shadow-sm">
          <div>
            <div className="text-lg font-semibold">Top up</div>
            <div className="mt-1 text-xs text-neutral-500">Wallet</div>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-[#ee4d2d]">
            <Icon name="wallet" />
          </span>
        </Link>
        <Link href="/user/withdraw" className="flex min-w-0 items-center justify-between rounded-xl bg-white p-4 text-neutral-900 no-underline shadow-sm">
          <div>
            <div className="text-lg font-semibold">Withdraw</div>
            <div className="mt-1 text-xs text-neutral-500">Up to 7 business days</div>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <Icon name="download" />
          </span>
        </Link>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-sm lg:rounded-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-neutral-900">My Order</h2>
          <Link href="/user/purchase" className="text-xs font-medium text-neutral-500 no-underline">Order</Link>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {orderTools.map((item) => (
            <ToolLink key={item.label} item={item} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link href="/user/recharge-record" className="rounded-xl bg-white p-4 text-center text-sm text-neutral-700 no-underline shadow-sm">
          <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
            <Icon name="wallet" />
          </span>
          Recharge record
        </Link>
        <Link href="/user/withdrawals-record" className="rounded-xl bg-white p-4 text-center text-sm text-neutral-700 no-underline shadow-sm">
          <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
            <Icon name="return" />
          </span>
          Withdrawals record{pendingWithdrawals ? ` (${pendingWithdrawals})` : ""}
        </Link>
      </section>

      <Banner banner={banners[0] || ({ id: 0, key: "buyer_dashboard_banner", href: "/user/apply-for-merchant", imageSrc: null } as ApiUiBlock)} />

      <section className="rounded-xl bg-white p-4 shadow-sm lg:rounded-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-neutral-900">Essential Tools</h2>
          <Link href="/user/account/profile" className="text-xs text-neutral-400 no-underline">View</Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {essentialTools.map((item) => (
            <ToolLink key={item.label} item={item} />
          ))}
        </div>
      </section>

      <section className="pb-2">
        <div className="mb-3 text-center text-lg font-semibold text-neutral-800">
          You may also like <span className="rounded bg-red-500 px-2 py-1 align-middle text-[10px] font-medium text-white">Selected Goods</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {recommendations.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
