"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  slug: string;
  title: string;
  imageSrc: string;
  price: number;
  quantity: number;
  colorLabel?: string;
  size?: string;
  /** Shop grouping info */
  shopId?: string;
  shopName?: string;
  shopSlug?: string;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, colorLabel?: string, size?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function cartItemKey(item: CartItem): string {
  return [item.slug, item.colorLabel ?? "", item.size ?? ""].join("::");
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const key = cartItemKey(item);
      const idx = prev.findIndex((i) => cartItemKey(i) === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + item.quantity };
        return next;
      }
      return [...prev, { ...item }];
    });
  }, []);

  const removeItem = useCallback(
    (slug: string, colorLabel?: string, size?: string) => {
      setItems((prev) =>
        prev.filter(
          (i) =>
            i.slug !== slug ||
            (i.colorLabel ?? "") !== (colorLabel ?? "") ||
            (i.size ?? "") !== (size ?? "")
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(
    () => ({ items, itemCount, addItem, removeItem, clearCart }),
    [items, itemCount, addItem, removeItem, clearCart]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
