/**
 * Google Maps JavaScript API type declarations.
 * Extends the Window interface to include the google maps namespace.
 */

declare global {
  interface Window {
    google?: typeof google;
  }

  namespace google {
    namespace maps {
      class Map {
        constructor(mapDiv: Element, opts?: MapOptions);
        setCenter(latlng: LatLng | LatLngLiteral): void;
        getCenter(): LatLng;
        setZoom(zoom: number): void;
        getZoom(): number;
        addListener(eventName: string, handler: Function): MapsEventListener;
      }

      class Marker {
        constructor(opts?: MarkerOptions);
        setMap(map: Map | null): void;
        setPosition(latlng: LatLng | LatLngLiteral): void;
        getPosition(): LatLng | undefined;
        addListener(eventName: string, handler: Function): MapsEventListener;
      }

      class LatLng {
        constructor(lat: number, lng: number);
        lat(): number;
        lng(): number;
      }

      class Point {
        constructor(x: number, y: number);
        x: number;
        y: number;
      }

      class Geocoder {
        geocode(
          request: GeocoderRequest,
          callback: (results: GeocoderResult[] | null, status: GeocoderStatus) => void
        ): void;
      }

      interface MapOptions {
        center?: LatLng | LatLngLiteral;
        zoom?: number;
        disableDefaultUI?: boolean;
        zoomControl?: boolean;
        mapTypeControl?: boolean;
        scaleControl?: boolean;
        streetViewControl?: boolean;
        rotateControl?: boolean;
        fullscreenControl?: boolean;
        gestureHandling?: string;
        styles?: MapTypeStyle[];
      }

      interface MarkerOptions {
        position?: LatLng | LatLngLiteral;
        map?: Map;
        draggable?: boolean;
        icon?: string | Icon | Symbol;
      }

      interface Icon {
        url: string;
        anchor?: Point;
        scaledSize?: Size;
      }

      interface Symbol {
        path: string | SymbolPath;
        fillColor?: string;
        fillOpacity?: number;
        scale?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
      }

      interface Size {
        width: number;
        height: number;
      }

      interface LatLngLiteral {
        lat: number;
        lng: number;
      }

      interface MapTypeStyle {
        featureType?: string;
        elementType?: string;
        stylers?: Array<{ [key: string]: string | number }>;
      }

      interface GeocoderRequest {
        location?: LatLng | LatLngLiteral;
        address?: string;
      }

      interface GeocoderAddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
      }

      interface GeocoderResult {
        formatted_address: string;
        geometry: {
          location: LatLng;
        };
        address_components?: GeocoderAddressComponent[];
      }

      interface MapMouseEvent {
        latLng: LatLng | null;
      }

      interface MapsEventListener {
        remove(): void;
      }

      enum SymbolPath {
        CIRCLE,
        FORWARD_CLOSED_ARROW,
        FORWARD_OPEN_ARROW,
        BACKWARD_CLOSED_ARROW,
        BACKWARD_OPEN_ARROW,
      }

      type GeocoderStatus = "OK" | "ZERO_RESULTS" | "OVER_QUERY_LIMIT" | "REQUEST_DENIED" | "INVALID_REQUEST" | "UNKNOWN_ERROR";
    }
  }
}

export {};
