"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PolicyConfirmationModal } from "./policy-confirmation-modal";
import {
  PasswordValidationList,
  isPasswordValid,
} from "./password-validation";

const BACKGROUND_IMAGE = "/images/auth/background.png";
const FACEBOOK_ICON = "/images/auth/facebook.png";
const GOOGLE_ICON = "/images/auth/google.png";
const TERMS_URL = "https://help.shopee.com.my/portal/article/77215";
const PRIVACY_URL = "https://help.shopee.com.my/portal/article/77216";

type SignupStep = 1 | 2 | "success";

export function SignupFormSection() {
  const router = useRouter();
  const [step, setStep] = useState<SignupStep>(1);
  const [phone, setPhone] = useState("");
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const canProceedStep1 = Boolean(phone.trim());
  const emailsMatch = email.trim() === confirmEmail.trim();
  const canSubmitStep2 =
    Boolean(email.trim() && confirmEmail.trim() && password.trim()) &&
    emailsMatch &&
    isPasswordValid(password);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceedStep1) return;
    setPolicyModalOpen(true);
  };

  const handlePolicyAgree = () => {
    setPolicyModalOpen(false);
    setStep(2);
  };

  const handlePolicyCancel = () => {
    setPolicyModalOpen(false);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmitStep2) return;
    setSignupSuccess(true);
    setStep("success");
    // Brief confirmation then redirect
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <>
      <div className="w-full" style={{ backgroundColor: "rgb(33, 142, 126)" }}>
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
                {step === 1 ? (
                  <>
                    {/* Step 1: Phone + Next */}
                    <div
                      className="flex min-h-[80px] items-center justify-between box-border"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        className="flex w-full items-center justify-between px-8 pt-6"
                        style={{ padding: "22px 30px" }}
                      >
                        <div
                          className="max-w-[136px] shrink-0 text-[rgb(34,34,34)]"
                          style={{
                            color: "rgb(34, 34, 34)",
                            fontSize: "20px",
                          }}
                        >
                          Sign Up
                        </div>
                      </div>
                    </div>
                    <div
                      className="overflow-hidden px-8 pb-8"
                      style={{ padding: "0px 30px 30px" }}
                    >
                      <form onSubmit={handleNext}>
                        <div className="mb-2.5">
                          <div
                            className="flex h-10 w-full items-center overflow-hidden rounded-sm border border-black/10 shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border"
                            style={{
                              border: "1px solid rgba(0, 0, 0, 0.14)",
                              borderRadius: "2px",
                              boxShadow:
                                "rgba(0, 0, 0, 0.02) 0px 2px 0px 0px inset",
                              height: "40px",
                            }}
                          >
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              autoComplete="tel"
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
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
                            style={{
                              minHeight: "16px",
                              padding: "4px 0px 0px",
                            }}
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={!canProceedStep1}
                          className="flex h-10 w-full min-w-[140px] cursor-pointer items-center justify-center rounded-sm border-0 px-2.5 py-0 text-sm font-normal uppercase text-white outline-none disabled:cursor-not-allowed disabled:opacity-70 mb-8"
                          style={{
                            width: "100%",
                            backgroundColor: "rgb(238, 77, 45)",
                            boxShadow:
                              "rgba(0, 0, 0, 0.09) 0px 1px 1px 0px",
                            color: "rgb(255, 255, 255)",
                            height: "40px",
                            margin: "0px 0px 30px",
                            font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          }}
                        >
                          Next
                        </button>
                      </form>

                      {/* OR divider */}
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

                      {/* Social signup */}
                      <div
                        className="-mx-1.5 flex flex-wrap justify-between"
                        style={{ margin: "0px -5px" }}
                      >
                        <button
                          type="button"
                          className="flex flex-1 items-center justify-center rounded-sm border border-black/26 bg-white px-2 py-0 text-sm text-black/87 outline-none cursor-pointer appearance-none mx-1.5 my-1.5"
                          style={{
                            flex: "1 1 0%",
                            paddingRight: "8px",
                            height: "40px",
                            padding: "0px 8px 0px 2px",
                            width: "100%",
                            font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          }}
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm">
                            <Image
                              src={FACEBOOK_ICON}
                              alt=""
                              width={22}
                              height={22}
                              className="h-[22px] w-[22px] shrink-0"
                            />
                          </div>
                          <span className="ml-1">Facebook</span>
                        </button>
                        <button
                          type="button"
                          className="flex flex-1 items-center justify-center rounded-sm border border-black/26 bg-white px-2 py-0 text-sm text-black/87 outline-none cursor-pointer appearance-none mx-1.5 my-1.5"
                          style={{
                            flex: "1 1 0%",
                            paddingRight: "8px",
                            height: "40px",
                            padding: "0px 8px 0px 2px",
                            width: "100%",
                            font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          }}
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm">
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

                      {/* Terms */}
                      <div className="mt-4 text-center text-sm text-black/80">
                        By signing up, you agree to Shopee&apos;s{" "}
                        <a
                          href={TERMS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ee4d2d] no-underline bg-transparent"
                        >
                          Terms of Service
                        </a>{" "}
                        &amp;{" "}
                        <a
                          href={PRIVACY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ee4d2d] no-underline bg-transparent"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </>
                ) : step === "success" ? (
                  <>
                    <div
                      className="flex min-h-[80px] items-center justify-center box-border px-8 pt-6"
                      style={{ padding: "22px 30px" }}
                    >
                      <div
                        className="text-center text-lg font-medium"
                        style={{ color: "rgb(0, 128, 0)", fontSize: "18px" }}
                      >
                        Account created successfully. Redirecting…
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Step 2: Email, Confirm Email, Password (with validation), Sign Up */}
                    <div
                      className="flex min-h-[80px] items-center justify-between box-border"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        className="flex w-full items-center justify-between px-8 pt-6"
                        style={{ padding: "22px 30px" }}
                      >
                        <div
                          className="max-w-[136px] shrink-0 text-[rgb(34,34,34)]"
                          style={{
                            color: "rgb(34, 34, 34)",
                            fontSize: "20px",
                          }}
                        >
                          Sign Up
                        </div>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-sm text-black/60 cursor-pointer bg-transparent border-0 outline-none"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                    <div
                      className="overflow-hidden px-8 pb-8"
                      style={{ padding: "0px 30px 30px" }}
                    >
                      <form onSubmit={handleSignUpSubmit}>
                        <div className="mb-2.5">
                          <div
                            className="flex h-10 w-full items-center overflow-hidden rounded-sm border border-black/10 shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border"
                            style={{
                              border: "1px solid rgba(0, 0, 0, 0.14)",
                              borderRadius: "2px",
                              height: "40px",
                            }}
                          >
                            <input
                              type="email"
                              placeholder="Email"
                              autoComplete="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="h-4 flex-1 border-0 bg-transparent px-3 py-3 text-sm outline-none text-black/80"
                              style={{ padding: "12px" }}
                            />
                          </div>
                        </div>
                        <div className="mb-2.5">
                          <div
                            className={`flex h-10 w-full items-center overflow-hidden rounded-sm border shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border ${
                              confirmEmail && !emailsMatch
                                ? "border-[rgb(255,66,79)]"
                                : "border-black/10"
                            }`}
                            style={{
                              border:
                                confirmEmail && !emailsMatch
                                  ? "1px solid rgb(255, 66, 79)"
                                  : "1px solid rgba(0, 0, 0, 0.14)",
                              borderRadius: "2px",
                              height: "40px",
                            }}
                          >
                            <input
                              type="email"
                              placeholder="Confirm Email"
                              autoComplete="email"
                              name="confirmEmail"
                              value={confirmEmail}
                              onChange={(e) =>
                                setConfirmEmail(e.target.value)
                              }
                              className="h-4 flex-1 border-0 bg-transparent px-3 py-3 text-sm outline-none text-black/80"
                              style={{ padding: "12px" }}
                            />
                          </div>
                          {confirmEmail && !emailsMatch && (
                            <div
                              className="text-xs pt-1"
                              style={{
                                color: "rgb(255, 66, 79)",
                                padding: "4px 0 0",
                              }}
                            >
                              Emails do not match
                            </div>
                          )}
                        </div>
                        <div className="mb-3.5">
                          <div
                            className="flex h-10 w-full items-center overflow-hidden rounded-sm border shadow-[inset_0_2px_0_0_rgba(0,0,0,0.02)] box-border"
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="h-4 flex-1 border-0 bg-transparent px-3 py-3 text-sm outline-none text-black/80"
                              style={{ padding: "12px" }}
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword((p) => !p)
                              }
                              className="flex items-center border-0 bg-transparent p-0 pl-3 pr-4 outline-none cursor-pointer"
                              aria-label={
                                showPassword
                                  ? "Hide password"
                                  : "Show password"
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
                                  d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.712a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"
                                />
                              </svg>
                            </button>
                          </div>
                          <PasswordValidationList password={password} />
                        </div>
                        <button
                          type="submit"
                          disabled={!canSubmitStep2}
                          className="flex h-10 w-full min-w-[140px] cursor-pointer items-center justify-center rounded-sm border-0 px-2.5 py-0 text-sm font-normal uppercase text-white outline-none disabled:cursor-not-allowed disabled:opacity-70"
                          style={{
                            width: "100%",
                            backgroundColor: "rgb(238, 77, 45)",
                            boxShadow:
                              "rgba(0, 0, 0, 0.09) 0px 1px 1px 0px",
                            color: "rgb(255, 255, 255)",
                            height: "40px",
                            font: '14px Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          }}
                        >
                          Sign Up
                        </button>
                      </form>
                    </div>
                  </>
                )}

                {/* Have an account? Log In - hide on success */}
                {step !== "success" && (
                  <div
                    className="mb-8 flex w-full items-center justify-center text-sm text-black/26"
                    style={{
                      marginBottom: "30px",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.26)",
                      paddingRight: "4px",
                    }}
                  >
                    Have an account?{" "}
                    <Link
                      href="/login"
                      className="bg-transparent font-medium no-underline"
                      style={{
                        color: "rgb(238, 77, 45)",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PolicyConfirmationModal
        open={policyModalOpen}
        onCancel={handlePolicyCancel}
        onAgree={handlePolicyAgree}
      />
    </>
  );
}
