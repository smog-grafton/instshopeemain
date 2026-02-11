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
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  Update Email
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Change the email address associated with your account.
                </div>
              </div>
              <div className="pt-8">
                <form onSubmit={handleSubmit}>
                  <table className="indent-[initial] border-zinc-500 border-spacing-0 w-[602px]">
                    <tbody>
                      <tr>
                        <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden text-neutral-600/80 pb-8">
                          <label>Current email</label>
                        </td>
                        <td className="w-96 pl-5 pb-8">
                          <div className="text-zinc-800 text-sm">{currentEmailMasked || "—"}</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
                          <label htmlFor="new-email">New email</label>
                        </td>
                        <td className="w-96 pl-5 pb-8">
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
                      <tr>
                        <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
                          <label></label>
                        </td>
                        <td className="w-96 pl-5 pb-8">
                          <div className="flex items-center gap-3">
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
