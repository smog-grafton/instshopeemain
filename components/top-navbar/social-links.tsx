import type { SocialLink } from "./data";

interface SocialLinksProps {
  links: SocialLink[];
  spriteImageUrl: string;
}

export function SocialLinks({ links, spriteImageUrl }: SocialLinksProps) {
  return (
    <div className="text-white outline-0 text-sm font-light relative pl-1 py-1 flex focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-full focus-visible:before:h-full focus-visible:before:absolute focus-visible:before:pl-0 focus-visible:before:py-0 focus-visible:before:rounded-sm focus-visible:before:left-0 focus-visible:before:top-0 focus-visible:before:outline-black/87 hover:cursor-pointer hover:text-white/70">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
          className="no-underline bg-[url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/821f04b210432a71.png)] bg-size-[681.25%_356.25%] active:outline-0 hover:outline-0 text-left indent-[-9999px] w-4 h-4 inline-block overflow-x-hidden overflow-y-hidden mr-2.5 focus-visible:outline-0 focus-visible:shadow-sm focus-visible:rounded-[1px]"
          style={{
            backgroundPosition: link.bgPosition,
          }}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
