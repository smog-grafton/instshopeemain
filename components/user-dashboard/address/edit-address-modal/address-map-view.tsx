"use client";

import { useEffect, useRef, useState } from "react";
import type { MapLocation } from "./types";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "./types";

interface AddressMapViewProps {
  location: MapLocation;
  onViewMapClick: () => void;
  /** Whether the map should be interactive (only when fields are filled) */
  isInteractive?: boolean;
}

/**
 * Small map preview shown in the edit address form.
 * Shows a Google Map with a marker at the specified location.
 */
export function AddressMapView({
  location,
  onViewMapClick,
  isInteractive = true,
}: AddressMapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const isMountedRef = useRef(true);

  // Initialize Google Maps
  useEffect(() => {
    if (!isInteractive) return;

    isMountedRef.current = true;
    let retryCount = 0;
    const maxRetries = 10;
    let timeoutId: NodeJS.Timeout | null = null;

    const initMap = async () => {
      // Check if component is still mounted
      if (!isMountedRef.current) {
        return;
      }

      // Wait for ref to be available
      if (!mapRef.current) {
        retryCount++;
        if (retryCount < maxRetries) {
          // Retry after a short delay
          timeoutId = setTimeout(initMap, 100);
          return;
        } else {
          console.error("Map ref is null after max retries");
          return;
        }
      }

      try {
        // Load Google Maps API using shared loader
        const { loadGoogleMapsAPI } = await import("@/lib/google-maps-loader");
        await loadGoogleMapsAPI();

        // Check if component is still mounted and ref is still available
        if (!isMountedRef.current || !mapRef.current) {
          return;
        }

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: location || DEFAULT_MAP_CENTER,
          zoom: DEFAULT_MAP_ZOOM,
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          gestureHandling: "none",
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        // Final check before setting state
        if (!isMountedRef.current) {
          return;
        }

        setMap(mapInstance);

        // Create marker
        const markerInstance = new google.maps.Marker({
          position: location || DEFAULT_MAP_CENTER,
          map: mapInstance,
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

        if (isMountedRef.current) {
          setMarker(markerInstance);
        }
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();

    return () => {
      isMountedRef.current = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (marker) {
        marker.setMap(null);
        setMarker(null);
      }
      if (map) {
        setMap(null);
      }
    };
  }, [isInteractive, location]);

  // Update map center and marker when location changes
  useEffect(() => {
    if (map && marker && location && isMountedRef.current) {
      try {
        map.setCenter(location);
        marker.setPosition(location);
      } catch (error) {
        console.error("Error updating map location:", error);
      }
    }
  }, [location, map, marker]);

  return (
    <div className="w-full flex">
      <div className="w-full">
        <div className="w-full h-32 relative group/0">
          <div className="min-h-24 w-full h-full absolute">
            {isInteractive ? (
              <div
                ref={mapRef}
                className="w-full h-full relative rounded-sm overflow-hidden"
                style={{ background: "#e5e3df" }}
              />
            ) : (
              <div className="w-full h-full relative bg-gray-50 flex items-center justify-center">
                <svg
                  viewBox="0 0 440 120"
                  preserveAspectRatio="xMidYMid slice"
                  className="align-baseline inline fill-none w-full h-full overflow-hidden"
                >
                  <g clipPath="url(#edit-address-clip0)">
                    <path d="M0 0h440v120H0z" className="fill-gray-50" />
                    <g filter="url(#edit-address-filter0_d)" className="stroke-gray-50">
                      <path strokeWidth="10" d="M-6.779-.48l123 61" />
                      <path strokeWidth="12" d="M11.524 124.548l30-67" />
                      <path strokeWidth="10" d="M-7.796 33.512l112 55" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="edit-address-clip0">
                      <path d="M0 0h440v120H0z" className="fill-white" />
                    </clipPath>
                    <filter
                      id="edit-address-filter0_d"
                      x="-14"
                      y="-21.892"
                      width="463.232"
                      height="165.869"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.964706 0 0 0 0 0.968627 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            )}
            <button
              type="button"
              onClick={onViewMapClick}
              disabled={!isInteractive}
              className="[appearance:auto] cursor-pointer bg-white justify-center items-center shadow-sm px-3 py-2 rounded-sm border border-solid border-black/9 capitalize absolute right-2.5 top-2.5 hover:bg-stone-50 disabled:text-neutral-200 disabled:cursor-not-allowed"
            >
              View Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
