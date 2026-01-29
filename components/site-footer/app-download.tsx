import Image from "next/image";
import type { LogoItem } from "./data";

interface AppDownloadProps {
  qrCode: string;
  appStoreBadges: LogoItem[];
}

export function AppDownload({ qrCode, appStoreBadges }: AppDownloadProps) {
  return (
    <div className="p-1.5 last:w-52">
      <div className="text-xs font-bold mt-10 mb-5 text-black/87">
        SHOPEE APP DOWNLOAD
      </div>
      <div className="w-full flex mb-4 hover:cursor-pointer">
        <a
          href="https://shopee.com.my/web"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline active:outline-0 hover:outline-0"
        >
          <Image
            src={qrCode}
            alt="download_qr_code"
            width={80}
            height={80}
            className="align-baseline inline bg-white w-20 h-20 shadow-sm mr-3 p-1 rounded-sm"
          />
        </a>
        <div className="align-top w-20 inline-block">
          {appStoreBadges.map((badge, index) => (
            <a
              key={index}
              href={badge.href || "https://shopee.com.my/web"}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline bg-white justify-center items-center w-16 h-4 flex shadow-sm mb-2 p-1 rounded-sm last:mb-0 active:outline-0 hover:outline-0"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={64}
                height={16}
                className="align-baseline inline max-h-full"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
