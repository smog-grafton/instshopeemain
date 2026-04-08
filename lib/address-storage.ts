/**
 * Client-side address storage for checkout.
 * Uses localStorage so "has address" is available on first visit to /checkout.
 */

const STORAGE_KEY = "instshopee_default_address";

export type StoredAddressKind = "user" | "template";

export interface StoredAddress {
  id?: string;
  kind?: StoredAddressKind;
  sourceAddressId?: string | null;
  region: string;
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo: string;
  streetAddress: string;
  labelAs: string;
  setAsDefault: boolean;
  city?: string;
  state?: string | null;
  countryId?: number | null;
  isTemplate?: boolean;
  summaryLabel?: string;
}

function normalizeStoredAddress(value: unknown): StoredAddress | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const address = value as Partial<StoredAddress>;

  if (
    typeof address.fullName !== "string" ||
    typeof address.phoneNumber !== "string" ||
    typeof address.stateArea !== "string" ||
    typeof address.streetAddress !== "string"
  ) {
    return null;
  }

  return {
    id: typeof address.id === "string" ? address.id : undefined,
    kind: address.kind === "template" ? "template" : "user",
    sourceAddressId:
      typeof address.sourceAddressId === "string"
        ? address.sourceAddressId
        : null,
    region: typeof address.region === "string" ? address.region : "general",
    fullName: address.fullName,
    phoneNumber: address.phoneNumber,
    stateArea: address.stateArea,
    postalCode: typeof address.postalCode === "string" ? address.postalCode : "",
    unitNo: typeof address.unitNo === "string" ? address.unitNo : "",
    streetAddress: address.streetAddress,
    labelAs: typeof address.labelAs === "string" ? address.labelAs : "home",
    setAsDefault: Boolean(address.setAsDefault),
    city: typeof address.city === "string" ? address.city : undefined,
    state:
      typeof address.state === "string" || address.state === null
        ? address.state
        : undefined,
    countryId: typeof address.countryId === "number" ? address.countryId : null,
    isTemplate:
      typeof address.isTemplate === "boolean"
        ? address.isTemplate
        : address.kind === "template",
    summaryLabel:
      typeof address.summaryLabel === "string" ? address.summaryLabel : undefined,
  };
}

export function getStoredAddress(): StoredAddress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return normalizeStoredAddress(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function setStoredAddress(address: StoredAddress): void {
  if (typeof window === "undefined") return;
  try {
    const normalized = normalizeStoredAddress(address);
    if (!normalized) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
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
