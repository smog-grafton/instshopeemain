"use client";

import Link from "next/link";
import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BackArrowButton } from "./back-arrow-button";
import {
  PasswordValidationList,
  isPasswordValid,
} from "./password-validation";

const RESEND_COOLDOWN_SEC = 60;
const SUCCESS_GREEN = "rgb(0, 128, 0)";

type ResetStep = 1 | 2 | 3 | 4;

const inputBase =
  "flex h-10 w-full items-center overflow-hidden rounded-sm border border-black/10 shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border";
const btnPrimary =
  "flex h-10 w-full min-w-[140px] cursor-pointer items-center justify-center rounded-sm border-0 px-2.5 py-0 text-sm font-normal uppercase text-white outline-none disabled:cursor-not-allowed disabled:opacity-70";
const btnPrimaryStyle = {
  width: "100%",
  backgroundColor: "rgb(238, 77, 45)",
  boxShadow: "rgba(0, 0, 0, 0.09) 0px 1px 1px 0px",
  color: "rgb(255, 255, 255)",
  height: "40px",
  font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
} as const;

export function ResetPasswordSection() {
  const router = useRouter();
  const [step, setStep] = useState<ResetStep>(1);
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [emailDisplay, setEmailDisplay] = useState(""); // e.g. smoggrafton@gmail.com for step 2
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(0);
  const resendTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const canProceedStep1 = Boolean(phoneOrEmail.trim());
  const canProceedStep2 = code.replace(/\D/g, "").length === 6;
  const canProceedStep3 = isPasswordValid(password);

  const startResendCooldown = useCallback(() => {
    setResendSeconds(RESEND_COOLDOWN_SEC);
    if (resendTimerRef.current) clearInterval(resendTimerRef.current);
    resendTimerRef.current = setInterval(() => {
      setResendSeconds((s) => {
        if (s <= 1) {
          if (resendTimerRef.current) {
            clearInterval(resendTimerRef.current);
            resendTimerRef.current = null;
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      if (resendTimerRef.current) clearInterval(resendTimerRef.current);
    };
  }, []);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceedStep1) return;
    setEmailDisplay(phoneOrEmail.trim());
    setStep(2);
    setCode("");
    startResendCooldown();
  };

  const handleBackFromStep2 = () => {
    setStep(1);
    setCode("");
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceedStep2) return;
    setStep(3);
    setPassword("");
  };

  const handleBackFromStep3 = () => {
    setStep(2);
    setPassword("");
  };

  const handleResend = () => {
    if (resendSeconds > 0) return;
    startResendCooldown();
    // Simulate resend
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceedStep3) return;
    setStep(4);
    setTimeout(() => router.push("/login"), 2000);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(v);
  };

  return (
    <div className="mx-auto flex min-h-[600px] w-[1040px] items-center justify-center">
      {step === 1 && (
        <form onSubmit={handleStep1Submit} className="w-full max-w-[500px]">
          <div
            className="min-h-[275px] overflow-hidden rounded bg-white box-border"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "4px",
              boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 10px 0px",
              boxSizing: "border-box",
              width: "500px",
            }}
          >
            <div
              className="flex min-h-[80px] items-center justify-between box-border"
              style={{ boxSizing: "border-box" }}
            >
              <div
                className="flex w-full items-center box-border"
                style={{ boxSizing: "content-box", width: "100%" }}
              >
                <BackArrowButton
                  onClick={() => router.push("/login")}
                  aria-label="Back to login"
                />
                <div
                  className="flex flex-1 items-center justify-center pr-20"
                  style={{
                    color: "rgb(34, 34, 34)",
                    flex: "1 1 0%",
                    fontSize: "20px",
                    maxWidth: "calc(100% - 160px)",
                    paddingRight: "80px",
                  }}
                >
                  <div
                    className="truncate whitespace-nowrap overflow-hidden"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Reset Password
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden px-20 pb-16"
              style={{ padding: "0px 80px 64px" }}
            >
              <div className="my-5 mt-5">
                <div className={inputBase} style={{ height: "40px" }}>
                  <input
                    type="text"
                    placeholder="Email/Phone"
                    autoComplete="off"
                    name="phoneOrEmail"
                    maxLength={128}
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
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
                />
              </div>
              <button
                type="submit"
                disabled={!canProceedStep1}
                className={btnPrimary}
                style={btnPrimaryStyle}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      )}

      {step === 2 && (
        <div
          className="overflow-hidden rounded bg-white box-border"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 10px 0px",
            boxSizing: "border-box",
            width: "500px",
          }}
        >
          <div
            className="flex min-h-[80px] items-center justify-between box-border"
            style={{ boxSizing: "border-box" }}
          >
            <div
              className="flex w-full items-center box-border"
              style={{ boxSizing: "content-box", width: "100%" }}
            >
              <BackArrowButton onClick={handleBackFromStep2} />
              <div
                className="flex flex-1 justify-center pr-20"
                style={{
                  color: "rgb(34, 34, 34)",
                  flex: "1 1 0%",
                  fontSize: "20px",
                  maxWidth: "calc(100% - 160px)",
                  paddingRight: "80px",
                }}
              >
                <div
                  className="truncate whitespace-nowrap overflow-hidden"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Enter Verification Code
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleStep2Submit}>
            <div
              className="overflow-hidden px-20 pb-16"
              style={{ padding: "0px 80px 64px" }}
            >
              <div
                className="my-2.5 mt-2.5 text-center"
                style={{ margin: "10px 0px 8px" }}
              >
                Your verification code is sent via Email to
              </div>
              <div
                className="mt-2 flex justify-center"
                style={{ marginTop: "8px" }}
              >
                <div
                  className="mx-auto flex text-center text-base font-medium leading-6"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                >
                  {emailDisplay}
                </div>
              </div>
              <div
                className="my-2.5 flex justify-center"
                style={{ margin: "50px 0px 10px" }}
              >
                <div
                  className="flex flex-col items-center justify-center -mx-8 w-[310px]"
                  style={{ margin: "0px -32px", width: "310px" }}
                >
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    value={code}
                    onChange={handleCodeChange}
                    className="border-0 bg-transparent text-center outline-none text-black/80 font-normal"
                    style={{
                      borderRadius: "0px",
                      fontFamily: "Arial",
                      fontSize: "27px",
                      fontWeight: 400,
                      letterSpacing: "40px",
                      padding: "0px 0px 0px 42px",
                      width: "332px",
                      lineHeight: "normal",
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  />
                  <div
                    className="flex items-center justify-center w-full box-border"
                    style={{ boxSizing: "border-box" }}
                  >
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="border-t border-black/20 mr-5 last:mr-0 w-9 last:w-9"
                        style={{
                          borderTop: "1px solid rgba(0, 0, 0, 0.26)",
                          marginRight: i < 5 ? "20px" : "0px",
                          width: "35px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="min-h-[70px] text-center text-sm text-[rgb(255,66,79)]"
                style={{ color: "rgb(255, 66, 79)", fontSize: "14px" }}
              />
              <div
                className="mb-11 min-h-10 text-center text-black/87"
                style={{
                  color: "rgba(0, 0, 0, 0.87)",
                  marginBottom: "44px",
                  minHeight: "40px",
                }}
              >
                <div className="mb-1">
                  {resendSeconds > 0 ? (
                    <div className="text-black/26">
                      Please wait {resendSeconds} seconds to resend.
                    </div>
                  ) : (
                    <div>
                      Did not receive the code?{" "}
                      <button
                        type="button"
                        onClick={handleResend}
                        className="bg-transparent border-0 cursor-pointer p-0 text-[#ee4d2d] no-underline"
                      >
                        Resend
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={!canProceedStep2}
                className={btnPrimary}
                style={{ ...btnPrimaryStyle, marginBottom: "0px" }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <form
          onSubmit={handleStep3Submit}
          className="w-full max-w-[500px]"
        >
          <div
            className="overflow-hidden rounded bg-white box-border"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "4px",
              boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 10px 0px",
              boxSizing: "border-box",
              width: "500px",
            }}
          >
            <div
              className="flex min-h-[80px] items-center justify-between box-border"
              style={{ boxSizing: "border-box" }}
            >
              <div
                className="flex w-full items-center box-border"
                style={{ boxSizing: "content-box", width: "100%" }}
              >
                <BackArrowButton onClick={handleBackFromStep3} />
                <div
                  className="flex flex-1 justify-center pr-20"
                  style={{
                    color: "rgb(34, 34, 34)",
                    flex: "1 1 0%",
                    fontSize: "20px",
                    maxWidth: "calc(100% - 160px)",
                    paddingRight: "80px",
                  }}
                >
                  <div
                    className="truncate whitespace-nowrap overflow-hidden"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Set your password
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden px-20 pb-16"
              style={{ padding: "0px 80px 64px" }}
            >
              <div
                className="my-2.5 mt-2.5 text-center"
                style={{ marginBottom: "5px", marginTop: "10px" }}
              >
                Create a new password.
              </div>
              <div className="my-2.5 mt-6">
                <div
                  className={`flex h-10 w-full items-center overflow-hidden rounded-sm border shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border ${
                    password && !isPasswordValid(password)
                      ? "border-[rgb(255,66,79)]"
                      : "border-black/10"
                  }`}
                  style={{
                    border:
                      password && !isPasswordValid(password)
                        ? "1px solid rgb(255, 66, 79)"
                        : "1px solid rgba(0, 0, 0, 0.14)",
                    borderRadius: "2px",
                    height: "40px",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="new-password"
                    name="password"
                    maxLength={16}
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
                    className="flex items-center border-0 bg-transparent p-0 pl-3 pr-4 outline-none cursor-pointer"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 20 10"
                      className="h-2.5 w-5 pt-1.5"
                    >
                      <path
                        stroke="none"
                        fill="#000"
                        fillOpacity=".54"
                        d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <PasswordValidationList password={password} />
              <button
                type="submit"
                disabled={!canProceedStep3}
                className={`${btnPrimary} mt-6`}
                style={{ ...btnPrimaryStyle, marginTop: "25px" }}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      )}

      {step === 4 && (
        <div
          className="overflow-hidden rounded bg-white box-border px-20 py-12 text-center"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 10px 0px",
            boxSizing: "border-box",
            width: "500px",
            padding: "48px 80px",
          }}
        >
          <div
            className="text-lg font-medium"
            style={{ color: SUCCESS_GREEN, fontSize: "18px" }}
          >
            Password changed successfully.
          </div>
          <p className="mt-3 text-sm text-black/60">
            Redirecting you to log in…
          </p>
          <Link
            href="/login"
            className="mt-4 inline-block text-sm font-medium no-underline"
            style={{ color: "rgb(238, 77, 45)" }}
          >
            Log In now
          </Link>
        </div>
      )}
    </div>
  );
}
