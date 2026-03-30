"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { UserDashboardLayout } from "@/components/user-dashboard";
import {
  PasswordValidationList,
  isPasswordValid,
} from "@/components/auth/password-validation";
import { changePassword } from "@/lib/api-client";

function PasswordField({
  id,
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  autoComplete: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-800">{label}</span>
      <div className="flex h-12 items-center rounded-xl border border-zinc-200 bg-white px-4 shadow-sm transition-colors focus-within:border-red-400">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full min-w-0 flex-1 border-0 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="ml-3 shrink-0 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-700"
          aria-label={visible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </label>
  );
}

export default function UserAccountPasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const passwordsMatch = useMemo(
    () => newPassword.length > 0 && newPassword === confirmPassword,
    [newPassword, confirmPassword]
  );
  const newPasswordIsValid = useMemo(
    () => isPasswordValid(newPassword),
    [newPassword]
  );
  const canSubmit =
    currentPassword.trim().length > 0 &&
    newPasswordIsValid &&
    passwordsMatch &&
    !saving;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!currentPassword.trim()) {
      setMessage({ type: "error", text: "Enter your current password to continue." });
      return;
    }

    if (!newPasswordIsValid) {
      setMessage({
        type: "error",
        text: "Your new password does not meet the required security rules.",
      });
      return;
    }

    if (!passwordsMatch) {
      setMessage({
        type: "error",
        text: "Your new password and confirmation do not match.",
      });
      return;
    }

    if (currentPassword === newPassword) {
      setMessage({
        type: "error",
        text: "Choose a new password that is different from your current password.",
      });
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const response = await changePassword({
        currentPassword,
        newPassword,
        passwordConfirmation: confirmPassword,
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setMessage({
        type: "success",
        text: response.message || "Password updated successfully.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Failed to update your password. Please try again.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <UserDashboardLayout>
      <div className="relative grow rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="px-4 pb-6 sm:px-6 lg:px-8">
          <div className="border-b border-zinc-100 py-5">
            <h1 className="text-lg font-medium leading-6 text-zinc-800">
              Change Password
            </h1>
            <p className="mt-1 text-sm leading-5 text-neutral-600">
              Keep your buyer account secure with a strong password that only you
              know.
            </p>
          </div>

          <div className="grid gap-6 py-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.85fr)]">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-zinc-100 bg-zinc-50/70 p-5 shadow-sm sm:p-6"
            >
              <div className="space-y-5">
                <PasswordField
                  id="current-password"
                  label="Current password"
                  value={currentPassword}
                  onChange={setCurrentPassword}
                  placeholder="Enter your current password"
                  autoComplete="current-password"
                />

                <div>
                  <PasswordField
                    id="new-password"
                    label="New password"
                    value={newPassword}
                    onChange={setNewPassword}
                    placeholder="Create a new password"
                    autoComplete="new-password"
                  />
                  <PasswordValidationList
                    password={newPassword}
                    className="mt-4 rounded-2xl border border-zinc-100 bg-white p-4"
                  />
                </div>

                <div>
                  <PasswordField
                    id="confirm-password"
                    label="Confirm new password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    placeholder="Re-enter your new password"
                    autoComplete="new-password"
                  />
                  {confirmPassword.length > 0 && !passwordsMatch && (
                    <p className="mt-2 text-sm text-red-600">
                      Password confirmation does not match.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex h-11 min-w-[150px] items-center justify-center rounded-full bg-red-500 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-zinc-300"
                >
                  {saving ? "Updating..." : "Update password"}
                </button>
                <Link
                  href="/user/account/profile"
                  className="text-sm font-medium text-sky-700 underline underline-offset-2 hover:text-sky-800"
                >
                  Back to profile
                </Link>
                {message && (
                  <p
                    className={`text-sm ${
                      message.type === "success" ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
              </div>
            </form>

            <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
              <h2 className="text-base font-semibold text-zinc-800">
                Security checklist
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Strong account settings reduce failed checkouts, unauthorized
                changes, and support delays.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                <li>Use a unique password for this account only.</li>
                <li>Avoid names, birthdays, and repeated number patterns.</li>
                <li>Update it immediately if you shared this device or browser.</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
