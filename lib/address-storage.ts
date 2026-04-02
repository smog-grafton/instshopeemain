/**
 * Client-side address storage for checkout.
 * Uses localStorage so "has address" is available on first visit to /checkout.
 */

const STORAGE_KEY = "instshopee_default_address";

export interface StoredAddress {
  region: string;
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo: string;
  streetAddress: string;
  labelAs: string;
  setAsDefault: boolean;
}

export function getStoredAddress(): StoredAddress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredAddress;
  } catch {
    return null;
  }
}

export function setStoredAddress(address: StoredAddress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(address));
  } catch {
    // ignore
  }
}

export function hasStoredAddress(): boolean {
  return getStoredAddress() != null;
}

export function clearStoredAddress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
