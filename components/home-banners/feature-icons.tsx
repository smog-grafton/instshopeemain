import type { FeatureIcon } from "./data";

interface FeatureIconsProps {
  icons: FeatureIcon[];
}

export function FeatureIcons({ icons }: FeatureIconsProps) {
  return (
    <div className="bg-white justify-around w-[1200px] min-h-28 flex mt-2.5 mx-auto">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          className="active:outline-0 hover:outline-0"
        >
          <div className="hover:translate-y-[-0.0625rem] w-24">
            <div className="w-11 h-11 rounded-[50%] mt-5 mb-2 mx-auto">
              <div className="h-full relative">
                <div
                  className="h-full transition-opacity duration-200 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: `url(${icon.iconUrl})`,
                  }}
                />
              </div>
            </div>
            <div className="text-neutral-800 tracking-[0] text-center text-ellipsis [-webkit-line-clamp:2] [word-wrap:break-word] whitespace-pre-line max-w-36 text-sm leading-4 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2">
              {icon.label}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
