import Link from "next/link";
import Image from "next/image";

const HELP_URL = "/user/my-message";

export interface AuthPageHeaderProps {
  /** Page title shown next to logo, e.g. "Log In" or "Sign Up". */
  title?: string;
}

export function LoginPageHeader({ title = "Log In" }: AuthPageHeaderProps) {
  return (
    <nav
      className="relative flex items-center bg-white w-full"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 6px 6px 0px",
        height: "84px",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="bg-transparent text-[0px] no-underline"
            aria-label="Shopee Home"
          >
            <Image
              src="/images/svgs/header/logo-orange.svg"
              alt="Shopee"
              width={150}
              height={42}
              className="relative inline-block h-auto w-28 overflow-hidden sm:-mr-3 sm:-mt-2.5 sm:w-[9.375rem]"
              priority
            />
          </Link>
          <div className="whitespace-nowrap text-lg text-[rgb(34,34,34)] sm:text-2xl">
            {title}
          </div>
        </div>
        <a
          href={HELP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer whitespace-nowrap bg-transparent text-xs text-[#ee4d2d] no-underline sm:text-sm"
        >
          Need help?
        </a>
      </div>
    </nav>
  );
}
