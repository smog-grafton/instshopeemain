"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { UserDashboardLayout } from "@/components/user-dashboard";
import { getUserProfile, updateProfile } from "@/lib/api-client";

export default function UserAccountEmailPage() {
  const [currentEmailMasked, setCurrentEmailMasked] = useState<string>("");
  const [newEmail, setNewEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const profile = await getUserProfile();
        setCurrentEmailMasked(profile.emailMasked ?? "");
      } catch {
        setCurrentEmailMasked("");
      }
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newEmail.trim();
    if (!trimmed) {
      setMessage({ type: "error", text: "Please enter a new email address." });
      return;
    }
    setSaving(true);
    setMessage(null);
    try {
      await updateProfile({ email: trimmed });
      setMessage({ type: "success", text: "Email updated successfully." });
      setNewEmail("");
      const profile = await getUserProfile();
      setCurrentEmailMasked(profile.emailMasked ?? "");
      setTimeout(() => setMessage(null), 3000);
    } catch (err: unknown) {
      const text = err instanceof Error ? err.message : "Failed to update email. Please try again.";
      setMessage({ type: "error", text });
    } finally {
      setSaving(false);
    }
  };

  return (
    <UserDashboardLayout>
      <div className="relative grow rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="px-4 pb-2.5 sm:px-6 lg:px-8">
              <div className="[border-bottom-style:solid] border-b border-b-zinc-100 py-5">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  Update Email
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Change the email address associated with your account.
                </div>
              </div>
              <div className="pt-8">
                <form onSubmit={handleSubmit}>
                  <table className="indent-[initial] block w-full max-w-[602px] border-spacing-0 border-zinc-500 lg:table">
                    <tbody className="block lg:table-row-group">
                      <tr className="block lg:table-row">
                        <td className="block overflow-x-hidden overflow-y-hidden pb-2 text-left text-neutral-600/80 lg:table-cell lg:min-w-[20%] lg:whitespace-nowrap lg:pb-8 lg:text-right">
                          <label>Current email</label>
                        </td>
                        <td className="block w-full pb-6 lg:table-cell lg:w-96 lg:pl-5 lg:pb-8">
                          <div className="text-zinc-800 text-sm">{currentEmailMasked || "—"}</div>
                        </td>
                      </tr>
                      <tr className="block lg:table-row">
                        <td className="block overflow-x-hidden overflow-y-hidden pb-2 text-left text-neutral-600/80 lg:table-cell lg:min-w-[20%] lg:whitespace-nowrap lg:pb-8 lg:text-right">
                          <label htmlFor="new-email">New email</label>
                        </td>
                        <td className="block w-full pb-6 lg:table-cell lg:w-96 lg:pl-5 lg:pb-8">
                          <div className="items-center w-full h-10 flex overflow-x-hidden overflow-y-hidden shadow-inner rounded-sm border border-solid border-black/14">
                            <input
                              id="new-email"
                              type="email"
                              placeholder="Enter new email address"
                              className="leading-4 outline-0 grow shrink-0 basis-[0%] p-3 border-0 placeholder:pl-[3px] placeholder:text-black/26 w-full"
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              autoComplete="email"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="block lg:table-row">
                        <td className="block overflow-x-hidden overflow-y-hidden pb-2 text-left text-neutral-600/80 lg:table-cell lg:min-w-[20%] lg:whitespace-nowrap lg:pb-8 lg:text-right">
                          <label></label>
                        </td>
                        <td className="block w-full pb-8 lg:table-cell lg:w-96 lg:pl-5">
                          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <button
                              type="submit"
                              disabled={saving}
                              className="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm shadow-sm rounded-sm border-0 inline-flex min-w-16 max-w-56 h-10 px-5 text-white outline-0 relative bg-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-disabled={saving}
                            >
                              {saving ? "Saving..." : "Save"}
                            </button>
                            <Link
                              href="/user/account/profile"
                              className="text-sm text-sky-700 underline outline-0 hover:text-sky-800"
                            >
                              Back to profile
                            </Link>
                            {message && (
                              <span
                                className={`text-sm ${
                                  message.type === "success" ? "text-green-600" : "text-red-600"
                                }`}
                              >
                                {message.text}
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
