# Edit Address Modal with Google Maps Integration

A comprehensive address editing component with integrated Google Maps for precise location selection.

## Features

- **Edit Address Form**: Full address editing with all fields (name, phone, state, postal code, unit number, street address)
- **Embedded Map Preview**: Small map preview that shows when address fields are filled
- **Full-Screen Map Selector**: Click "View Map" to open a larger, interactive map for precise location selection
- **Draggable Marker**: Drag the marker or click anywhere on the map to select a location
- **Reverse Geocoding**: Automatically gets the address from selected coordinates
- **Floating Labels**: Shopee-style floating labels that appear when fields have values
- **Label Selection**: Choose between "Home" and "Work" address labels
- **Default Address**: Option to set as default address (disabled for first address)

## Components

### 1. `EditAddressModal` (Main Component)
The main modal wrapper that displays the edit address form.

```tsx
import { EditAddressModal } from "@/components/user-dashboard/address/edit-address-modal";

<EditAddressModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  onSubmit={handleSubmit}
  isFirstAddress={false}
  initialValues={{
    region: "general",
    fullName: "Ahmad Firdaus Bin Rahman",
    phoneNumber: "(+60) 10 342 4534",
    stateArea: "Selangor, Shah Alam",
    postalCode: "40100",
    unitNo: "",
    streetAddress: "No. 18, Jalan Kristal 7/3",
    labelAs: "home",
    setAsDefault: true,
    location: {
      lat: 3.07563,
      lng: 101.48119,
    },
  }}
/>
```

### 2. `AddressMapView`
Small map preview shown in the form. Interactive only when key fields are filled.

```tsx
<AddressMapView
  location={{ lat: 3.07563, lng: 101.48119 }}
  onViewMapClick={() => setShowMapSelector(true)}
  isInteractive={true}
/>
```

### 3. `MapSelectorModal`
Full-screen map selector for precise location selection.

```tsx
<MapSelectorModal
  open={showMapSelector}
  onClose={() => setShowMapSelector(false)}
  initialLocation={{ lat: 3.07563, lng: 101.48119 }}
  onConfirm={(location, address) => {
    console.log("Selected location:", location);
    console.log("Address:", address);
  }}
  currentAddress="No. 18, Jalan Kristal 7/3"
/>
```

## Props

### EditAddressModal Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | Yes | Controls modal visibility |
| `onClose` | `() => void` | Yes | Called when modal is closed |
| `onSubmit` | `(values: EditAddressFormValues) => void` | Yes | Called when form is submitted |
| `isFirstAddress` | `boolean` | No | If true, "Set as Default" is disabled |
| `initialValues` | `EditAddressFormValues` | Yes | Initial form values for editing |

### EditAddressFormValues Type

```typescript
interface EditAddressFormValues {
  region: "MY" | "BN" | "general";
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo: string;
  streetAddress: string;
  labelAs: "home" | "work";
  setAsDefault: boolean;
  location?: {
    lat: number;
    lng: number;
  };
}
```

## Setup

### 1. Environment Variables

Add the Google Maps API key to your `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 2. Next.js Configuration

The `next.config.ts` has been updated to allow Google Maps domains:

```typescript
images: {
  remotePatterns: [
    // ... other patterns
    {
      protocol: "https",
      hostname: "maps.googleapis.com",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "maps.gstatic.com",
      pathname: "/**",
    },
  ],
}
```

### 3. TypeScript Declarations

Google Maps type declarations are available in `types/google-maps.d.ts`.

## Usage Examples

### Example 1: Basic Usage

```tsx
"use client";

import { useState } from "react";
import { EditAddressModal, type EditAddressFormValues } from "@/components/user-dashboard/address/edit-address-modal";

export function MyAddressPage() {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSubmit = (values: EditAddressFormValues) => {
    console.log("Submitted:", values);
    // Save to backend
    setShowEditModal(false);
  };

  return (
    <>
      <button onClick={handleEdit}>Edit Address</button>

      <EditAddressModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleSubmit}
        isFirstAddress={false}
        initialValues={{
          region: "general",
          fullName: "John Doe",
          phoneNumber: "+60123456789",
          stateArea: "Kuala Lumpur",
          postalCode: "50000",
          unitNo: "A-10-5",
          streetAddress: "Jalan Bukit Bintang",
          labelAs: "home",
          setAsDefault: true,
          location: {
            lat: 3.1478,
            lng: 101.6953,
          },
        }}
      />
    </>
  );
}
```

### Example 2: With Checkout Integration

See `components/checkout/checkout-address-book-modal.tsx` for a complete integration example.

## Map Behavior

### Small Map Preview (in form)
- **Shows when**: All required fields (name, phone, state, postal code, street address) are filled
- **Features**:
  - Static preview (non-draggable)
  - Shows marker at current location
  - "View Map" button to open full-screen selector

### Full-Screen Map Selector
- **Opens when**: User clicks "View Map" button
- **Features**:
  - Draggable marker
  - Click anywhere to move marker
  - Reverse geocoding to show address
  - "Your address is here" floating bubble
  - Zoom controls
  - Cancel/Confirm buttons

## Styling

The component uses Tailwind CSS with Shopee-specific styles:
- **Font**: Roboto, SHPBurmese, SHPKhmer family
- **Primary Color**: `#ee4d2d` (Shopee orange/red)
- **Border Radius**: Minimal (`rounded-sm`)
- **Shadows**: Subtle shadows for depth

## Google Maps Integration

The component loads the Google Maps JavaScript API dynamically:

```javascript
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
```

### Libraries Used
- **Core Maps API**: For map display and markers
- **Places API**: For geocoding and address lookup

## Accessibility

- **ARIA Labels**: All interactive elements have proper ARIA labels
- **Keyboard Navigation**: 
  - ESC to close modals
  - Tab navigation through form fields
  - Enter/Space for radio buttons
- **Screen Reader Support**: Proper semantic HTML and ARIA attributes

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Internet connection required for Google Maps

## Notes

1. **API Key**: Make sure your Google Maps API key has the following APIs enabled:
   - Maps JavaScript API
   - Geocoding API
   - Places API

2. **Map Loading**: The map loads dynamically on first use to optimize page load performance

3. **Location Data**: The `location` field in `EditAddressFormValues` is optional. If not provided, it defaults to Shah Alam, Malaysia (3.07563, 101.48119)

4. **Floating Labels**: Labels float to the top when the input has a value, matching Shopee's design

5. **Button Styling**: Buttons use `rounded-sm` for minimal rounding, and `[appearance:auto]` to ensure consistent styling

## Troubleshooting

### Map Not Loading
- Check if API key is set in `.env.local`
- Verify API key has required permissions
- Check browser console for errors

### Marker Not Showing
- Ensure location coordinates are valid
- Check if marker SVG is loading correctly
- Verify map instance is initialized

### Floating Labels Not Working
- Ensure input values are controlled by state
- Check if `floatingLabel` class is applied when value exists

## Future Enhancements

- [ ] Search/autocomplete for addresses
- [ ] Multiple location pins
- [ ] Street view integration
- [ ] Distance calculation
- [ ] Area restrictions (geofencing)
- [ ] Saved locations/favorites
