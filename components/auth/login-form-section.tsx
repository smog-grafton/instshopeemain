"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "./auth-context";
import { loginWithEmailPassword, getGoogleAuthRedirectUrl } from "@/lib/api-client";

const BACKGROUND_IMAGE = "/images/auth/background.png";
const FACEBOOK_ICON = "/images/auth/facebook.png";
const GOOGLE_ICON = "/images/auth/google.png";

export function LoginFormSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: setAuthLoggedIn } = useAuth();
  const [loginKey, setLoginKey] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const canSubmit = Boolean(loginKey.trim() && password.trim());
  
  // Get redirect URL from query parameter
  const nextUrl = searchParams.get('next') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!canSubmit) return;
    setLoading(true);
    try {
      // For now we log in using email; later we can support username/phone lookup.
      const result = await loginWithEmailPassword(loginKey, password);
      const apiUser = result.user;
      setAuthLoggedIn({
        user: {
          id: apiUser.id,
          name: apiUser.name,
          username: apiUser.username ?? apiUser.email,
          avatarUrl: apiUser.avatarUrl ?? null,
          email: apiUser.email,
          role: apiUser.role,
          countryId: apiUser.countryId ?? null,
        },
      });
      
      // Redirect to next URL or home
      if (nextUrl && nextUrl !== '/') {
        // If nextUrl is external (seller portal), use window.location
        if (nextUrl.startsWith('http://') || nextUrl.startsWith('https://')) {
          window.location.href = nextUrl;
        } else {
          router.push(nextUrl);
        }
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError(err?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const url = getGoogleAuthRedirectUrl();
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  return (
    <div
      className="w-full min-h-screen sm:min-h-0"
      style={{ backgroundColor: "rgb(33, 142, 126)" }}
    >
      <div
        className="mx-auto flex min-h-[600px] w-full max-w-[1040px] items-center justify-center sm:justify-end bg-contain bg-center bg-no-repeat py-8 px-4 sm:py-0 sm:px-6"
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          minHeight: "min(600px, 100vh)",
        }}
      >
        <div className="flex w-full max-w-[1040px] justify-center sm:justify-end">
          <div className="hidden sm:block flex-1" aria-hidden />
          <div className="w-full max-w-[400px] flex justify-center">
            <div
              className="overflow-hidden rounded bg-white w-full max-w-[400px]"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 10px 0px",
                boxSizing: "border-box",
              }}
            >
              {/* Card header: Log In title + Log in with QR */}
              <div
                className="flex min-h-[80px] items-center justify-between box-border"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="flex w-full items-center justify-between px-4 sm:px-8 pt-6"
                  style={{ padding: "22px 30px" }}
                >
                  <div
                    className="max-w-[136px] shrink-0 text-[rgb(34,34,34)]"
                    style={{
                      color: "rgb(34, 34, 34)",
                      fontSize: "20px",
                    }}
                  >
                    Log In
                  </div>
                  <div className="ml-5 flex items-center justify-end">
                    <Link
                      href="/login/qr"
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
                      Log in with QR
                    </Link>
                    <Link
                      href="/login/qr"
                      className="inline-block h-10 w-10 bg-transparent no-underline"
                      aria-label="Log in with QR code"
                    >
                      <svg
                        width="40"
                        height="40"
                        fill="none"
                        className="h-10 w-10 overflow-hidden"
                        viewBox="0 0 40 40"
                        aria-hidden
                      >
                        <g clipPath="url(#qr-clip)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                            fill="#EE4D2D"
                          />
                          <path
                            d="M37 37H22.5v3H40V22.5h-3V37z"
                            fill="#EE4D2D"
                          />
                          <path
                            d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                            fill="#EE4D2D"
                          />
                          <path
                            fill="#fff"
                            d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                          />
                        </g>
                        <defs>
                          <clipPath id="qr-clip">
                            <path fill="#fff" d="M0 0h40v40H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div
                className="overflow-hidden px-4 sm:px-8 pb-8"
                style={{ padding: "0px 30px 30px" }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-0"
                >
                  <div className="mb-2.5">
                    <div
                      className="flex h-10 w-full items-center overflow-hidden rounded-sm border border-black/10 shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border"
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.14)",
                        borderRadius: "2px",
                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 0px 0px inset",
                        height: "40px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Phone number / Username / Email"
                        autoComplete="username"
                        name="loginKey"
                        maxLength={128}
                        value={loginKey}
                        onChange={(e) => setLoginKey(e.target.value)}
                        className="h-4 flex-1 border-0 bg-transparent px-3 py-3 text-sm outline-none text-black/80"
                        style={{
                          flex: "1 0 0%",
                          height: "16px",
                          padding: "12px",
                          font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                      />
                    </div>
                    <div
                      className="min-h-4 pt-1 text-xs text-[rgb(255,66,79)]"
                      aria-live="polite"
                      style={{ minHeight: "16px", padding: "4px 0px 0px" }}
                    >
                      {error}
                    </div>
                  </div>

                  <div className="mb-3.5">
                    <div
                      className="flex h-10 w-full items-center overflow-hidden rounded-sm border border-black/10 shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border"
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.14)",
                        borderRadius: "2px",
                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 0px 0px inset",
                        height: "40px",
                      }}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        maxLength={128}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-4 flex-1 border-0 bg-transparent px-3 py-3 text-sm outline-none text-black/80"
                        style={{
                          flex: "1 0 0%",
                          height: "16px",
                          padding: "12px",
                          font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((p) => !p)}
                        className="flex items-center border-0 bg-transparent p-0 pl-3 pr-4 outline-none cursor-pointer appearance-none text-black/80"
                        style={{
                          padding: "0px 15px 0px 12px",
                          font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 20 10"
                          className="h-2.5 w-5 overflow-hidden pt-1.5"
                          aria-hidden
                        >
                          <path
                            stroke="none"
                            fill="#000"
                            fillOpacity=".54"
                            d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.712a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className="min-h-4 pt-1 text-xs text-[rgb(255,66,79)]"
                      aria-live="polite"
                      style={{ minHeight: "16px", padding: "4px 0px 0px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit || loading}
                    className="flex h-10 w-full min-w-[140px] cursor-pointer items-center justify-center rounded-sm border-0 px-2.5 py-0 text-sm font-normal uppercase text-white outline-none disabled:cursor-not-allowed disabled:opacity-70"
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(238, 77, 45)",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 1px 1px 0px",
                      color: "rgb(255, 255, 255)",
                      height: "40px",
                      font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}
                  >
                    {loading ? "Logging in…" : "Log In"}
                  </button>
                </form>

                <div
                  className="my-2.5 flex justify-between"
                  style={{ margin: "10px 0px" }}
                >
                  <Link
                    href="/reset-password"
                    className="bg-transparent text-xs no-underline"
                    style={{
                      fontSize: "12px",
                      color: "rgb(0, 85, 170)",
                    }}
                  >
                    Forgot Password
                  </Link>
                </div>

                {/* OR divider */}
                <div className="uppercase">
                  <div
                    className="flex items-center pb-3.5"
                    style={{ paddingBottom: "14px" }}
                  >
                    <div
                      className="h-px flex-1 bg-[rgb(219,219,219)]"
                      style={{
                        backgroundColor: "rgb(219, 219, 219)",
                        flex: "1 1 0%",
                        width: "100%",
                        height: "1px",
                      }}
                    />
                    <span
                      className="px-4 text-xs uppercase text-[rgb(204,204,204)]"
                      style={{
                        color: "rgb(204, 204, 204)",
                        fontSize: "12px",
                        textTransform: "uppercase",
                      }}
                    >
                      or
                    </span>
                    <div
                      className="h-px flex-1 bg-[rgb(219,219,219)]"
                      style={{
                        backgroundColor: "rgb(219, 219, 219)",
                        flex: "1 1 0%",
                        width: "100%",
                        height: "1px",
                      }}
                    />
                  </div>

                  {/* Social login */}
                  <div
                    className="-mx-1.5 flex flex-wrap justify-between"
                    style={{ margin: "0px -5px" }}
                  >
                    <button
                      type="button"
                      disabled
                      title="Facebook login coming soon"
                      className="flex flex-1 items-center justify-center rounded-sm border border-black/10 bg-white px-2 py-0 text-sm text-black/40 outline-none cursor-not-allowed appearance-none"
                      style={{
                        flex: "1 1 0%",
                        margin: "5px",
                        paddingRight: "8px",
                        height: "40px",
                        padding: "0px 8px 0px 2px",
                        width: "100%",
                        font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm"
                        style={{ borderRadius: "1px" }}
                      >
                        <Image
                          src={FACEBOOK_ICON}
                          alt=""
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px] shrink-0"
                        />
                      </div>
                      <span className="ml-1">Facebook (coming soon)</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="flex flex-1 items-center justify-center rounded-sm border border-black/26 bg-white px-2 py-0 text-sm text-black/87 outline-none cursor-pointer appearance-none"
                      style={{
                        flex: "1 1 0%",
                        margin: "5px",
                        paddingRight: "8px",
                        height: "40px",
                        padding: "0px 8px 0px 2px",
                        width: "100%",
                        font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm"
                        style={{ borderRadius: "1px" }}
                      >
                        <Image
                          src={GOOGLE_ICON}
                          alt=""
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px] shrink-0"
                        />
                      </div>
                      <span className="ml-1">Google</span>
                    </button>
                  </div>
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
