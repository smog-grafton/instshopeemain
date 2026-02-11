"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { getUserProfile, uploadAvatar } from "@/lib/api-client";
import type { ApiUserProfile } from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";
import { isBackendImage } from "@/lib/utils";

const MAX_SIZE_BYTES = 1024 * 1024; // 1 MB
const ACCEPT_TYPES = ["image/jpeg", "image/png"];

export function ProfileAvatarUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userProfile, setUserProfile] = useState<ApiUserProfile | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { refreshUser } = useAuth();

  useEffect(() => {
    async function loadProfile() {
      try {
        const profile = await getUserProfile();
        setUserProfile(profile);
      } catch (err) {
        console.error("Failed to load user profile:", err);
      }
    }
    loadProfile();
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    setError(null);
    if (!file) return;
    if (!ACCEPT_TYPES.includes(file.type)) {
      setError("Please select a JPEG or PNG image.");
      return;
    }
    if (file.size > MAX_SIZE_BYTES) {
      setError("File size must be 1 MB or less.");
      return;
    }
    setUploading(true);
    try {
      const updatedUser = await uploadAvatar(file);
      setUserProfile((prev) =>
        prev ? { ...prev, avatarUrl: updatedUser.avatarUrl ?? null } : prev
      );
      await refreshUser();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const displayUsername = userProfile?.username ?? "User";
  const avatarUrl = userProfile?.avatarUrl ?? null;

  return (
    <div className="[border-left-style:solid] justify-center w-72 flex overflow-x-hidden overflow-y-hidden border-l border-l-zinc-100">
      <div className="flex-col items-center flex">
        <div
          className="justify-center items-center w-24 h-24 flex relative my-5 rounded-[50%] overflow-hidden bg-neutral-100"
          role="img"
          aria-label="Profile avatar"
        >
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={displayUsername}
              width={96}
              height={96}
              className="cursor-pointer bg-[50%] bg-no-repeat bg-cover w-full h-full rounded-[50%] object-cover"
              unoptimized={isBackendImage(avatarUrl)}
            />
          ) : (
            <div
              className="w-full h-full rounded-[50%] bg-zinc-200 animate-pulse"
              aria-hidden
            />
          )}
        </div>
        <input
          ref={fileInputRef}
          className="appearance-none leading-4 hidden"
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          aria-hidden
          onChange={handleFileChange}
          disabled={uploading}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-56 h-10 px-5 outline-0 text-neutral-600 bg-white relative shadow-sm border border-solid border-black/9 hover:bg-black/2 active:shadow-inner active:bg-black/2 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading…" : "Select Image"}
        </button>
        {error && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
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
