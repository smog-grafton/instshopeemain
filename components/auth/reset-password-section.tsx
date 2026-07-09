"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { requestPasswordResetChallenge, resetPassword, sendPasswordResetLink } from "@/lib/api-client";
import { BackArrowButton } from "./back-arrow-button";
import { PasswordValidationList, isPasswordValid } from "./password-validation";

type Step = "email" | "verification" | "sent" | "password" | "success";

const inputClass = "h-12 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#ee4d2d] focus:ring-2 focus:ring-orange-100";
const buttonClass = "inline-flex h-12 w-full items-center justify-center rounded-md bg-[#ee4d2d] px-4 text-sm font-semibold uppercase text-white transition hover:bg-[#d94427] disabled:cursor-not-allowed disabled:opacity-60";

export function ResetPasswordSection() {
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("token") || "";
  const resetEmail = searchParams.get("email") || "";
  const [step, setStep] = useState<Step>(resetToken && resetEmail ? "password" : "email");
  const [email, setEmail] = useState(resetEmail);
  const [challengeId, setChallengeId] = useState("");
  const [displayCode, setDisplayCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailIsValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

  const generateChallenge = async () => {
    if (!emailIsValid || loading) return;
    setLoading(true);
    setError("");
    try {
      const response = await requestPasswordResetChallenge(email.trim());
      setEmail(email.trim());
      setChallengeId(response.challengeId);
      setDisplayCode(response.code);
      setEnteredCode("");
      setStep("verification");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to generate a verification code.");
    } finally {
      setLoading(false);
    }
  };

  const verifyChallenge = async () => {
    if (loading) return;
    if (enteredCode.trim().toUpperCase() !== displayCode.toUpperCase()) {
      setError("Code is incorrect.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await sendPasswordResetLink(email, challengeId, enteredCode.trim());
      setStep("sent");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to continue with password reset.");
    } finally {
      setLoading(false);
    }
  };

  const submitNewPassword = async () => {
    if (loading || !isPasswordValid(password)) return;
    if (password !== passwordConfirmation) {
      setError("Password and confirmation do not match.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await resetPassword({ email: resetEmail, token: resetToken, password, password_confirmation: passwordConfirmation });
      setStep("success");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to reset your password.");
    } finally {
      setLoading(false);
    }
  };

  const title = step === "verification" ? "Verification Code" : step === "sent" ? "Check Your Email" : step === "password" ? "Set New Password" : step === "success" ? "Password Updated" : "Reset Password";

  return (
    <main className="flex min-h-[calc(100vh-84px)] w-full items-start justify-center bg-neutral-50 px-4 py-8 sm:items-center sm:py-12">
      <section className="w-full max-w-md overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
        <header className="grid min-h-20 grid-cols-[48px_1fr_48px] items-center border-b border-neutral-100 px-4">
          {step === "email" || step === "success" ? (
            <BackArrowButton onClick={() => { window.location.href = "/login"; }} aria-label="Back to login" />
          ) : step === "verification" ? (
            <BackArrowButton onClick={() => { setStep("email"); setError(""); }} aria-label="Back" />
          ) : <span />}
          <h1 className="text-center text-xl font-semibold text-neutral-900">{title}</h1>
          <span />
        </header>

        <div className="p-5 sm:p-8">
          {step === "email" ? (
            <form onSubmit={(event) => { event.preventDefault(); void generateChallenge(); }} className="space-y-5">
              <div>
                <label htmlFor="reset-email" className="mb-2 block text-sm font-semibold text-neutral-700">Email address</label>
                <input id="reset-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className={inputClass} />
              </div>
              {error ? <ErrorMessage message={error} /> : null}
              <button type="submit" disabled={!emailIsValid || loading} className={buttonClass}>{loading ? "Please wait..." : "Continue"}</button>
            </form>
          ) : null}

          {step === "verification" ? (
            <form onSubmit={(event) => { event.preventDefault(); void verifyChallenge(); }} className="space-y-5">
              <p className="text-center text-sm leading-6 text-neutral-600">
                Your email <strong className="break-all text-neutral-900">{email}</strong> has been captured. Enter the verification code below to continue.
              </p>
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Verification Code</div>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-3xl font-black tracking-[0.18em] text-neutral-950">{displayCode}</span>
                  <button type="button" onClick={() => void generateChallenge()} disabled={loading} className="min-h-11 rounded-md border border-orange-300 bg-white px-3 text-sm font-semibold text-[#ee4d2d]">Regenerate Code</button>
                </div>
              </div>
              <div>
                <label htmlFor="reset-code" className="mb-2 block text-sm font-semibold text-neutral-700">Enter the code shown above</label>
                <input id="reset-code" value={enteredCode} onChange={(event) => setEnteredCode(event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6))} autoComplete="off" className={`${inputClass} text-center font-mono text-lg font-bold uppercase tracking-[0.25em]`} />
              </div>
              {error ? <ErrorMessage message={error} /> : null}
              <button type="submit" disabled={enteredCode.length !== 6 || loading} className={buttonClass}>{loading ? "Checking..." : "Continue"}</button>
            </form>
          ) : null}

          {step === "sent" ? (
            <div className="space-y-5 text-center">
              <SuccessIcon />
              <p className="text-sm leading-6 text-neutral-600">We sent a secure password-reset link to <strong className="break-all text-neutral-900">{email}</strong>. Open that link to choose a new password.</p>
              <p className="rounded-md bg-neutral-50 p-3 text-xs leading-5 text-neutral-500">The displayed code is a screen verification challenge; the emailed link protects ownership of your account.</p>
              <a href="/login" className={`${buttonClass} no-underline`}>Back to Login</a>
            </div>
          ) : null}

          {step === "password" ? (
            <form onSubmit={(event) => { event.preventDefault(); void submitNewPassword(); }} className="space-y-5">
              <p className="break-all text-center text-sm text-neutral-600">{resetEmail}</p>
              <div>
                <label htmlFor="new-password" className="mb-2 block text-sm font-semibold text-neutral-700">New password</label>
                <input id="new-password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" className={inputClass} />
              </div>
              <PasswordValidationList password={password} />
              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-semibold text-neutral-700">Confirm new password</label>
                <input id="confirm-password" type={showPassword ? "text" : "password"} value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} autoComplete="new-password" className={inputClass} />
              </div>
              <label className="flex min-h-11 items-center gap-2 text-sm text-neutral-600"><input type="checkbox" checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} />Show password</label>
              {error ? <ErrorMessage message={error} /> : null}
              <button type="submit" disabled={!isPasswordValid(password) || !passwordConfirmation || loading} className={buttonClass}>{loading ? "Updating..." : "Reset Password"}</button>
            </form>
          ) : null}

          {step === "success" ? (
            <div className="space-y-5 text-center">
              <SuccessIcon />
              <p className="text-sm leading-6 text-neutral-600">Your password has been updated. You can now sign in securely.</p>
              <a href="/login" className={`${buttonClass} no-underline`}>Log In</a>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return <div className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700" role="alert">{message}</div>;
}

function SuccessIcon() {
  return <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-700">✓</div>;
}
