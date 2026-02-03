"use client";

import Image from "next/image";
import { useRef } from "react";
import { mockUserProfile } from "./data";

export function ProfileAvatarUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="[border-left-style:solid] justify-center w-72 flex overflow-x-hidden overflow-y-hidden border-l border-l-zinc-100">
      <div className="flex-col items-center flex">
        <div
          className="justify-center items-center w-24 h-24 flex relative my-5 rounded-[50%] overflow-hidden bg-neutral-100"
          role="img"
          aria-label="Profile avatar"
        >
          <Image
            src={mockUserProfile.avatarUrl}
            alt={mockUserProfile.username}
            width={96}
            height={96}
            className="cursor-pointer bg-[50%] bg-no-repeat bg-cover w-full h-full rounded-[50%] object-cover"
          />
        </div>
        <input
          ref={fileInputRef}
          className="appearance-none leading-4 hidden"
          type="file"
          accept=".jpg,.jpeg,.png"
          aria-hidden
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-56 h-10 px-5 outline-0 text-neutral-600 bg-white relative shadow-sm border border-solid border-black/9 hover:bg-black/2 active:shadow-inner active:bg-black/2 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87"
        >
          Select Image
        </button>
        <div className="mt-3">
          <div className="text-neutral-400 text-sm leading-5">
            File size: maximum 1 MB
          </div>
          <div className="text-neutral-400 text-sm leading-5">
            File extension: .JPEG, .PNG
          </div>
        </div>
      </div>
    </div>
  );
}
