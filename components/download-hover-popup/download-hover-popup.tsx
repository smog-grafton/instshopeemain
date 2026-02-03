import Image from "next/image";

/** Default image paths for the download hover popup (can be overridden via props). */
const DEFAULT_QR_CODE = "/images/qr-code.png";
const DEFAULT_STORE_IMAGES = [
  { src: "/images/appstore.png", alt: "App Store" },
  { src: "/images/playstore.png", alt: "Play Store" },
  { src: "/images/app-gallery.png", alt: "App Gallery" },
] as const;

export interface DownloadHoverPopupProps {
  /** QR code image path. Defaults to /images/qr-code.png */
  qrCodeSrc?: string;
  /** Store badge images: [{ src, alt }]. Defaults to App Store, Play Store, App Gallery. */
  storeImages?: ReadonlyArray<{ src: string; alt: string }>;
  /** Optional className for the outer positioned wrapper. */
  className?: string;
  /** Optional id for aria-describedby on the trigger. */
  id?: string;
}

/**
 * Reusable download hover popup: QR code + app store icons.
 * Position the outer wrapper (e.g. absolute left-0 top-full) where the popup should appear.
 */
export function DownloadHoverPopup({
  qrCodeSrc = DEFAULT_QR_CODE,
  storeImages = DEFAULT_STORE_IMAGES,
  className = "",
  id,
}: DownloadHoverPopupProps) {
  return (
    <div
      id={id}
      role="tooltip"
      aria-hidden="false"
      className={`transition-[opacity,visibility] duration-200 delay-200 left-0 top-full z-[400] absolute ${className}`}
    >
      <div
        className="bg-white rounded-sm mt-2.5 p-0.5 w-[11.25rem] shadow-sm border border-black/5"
        style={{
          background: "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box",
          borderRadius: "2px",
          marginTop: "10px",
          padding: "2px",
          width: "11.25rem",
        }}
      >
        <Image
          src={qrCodeSrc}
          alt="download_qr_code"
          width={180}
          height={180}
          className="w-[11.25rem] h-[180px] border-0 object-cover"
          style={{ height: "180px", width: "11.25rem", border: "0px none rgb(255, 255, 255)" }}
        />
        <div
          className="flex flex-wrap items-center justify-between pt-1.5 px-4 pb-1.5"
          style={{
            flexWrap: "wrap",
            padding: "0px 15px 5px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {storeImages.map((store) => (
            <div
              key={store.alt}
              className="mt-1.5 w-[4.375rem]"
              style={{ marginTop: "5px", width: "4.375rem" }}
            >
              <Image
                src={store.src}
                alt={store.alt}
                width={70}
                height={24}
                className="w-full border-0"
                style={{ width: "100%", border: "0px none rgb(255, 255, 255)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
