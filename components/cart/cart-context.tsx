"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getCart,
  addToCart as addToCartApi,
  removeFromCart as removeFromCartApi,
  updateCartItem,
  syncCart,
  clearCart as clearCartApi,
} from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";
import { getCartItemKey } from "@/lib/cart-selection";

const CART_STORAGE_KEY = "instshopee_cart_v1";

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
  /** Backend cart item ID (for synced items) */
  id?: string;
  /** Currency symbol for display (e.g., "RM", "USD", "IDR") */
  currencySymbol?: string;
  /** Added to checkout shipping when product came from wholesale catalog with a supplier shipping fee. */
  catalogShippingFee?: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (slug: string, colorLabel?: string, size?: string) => Promise<void>;
  removeItemsByKeys: (keys: string[]) => Promise<void>;
  updateQuantity: (slug: string, quantity: number, colorLabel?: string, size?: string) => Promise<void>;
  clearCart: () => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartToStorage(items: CartItem[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Track if we've synced on login to prevent duplicate syncing
  const [hasSyncedOnLogin, setHasSyncedOnLogin] = useState(false);

  // Load cart on mount (only once)
  useEffect(() => {
    if (hydrated) return; // Prevent multiple loads
    
    async function loadCart() {
      setIsLoading(true);
      try {
        if (isLoggedIn) {
          // Load from backend if logged in
          try {
            const backendCart = await getCart();
            if (backendCart.items && backendCart.items.length > 0) {
              // Always use backend as source of truth
              setItems(backendCart.items.map((item) => ({ ...item })));
              saveCartToStorage(backendCart.items.map((item) => ({ ...item })));
            } else {
              // Backend cart is empty, don't load from localStorage here
              // Let syncOnLogin handle it
              setItems([]);
            }
          } catch {
            // Backend failed, fallback to localStorage
            setItems(loadCartFromStorage());
          }
        } else {
          // Guest: load from localStorage
          setItems(loadCartFromStorage());
        }
      } finally {
        setHydrated(true);
        setIsLoading(false);
      }
    }
    loadCart();
  }, [isLoggedIn]); // Only depend on isLoggedIn, not hasSyncedOnLogin

  // Sync cart when user logs in (only once)
  useEffect(() => {
    if (!isLoggedIn || !hydrated || hasSyncedOnLogin) return;

    async function syncOnLogin() {
      try {
        // First, check if backend already has items
        const backendCart = await getCart();
        if (backendCart.items && backendCart.items.length > 0) {
          // Backend already has items, use those (don't sync)
          setItems(backendCart.items.map((item) => ({ ...item })));
          saveCartToStorage(backendCart.items.map((item) => ({ ...item })));
          setHasSyncedOnLogin(true);
          return;
        }

        // Backend is empty, check localStorage for guest items
        const localItems = loadCartFromStorage();
        if (localItems.length > 0) {
          // Use sync endpoint to transfer guest cart to user cart
          // This will only transfer items that don't exist in backend
          await syncCart();
          // Reload from backend after sync
          const syncedCart = await getCart();
          if (syncedCart.items && syncedCart.items.length > 0) {
            setItems(syncedCart.items.map((item) => ({ ...item })));
            saveCartToStorage(syncedCart.items.map((item) => ({ ...item })));
          } else {
            // Sync didn't work or no items to sync, clear localStorage
            setItems([]);
            saveCartToStorage([]);
          }
        } else {
          // No local items, ensure empty state
          setItems([]);
          saveCartToStorage([]);
        }
        setHasSyncedOnLogin(true);
      } catch (error) {
        // ignore sync errors, use backend state
        try {
          const backendCart = await getCart();
          if (backendCart.items && backendCart.items.length > 0) {
            setItems(backendCart.items.map((item) => ({ ...item })));
            saveCartToStorage(backendCart.items.map((item) => ({ ...item })));
          }
        } catch {
          // ignore
        }
        setHasSyncedOnLogin(true);
      }
    }

    syncOnLogin();
  }, [isLoggedIn, hydrated, hasSyncedOnLogin]);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (!hydrated) return;
    saveCartToStorage(items);
  }, [items, hydrated]);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const addItem = useCallback(
    async (item: CartItem) => {
      // Sync to backend first if logged in
      if (isLoggedIn && hydrated) {
        try {
          const response = await addToCartApi(item);
          // Use the response from backend directly instead of reloading
          if (response.item) {
            setItems((prev) => {
              const key = getCartItemKey(item);
              const idx = prev.findIndex((i) => getCartItemKey(i) === key);
              if (idx >= 0) {
                const next = [...prev];
                next[idx] = { ...item, ...response.item, id: response.item.id };
                return next;
              }
              return [...prev, { ...item, ...response.item, id: response.item.id }];
            });
            // Reload full cart to ensure consistency
            const backendCart = await getCart();
            if (backendCart.items && backendCart.items.length > 0) {
              setItems(backendCart.items.map((item) => ({ ...item })));
              saveCartToStorage(backendCart.items.map((item) => ({ ...item })));
            }
            return; // Exit early, backend state is now set
          }
        } catch {
          // Backend failed, fall back to local update
        }
      }

      // Update local state (for guests or if backend failed)
      setItems((prev) => {
        const key = getCartItemKey(item);
        const idx = prev.findIndex((i) => getCartItemKey(i) === key);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], quantity: next[idx].quantity + item.quantity };
          return next;
        }
        return [...prev, { ...item }];
      });
    },
    [isLoggedIn, hydrated]
  );

  const removeItem = useCallback(
    async (slug: string, colorLabel?: string, size?: string) => {
      const itemToRemove = items.find(
        (i) =>
          i.slug === slug &&
          (i.colorLabel ?? "") === (colorLabel ?? "") &&
          (i.size ?? "") === (size ?? "")
      );

      setItems((prev) =>
        prev.filter(
          (i) =>
            i.slug !== slug ||
            (i.colorLabel ?? "") !== (colorLabel ?? "") ||
            (i.size ?? "") !== (size ?? "")
        )
      );

      // Sync to backend if logged in and item has ID
      if (isLoggedIn && hydrated && itemToRemove?.id) {
        try {
          await removeFromCartApi(itemToRemove.id);
        } catch {
          // ignore errors, localStorage is already updated
          // Try to reload from backend to sync state
          try {
            const backendCart = await getCart();
            setItems(backendCart.items.map((item) => ({ ...item })));
            saveCartToStorage(backendCart.items.map((item) => ({ ...item })));
          } catch {
            // ignore reload errors
          }
        }
      }
    },
    [items, isLoggedIn, hydrated]
  );

  const removeItemsByKeys = useCallback(
    async (keys: string[]) => {
      for (const key of keys) {
        const [slug, colorLabel, size] = key.split("::");
        await removeItem(slug, colorLabel || undefined, size || undefined);
      }
    },
    [removeItem]
  );

  const updateQuantity = useCallback(
    async (slug: string, quantity: number, colorLabel?: string, size?: string) => {
      if (quantity < 1) {
        // If quantity is 0 or less, remove the item
        await removeItem(slug, colorLabel, size);
        return;
      }

      const itemToUpdate = items.find(
        (i) =>
          i.slug === slug &&
          (i.colorLabel ?? "") === (colorLabel ?? "") &&
          (i.size ?? "") === (size ?? "")
      );

      if (!itemToUpdate) return;

      // Update local state first
      setItems((prev) =>
        prev.map((item) =>
          item.slug === slug &&
          (item.colorLabel ?? "") === (colorLabel ?? "") &&
          (item.size ?? "") === (size ?? "")
            ? { ...item, quantity }
            : item
        )
      );

      // Sync to backend if logged in and item has ID
      if (isLoggedIn && hydrated && itemToUpdate.id) {
        try {
          await updateCartItem(itemToUpdate.id, quantity);
          // Reload from backend to get correct state
          const backendCart = await getCart();
          if (backendCart.items && backendCart.items.length > 0) {
            setItems(backendCart.items.map((item) => ({ ...item })));
            saveCartToStorage(backendCart.items.map((item) => ({ ...item })));
          }
        } catch {
          // ignore errors, localStorage is already updated
        }
      }
    },
    [items, isLoggedIn, hydrated, removeItem]
  );

  const clearCart = useCallback(async () => {
    setItems([]);

    // Sync to backend if logged in
    if (isLoggedIn && hydrated) {
      try {
        await clearCartApi();
      } catch {
        // ignore errors, localStorage is already cleared
      }
    }
  }, [isLoggedIn, hydrated]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      addItem,
      removeItem,
      removeItemsByKeys,
      updateQuantity,
      clearCart,
      isLoading,
    }),
    [items, itemCount, addItem, removeItem, removeItemsByKeys, updateQuantity, clearCart, isLoading]
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
