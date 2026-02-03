"use client";

import Link from "next/link";
import Image from "next/image";

const BACKGROUND_IMAGE = "/images/auth/background.png";
const QR_IMAGE = "/images/qr-code.png";

export function LoginQrSection() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "rgb(33, 142, 126)" }}
    >
      <div
        className="mx-auto flex min-h-[600px] w-[1040px] items-center justify-end bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          height: "600px",
          minHeight: "600px",
          margin: "0px auto",
          width: "1040px",
        }}
      >
        <div className="flex w-full justify-between">
          <div className="flex flex-1 flex-col items-center justify-center" />
          <div>
            <div
              className="overflow-hidden rounded bg-white"
              style={{
                width: "400px",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 10px 0px",
                boxSizing: "border-box",
              }}
            >
              {/* Card header: Log in with QR + Log in with password */}
              <div
                className="flex min-h-[80px] items-center justify-between box-border"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="flex h-[59.5938px] w-full items-center justify-between px-8 pt-6"
                  style={{
                    height: "59.5938px",
                    padding: "22px 30px",
                    width: "100%",
                  }}
                >
                  <div
                    className="max-w-[136px] shrink-0 text-[rgb(34,34,34)]"
                    style={{
                      color: "rgb(34, 34, 34)",
                      fontSize: "20px",
                    }}
                  >
                    Log in with QR
                  </div>
                  <div className="ml-5 flex items-center justify-end">
                    <Link
                      href="/login"
                      className="relative mr-4 rounded-sm border-2 font-bold no-underline inline-block"
                      style={{
                        backgroundColor: "rgb(254, 250, 236)",
                        border: "2px solid rgb(255, 191, 0)",
                        borderRadius: "2px",
                        color: "rgb(255, 191, 0)",
                        fontSize: "14px",
                        padding: "11px 14px",
                      }}
                    >
                      Log in with password
                    </Link>
                    <Link
                      href="/login"
                      className="inline-block h-10 w-10 bg-transparent no-underline"
                      aria-label="Log in with password"
                    >
                      <svg
                        width="40"
                        height="40"
                        fill="none"
                        className="h-10 w-10 overflow-hidden"
                        viewBox="0 0 40 40"
                        aria-hidden
                      >
                        <g clipPath="url(#qr-pw-clip)">
                          <rect
                            x="1.5"
                            y="1.5"
                            width="37"
                            height="28"
                            rx="2.5"
                            stroke="#EE4D2D"
                            strokeWidth="3"
                          />
                          <path
                            stroke="#EE4D2D"
                            strokeWidth="3"
                            d="M22 38.5h11"
                          />
                          <path
                            stroke="#EE4D2D"
                            strokeWidth="10"
                            d="M21 29v9"
                          />
                          <path
                            fill="#fff"
                            d="M-12.28 0l43.933 43.933-22.72 22.72L-35 22.72z"
                          />
                          <path
                            d="M10.997 16.545l-2.76-.782.519-1.591 2.733 1.098-.176-3.067h1.723l-.176 3.129 2.663-1.081.519 1.608-2.813.783 1.846 2.338-1.397.993-1.6-2.567-1.582 2.479-1.397-.95 1.898-2.39zm8.156 0l-2.76-.782.52-1.591 2.732 1.098-.175-3.067h1.722l-.175 3.129 2.663-1.081.518 1.608-2.812.783 1.845 2.338-1.397.993-1.6-2.567-1.582 2.479-1.397-.95 1.898-2.39zm8.157 0l-2.76-.782.518-1.591 2.734 1.098-.176-3.067h1.723l-.176 3.129 2.663-1.081.519 1.608-2.813.783 1.846 2.338-1.398.993-1.6-2.567-1.581 2.479-1.398-.95 1.899-2.39z"
                            fill="#EE4D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="qr-pw-clip">
                            <path fill="#fff" d="M0 0h40v40H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* QR code + Scan text + How To Scan */}
              <div
                className="overflow-hidden px-8 pb-8"
                style={{ padding: "0px 30px 30px" }}
              >
                <div
                  className="relative flex flex-col items-center justify-center"
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="relative my-8 flex min-h-[180px] items-center justify-center mx-auto mb-8"
                    style={{
                      margin: "8px auto 30px",
                      minHeight: "180px",
                      position: "relative",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div className="relative">
                      <Image
                        src={QR_IMAGE}
                        alt="QR code for Shopee App"
                        width={180}
                        height={180}
                        className="h-[180px] w-[180px] object-contain opacity-100 transition-opacity duration-200"
                        style={{
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          height: "180px",
                          width: "180px",
                          opacity: 1,
                          transition: "opacity 0.2s",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="text-center text-black/87"
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      textAlign: "center",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Scan QR code with Shopee App
                  </div>
                  <button
                    type="button"
                    className="mt-8 border-0 bg-transparent cursor-pointer outline-none capitalize"
                    style={{
                      border: "0px none rgb(0, 85, 170)",
                      color: "rgb(0, 85, 170)",
                      cursor: "pointer",
                      fontSize: "16px",
                      marginTop: "30px",
                      outline: "rgb(0, 85, 170) none 0px",
                      textTransform: "capitalize",
                      appearance: "button",
                      overflow: "visible",
                      margin: "30px 0px 0px",
                    }}
                  >
                    How To Scan
                  </button>
                </div>
              </div>

              {/* Sign up prompt */}
              <div
                className="mb-8 flex w-full items-center justify-center text-sm text-black/26"
                style={{
                  marginBottom: "30px",
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.26)",
                  paddingRight: "4px",
                }}
              >
                New to Shopee?{" "}
                <Link
                  href="/register"
                  className="bg-transparent font-medium no-underline"
                  style={{
                    color: "rgb(238, 77, 45)",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
