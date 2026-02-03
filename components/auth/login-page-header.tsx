import Link from "next/link";
import Image from "next/image";

const HELP_URL = "https://help.shopee.com.my/my/s";

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
      <div
        className="mx-auto flex w-[1200px] items-center justify-between"
        style={{ margin: "0px auto", width: "1200px" }}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="bg-transparent text-[0px] no-underline"
            aria-label="Shopee Home"
          >
            <Image
              src="/images/svgs/header/logo-orange.svg"
              alt="Shopee"
              width={190}
              height={42}
              className="relative inline-block overflow-hidden -mr-[18px] -mt-2.5 w-[11.875rem] h-[42px]"
              priority
            />
          </Link>
          <div
            className="text-[rgb(34,34,34)]"
            style={{ color: "rgb(34, 34, 34)", fontSize: "24px" }}
          >
            {title}
          </div>
        </div>
        <a
          href={HELP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer bg-transparent no-underline mr-4"
          style={{
            color: "rgb(238, 77, 45)",
            fontSize: "14px",
            marginRight: "15px",
          }}
        >
          Need help?
        </a>
      </div>
    </nav>
  );
}
