import Image from "next/image";

interface FeatureBadgeProps {
  iconUrl: string;
  text: string;
}

export function FeatureBadge({ iconUrl, text }: FeatureBadgeProps) {
  return (
    <div
      className="text-zinc-800 whitespace-nowrap items-center flex mr-4 h-6 leading-6"
      tabIndex={0}
    >
      <Image
        className="align-baseline inline w-4 h-4 mr-1.5"
        src={iconUrl}
        alt=""
        width={16}
        height={16}
        role="presentation"
      />
      {text}
    </div>
  );
}
