/**
 * New Address modal types.
 * Single-website mode: no region selector; region is considered "general".
 * Country-based mode (future): region = MY | BN; field labels change per region.
 */

export type AddressRegionCode = "MY" | "BN" | "general";

export type AddressLabel = "home" | "work";

export interface NewAddressFormValues {
  region: AddressRegionCode;
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo: string;
  streetAddress: string;
  labelAs: AddressLabel;
  setAsDefault: boolean;
}

/** When true, "Select Region" (Malaysia / Brunei) is hidden; address is general. */
export const SHOW_REGION_SELECTOR = false;
