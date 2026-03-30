"use client";

import Link from "next/link";

export function PrivacySettings() {
  return (
    <div className="w-full lg:ml-7 lg:w-[980px]">
      <div className="bg-white rounded-[2px] shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Header */}
        <h1 className="px-4 pb-4 pt-6 text-xl font-semibold text-black/80 sm:px-6">
          Privacy Settings
        </h1>
        <div className="h-px bg-black/6 w-full" aria-hidden />

        {/* Request Account Deletion row */}
        <div className="flex flex-col items-start justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center">
          <span className="text-sm text-black/80">Request Account Deletion</span>
          <Link
            href="/user/setting/privacy/delete"
            className="inline-flex w-full items-center justify-center rounded-[2px] bg-[rgb(238,77,45)] px-5 py-2.5 text-base font-normal text-white no-underline transition-colors hover:bg-[rgb(225,72,42)] md:w-auto"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
