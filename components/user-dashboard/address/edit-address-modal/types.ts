/**
 * Edit Address modal types.
 * Extends the NewAddressFormValues with location coordinates for map integration.
 */

import type { NewAddressFormValues } from "../new-address-modal/types";

export interface EditAddressFormValues extends NewAddressFormValues {
  /** Latitude and longitude for map marker */
  location?: {
    lat: number;
    lng: number;
  };
}

export interface MapLocation {
  lat: number;
  lng: number;
}

export const DEFAULT_MAP_CENTER: MapLocation = {
  lat: 3.07563, // Shah Alam, Malaysia
  lng: 101.48119,
};

export const DEFAULT_MAP_ZOOM = 16;
