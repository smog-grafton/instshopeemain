/**
 * Google Maps API loader utility.
 * Prevents multiple script loads and provides a single instance of the Google Maps API.
 */

let isLoading = false;
let isLoaded = false;
let loadPromise: Promise<void> | null = null;

/**
 * Load the Google Maps JavaScript API.
 * Only loads once, subsequent calls return the same promise.
 */
export async function loadGoogleMapsAPI(): Promise<void> {
  // If already loaded, return immediately
  if (isLoaded && window.google?.maps) {
    return Promise.resolve();
  }

  // If currently loading, return the existing promise
  if (isLoading && loadPromise) {
    return loadPromise;
  }

  // Start loading
  isLoading = true;
  loadPromise = new Promise<void>((resolve, reject) => {
    // Check if already loaded
    if (window.google?.maps) {
      isLoaded = true;
      isLoading = false;
      resolve();
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com/maps/api"]'
    );
    if (existingScript) {
      // Script exists, wait for it to load
      existingScript.addEventListener("load", () => {
        isLoaded = true;
        isLoading = false;
        resolve();
      });
      existingScript.addEventListener("error", (error) => {
        isLoading = false;
        reject(error);
      });
      return;
    }

    // Create and load the script
    const script = document.createElement("script");
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      isLoading = false;
      reject(new Error("Google Maps API key not found"));
      return;
    }

    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      isLoaded = true;
      isLoading = false;
      resolve();
    };

    script.onerror = (error) => {
      isLoading = false;
      reject(error);
    };

    document.head.appendChild(script);
  });

  return loadPromise;
}

/**
 * Check if Google Maps API is loaded.
 */
export function isGoogleMapsLoaded(): boolean {
  return isLoaded && !!window.google?.maps;
}
