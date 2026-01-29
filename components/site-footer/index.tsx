import { FooterColumn } from "./footer-column";
import { PaymentLogos } from "./payment-logos";
import { SocialLinks } from "./social-links";
import { AppDownload } from "./app-download";
import { Copyright } from "./copyright";
import { mockFooterConfig } from "./data";

export function SiteFooter() {
  return (
    <div
      id="component"
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/54 bg-[rgb(251,251,251)]"
    >
      <div className="w-[75rem] m-auto">
        <div className="items-start w-full min-w-[1200px] flex -mx-1.5 p-1.5">
          {mockFooterConfig.columns.map((column, index) => (
            <FooterColumn key={index} column={column} />
          ))}
          <PaymentLogos
            paymentLogos={mockFooterConfig.paymentLogos}
            logisticsLogos={mockFooterConfig.logisticsLogos}
          />
          <SocialLinks links={mockFooterConfig.socialLinks} />
          <AppDownload
            qrCode={mockFooterConfig.appDownload.qrCode}
            appStoreBadges={mockFooterConfig.appDownload.appStoreBadges}
          />
        </div>
        <Copyright
          copyright={mockFooterConfig.copyright}
          countries={mockFooterConfig.countries}
        />
      </div>
    </div>
  );
}
