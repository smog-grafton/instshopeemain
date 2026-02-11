"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMallStores, type ApiMallStore } from "@/lib/api-client";

export function MallStoresListing() {
  const [stores, setStores] = useState<ApiMallStore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStores() {
      try {
        const mallStores = await getMallStores();
        setStores(mallStores);
      } catch (error) {
        console.error("Failed to fetch mall stores:", error);
        setStores([]);
      } finally {
        setLoading(false);
      }
    }
    fetchStores();
  }, []);

  if (loading) {
    return (
      <div className="rounded-sm bg-white shadow-sm p-8">
        <div className="py-8 text-center text-gray-500">Loading mall stores...</div>
      </div>
    );
  }

  return (
    <div className="rounded-sm bg-white shadow-sm p-8">
      <h1 className="text-2xl font-bold mb-6 text-black/87">Shopee Mall Stores</h1>
      <p className="text-sm text-black/60 mb-6">
        Discover official stores from trusted brands with guaranteed authenticity and quality.
      </p>
      
      {stores.length === 0 ? (
        <div className="py-8 text-center text-gray-500">No mall stores available.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {stores.map((store) => (
            <Link
              key={store.id}
              href={store.href}
              className="flex flex-col items-center p-4 border border-black/5 rounded-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative w-full aspect-square mb-3">
                <Image
                  src={store.logoUrl}
                  alt={store.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 200px"
                  unoptimized={store.logoUrl.startsWith("http")}
                />
              </div>
              <h3 className="text-sm font-medium text-center text-black/87 line-clamp-2">
                {store.name}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
