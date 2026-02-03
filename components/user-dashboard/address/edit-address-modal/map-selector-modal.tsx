"use client";

import { useEffect, useRef, useState } from "react";
import type { MapLocation } from "./types";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "./types";

interface MapSelectorModalProps {
  open: boolean;
  onClose: () => void;
  initialLocation: MapLocation;
  onConfirm: (location: MapLocation, addressComponents: AddressComponents) => void;
  currentAddress?: string;
}

export interface AddressComponents {
  streetAddress: string;
  stateArea: string;
  postalCode: string;
  formattedAddress: string;
}

/**
 * Full-screen map selector modal.
 * Allows users to drag a marker to select a precise location.
 */
export function MapSelectorModal({
  open,
  onClose,
  initialLocation,
  onConfirm,
  currentAddress,
}: MapSelectorModalProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(initialLocation);
  const [addressText, setAddressText] = useState(currentAddress || "");
  const [addressComponents, setAddressComponents] = useState<AddressComponents>({
    streetAddress: "",
    stateArea: "",
    postalCode: "",
    formattedAddress: "",
  });

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Parse address components from geocoding result
  const parseAddressComponents = (results: google.maps.GeocoderResult[]): AddressComponents => {
    if (!results || results.length === 0) {
      return {
        streetAddress: "",
        stateArea: "",
        postalCode: "",
        formattedAddress: "",
      };
    }

    const result = results[0];
    let streetNumber = "";
    let route = "";
    let locality = "";
    let administrativeArea = "";
    let postalCode = "";

    (result.address_components ?? []).forEach((component) => {
      const types = component.types;
      if (types.includes("street_number")) {
        streetNumber = component.long_name;
      } else if (types.includes("route")) {
        route = component.long_name;
      } else if (types.includes("locality")) {
        locality = component.long_name;
      } else if (types.includes("administrative_area_level_1")) {
        administrativeArea = component.long_name;
      } else if (types.includes("postal_code")) {
        postalCode = component.long_name;
      }
    });

    const streetAddress = [streetNumber, route].filter(Boolean).join(", ");
    const stateArea = [locality, administrativeArea].filter(Boolean).join(", ");

    return {
      streetAddress: streetAddress || result.formatted_address.split(",")[0],
      stateArea: stateArea || "Malaysia",
      postalCode: postalCode,
      formattedAddress: result.formatted_address,
    };
  };

  // Initialize Google Maps
  useEffect(() => {
    if (!open) return;

    const initMap = async () => {
      try {
        // Wait for the ref to be set
        await new Promise((resolve) => setTimeout(resolve, 100));
        
        if (!mapRef.current) {
          console.error("Map ref not available");
          return;
        }

        // Load Google Maps API using shared loader
        const { loadGoogleMapsAPI } = await import("@/lib/google-maps-loader");
        await loadGoogleMapsAPI();

        if (!mapRef.current) {
          console.error("Map ref not available after API load");
          return;
        }

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: initialLocation || DEFAULT_MAP_CENTER,
          zoom: DEFAULT_MAP_ZOOM,
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "on" }],
            },
          ],
        });

        setMap(mapInstance);

        // Create draggable marker
        const markerInstance = new google.maps.Marker({
          position: initialLocation || DEFAULT_MAP_CENTER,
          map: mapInstance,
          draggable: true,
          icon: {
            url: "data:image/svg+xml;utf-8," + encodeURIComponent(`
              <svg width="28" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="13.842" cy="42.684" rx="8" ry="1.895" fill="#000" fill-opacity=".14"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.104 27.957C22.32 27.394 28 21.36 28 14c0-7.732-6.268-14-14-14S0 6.268 0 14c0 7.253 5.516 13.218 12.581 13.929a1.115 1.115 0 0 0-.002.073v13.15c0 .64.566 1.16 1.263 1.16.698 0 1.263-.52 1.263-1.16V27.957Z" fill="#EE4D2D"/>
              </svg>
            `),
            anchor: new google.maps.Point(14, 45),
          },
        });

        setMarker(markerInstance);

        // Update location when marker is dragged
        markerInstance.addListener("dragend", () => {
          const position = markerInstance.getPosition();
          if (position) {
            const newLocation = {
              lat: position.lat(),
              lng: position.lng(),
            };
            setSelectedLocation(newLocation);
            
            // Reverse geocode to get address
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: newLocation }, (results, status) => {
              if (status === "OK" && results) {
                const components = parseAddressComponents(results);
                setAddressText(components.formattedAddress);
                setAddressComponents(components);
              }
            });
          }
        });

        // Update location when map is clicked
        mapInstance.addListener("click", (e: google.maps.MapMouseEvent) => {
          if (e.latLng) {
            const newLocation = {
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            };
            setSelectedLocation(newLocation);
            markerInstance.setPosition(e.latLng);

            // Reverse geocode to get address
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: newLocation }, (results, status) => {
              if (status === "OK" && results) {
                const components = parseAddressComponents(results);
                setAddressText(components.formattedAddress);
                setAddressComponents(components);
              }
            });
          }
        });

        // Try to geocode the current address if provided
        if (currentAddress && currentAddress.trim()) {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address: currentAddress }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              const location = results[0].geometry.location;
              const newLocation = {
                lat: location.lat(),
                lng: location.lng(),
              };
              setSelectedLocation(newLocation);
              mapInstance.setCenter(newLocation);
              markerInstance.setPosition(newLocation);
              
              const components = parseAddressComponents(results);
              setAddressText(components.formattedAddress);
              setAddressComponents(components);
            }
          });
        }
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();

    return () => {
      marker?.setMap(null);
      setMarker(null);
    };
  }, [open]);

  const handleConfirm = () => {
    onConfirm(selectedLocation, addressComponents);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-selector-title"
      onClick={onClose}
    >
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 bg-white flex-col w-[800px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[90vh] flex shadow rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 shrink-0">
          <div className="flex-1">
            <h2 id="map-selector-title" className="text-lg font-medium text-black/87">
              Edit Location
            </h2>
            <p className="text-xs text-black/60 mt-1">{addressText || "Drag the marker to select your location"}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-4 border-0 bg-transparent text-black/60 text-2xl leading-none cursor-pointer hover:text-black/87"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 relative min-h-0">
          <div
            ref={mapRef}
            className="w-full h-full"
            style={{ background: "#e5e3df" }}
          />
          
          {/* Floating bubble with "Your address is here" - positioned above marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 pointer-events-none" style={{ marginTop: '-80px' }}>
            <div className="bg-[#ee4d2d] text-white text-xs px-3 py-1.5 rounded-md shadow-md whitespace-nowrap">
              Your address is here
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#ee4d2d]" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-black/10 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="[appearance:auto] cursor-pointer outline-0 justify-center items-center min-w-32 text-sm flex px-5 py-2.5 rounded-sm border-0 text-neutral-600 hover:opacity-90 hover:bg-stone-50 active:bg-neutral-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="[appearance:auto] cursor-pointer outline-0 justify-center items-center min-w-32 text-sm flex px-5 py-2.5 rounded-sm border-0 text-white bg-[#ee4d2d] hover:opacity-90 active:bg-[#ee4d2d]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
