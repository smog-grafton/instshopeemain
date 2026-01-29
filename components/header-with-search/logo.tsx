import Image from "next/image";

export function Logo() {
  return (
    <a
      className="no-underline relative pr-10 top-[-0.1875rem] active:outline-0 hover:outline-0 focus:outline-0 focus-visible:before:content-[''] focus-visible:before:absolute focus-visible:before:rounded-sm focus-visible:before:border-2 focus-visible:before:border-solid focus-visible:before:left-0 focus-visible:before:right-10 focus-visible:before:-top-1 focus-visible:before:bottom-0 focus-visible:before:border-black/87"
      href="/"
    >
      <div className="-m-0.5 p-0.5 rounded-sm">
        <Image
          src="/images/svgs/header/logo-white.svg"
          alt="Shopee Logo"
          width={160}
          height={48}
          className="align-baseline relative overflow-x-hidden overflow-y-hidden w-40 h-12"
          priority
        />
      </div>
    </a>
  );
}
