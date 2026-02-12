import Image from "next/image";
import type { LogoItem } from "./data";
import { LogisticsLogos } from "./logistics-logos";

interface PaymentLogosProps {
  paymentLogos: LogoItem[];
  logisticsLogos: LogoItem[];
}

export function PaymentLogos({
  paymentLogos,
  logisticsLogos,
}: PaymentLogosProps) {
  return (
    <div className="w-full sm:w-48 md:w-64 p-1.5 min-w-0">
      <div className="text-xs font-bold mt-10 mb-5 text-black/87">PAYMENT</div>
      <ul className="flex-wrap list-none flex mb-4">
        {paymentLogos.map((logo, index) => (
          <li
            key={index}
            className="bg-white justify-center items-center w-16 h-8 flex overflow-x-hidden overflow-y-hidden shadow-sm mr-2 mb-2 p-1 rounded-sm"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-center justify-center items-center w-full h-full flex active:outline-0 hover:outline-0"
              href={logo.href}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={64}
                height={32}
                className="align-baseline inline max-h-full"
              />
            </a>
          </li>
        ))}
      </ul>
      <LogisticsLogos logos={logisticsLogos} />
    </div>
  );
}
