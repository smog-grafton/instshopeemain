"use client";

const CHECKOUT_SELECTION_STORAGE_KEY = "instshopee_checkout_selection_v1";

export interface CartSelectableItem {
  slug: string;
  colorLabel?: string | null;
  size?: string | null;
}

export function getCartItemKey(item: CartSelectableItem): string {
  return [item.slug, item.colorLabel ?? "", item.size ?? ""].join("::");
}

export function saveCheckoutSelection(keys: string[]): void {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(
      CHECKOUT_SELECTION_STORAGE_KEY,
      JSON.stringify(Array.from(new Set(keys)))
    );
  } catch {
    // ignore storage errors
  }
}

export function readCheckoutSelection(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.sessionStorage.getItem(CHECKOUT_SELECTION_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((value): value is string => typeof value === "string")
      : [];
  } catch {
    return [];
  }
}

export function clearCheckoutSelection(): void {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.removeItem(CHECKOUT_SELECTION_STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}
