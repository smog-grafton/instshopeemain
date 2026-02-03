"use client";

import Link from "next/link";

export function PrivacySettings() {
  return (
    <div className="w-[980px] ml-7">
      <div className="bg-white rounded-[2px] shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Header */}
        <h1 className="text-xl font-semibold text-black/80 px-6 pt-6 pb-4">
          Privacy Settings
        </h1>
        <div className="h-px bg-black/6 w-full" aria-hidden />

        {/* Request Account Deletion row */}
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <span className="text-sm text-black/80">Request Account Deletion</span>
          <Link
            href="/user/setting/privacy/delete"
            className="shrink-0 inline-block px-5 py-2.5 text-base font-normal text-white rounded-[2px] bg-[rgb(238,77,45)] hover:bg-[rgb(225,72,42)] no-underline transition-colors"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
