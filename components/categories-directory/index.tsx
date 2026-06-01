"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCategories, type ApiCategory } from "@/lib/api-client";
import { resolveBackendAssetUrl } from "@/lib/utils";

function CategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#ee4d2d]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

export function CategoriesDirectory() {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getCategories({ parent_id: null })
      .then((response) => {
        if (active) setCategories(response.categories || []);
      })
      .catch(() => {
        if (active) setCategories([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const visibleCategories = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return categories;
    return categories.filter((category) => category.name.toLowerCase().includes(value));
  }, [categories, query]);

  return (
    <div className="space-y-4">
      <section className="overflow-hidden rounded-sm bg-white shadow-sm">
        <div className="bg-[#ee4d2d] px-4 py-5 text-white sm:px-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Classification</div>
          <h1 className="mt-1 text-2xl font-bold">Shop by Category</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90">
            Browse departments, official stores, and recommended product feeds in one place.
          </p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search categories"
            className="h-11 rounded-sm border border-neutral-200 px-3 text-sm outline-none focus:border-[#ee4d2d]"
          />
          <Link href="/products" className="inline-flex h-11 items-center justify-center rounded-sm bg-[#ee4d2d] px-5 text-sm font-semibold text-white no-underline">
            View all products
          </Link>
        </div>
      </section>

      <section className="rounded-sm bg-white p-3 shadow-sm sm:p-5">
        {loading ? <div className="py-10 text-center text-sm text-neutral-500">Loading categories...</div> : null}
        {!loading && visibleCategories.length === 0 ? (
          <div className="py-10 text-center text-sm text-neutral-500">No categories found.</div>
        ) : null}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visibleCategories.map((category) => {
            const image = resolveBackendAssetUrl(category.imagePath);
            return (
              <Link
                key={category.id}
                href={category.url || `/${category.slug}-cat.${category.id}`}
                className="group flex min-w-0 flex-col items-center rounded-sm border border-black/[0.06] bg-white p-3 text-center no-underline transition hover:border-[#ee4d2d] hover:shadow-sm"
              >
                <div className="flex aspect-square w-full max-w-[7rem] items-center justify-center overflow-hidden rounded-md bg-neutral-50">
                  {image ? <img src={image} alt="" className="h-full w-full object-contain p-2" /> : <CategoryIcon />}
                </div>
                <div className="mt-3 line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-5 text-neutral-800">{category.name}</div>
                <div className="mt-1 text-xs text-neutral-400">{category.productsCount || 0} products</div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
