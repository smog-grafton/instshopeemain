"use client";

import { useState, useRef } from "react";
import { createReview, uploadReviewMedia, type CreateReviewPayload } from "@/lib/api-client";

interface LeaveReviewModalProps {
  open: boolean;
  onClose: () => void;
  productSlug: string;
  onSuccess?: () => void;
}

export function LeaveReviewModal({
  open,
  onClose,
  productSlug,
  onSuccess,
}: LeaveReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [variation, setVariation] = useState("");
  const [username, setUsername] = useState("");
  const [mediaUrls, setMediaUrls] = useState<{ type: "image" | "video"; src: string; duration?: string; poster?: string }[]>([]);
  const [newMediaUrl, setNewMediaUrl] = useState("");
  const [newMediaType, setNewMediaType] = useState<"image" | "video">("image");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isLoggedIn =
    typeof window !== "undefined" &&
    !!(
      (typeof localStorage !== "undefined" && localStorage.getItem("auth_token")) ||
      (typeof sessionStorage !== "undefined" && sessionStorage.getItem("auth_token"))
    );

  const resetForm = () => {
    setRating(5);
    setComment("");
    setVariation("");
    setUsername("");
    setMediaUrls([]);
    setNewMediaUrl("");
    setError(null);
    setUploadError(null);
    setSuccessMessage(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const addMedia = () => {
    const src = newMediaUrl.trim();
    if (!src) return;
    setMediaUrls((prev) => [...prev, { type: newMediaType, src }]);
    setNewMediaUrl("");
    setUploadError(null);
  };

  const removeMedia = (index: number) => {
    setMediaUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setUploadError(null);
    setUploading(true);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isVideo = file.type.startsWith("video/");
      if (!file.type.startsWith("image/") && !isVideo) {
        setUploadError("Please select only images or videos.");
        continue;
      }
      if (file.size > 50 * 1024 * 1024) {
        setUploadError("File size must not exceed 50 MB.");
        continue;
      }
      try {
        const res = await uploadReviewMedia(file);
        setMediaUrls((prev) => [...prev, { type: res.type as "image" | "video", src: res.url }]);
      } catch (err) {
        setUploadError(err instanceof Error ? err.message : "Upload failed.");
      }
    }
    setUploading(false);
    e.target.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!comment.trim()) {
      setError("Please enter your comment.");
      return;
    }
    if (!isLoggedIn && !username.trim()) {
      setError("Please enter your display name (for guest reviews).");
      return;
    }
    setSubmitting(true);
    try {
      const payload: CreateReviewPayload = {
        rating,
        comment: comment.trim(),
        variation: variation.trim() || undefined,
        media: mediaUrls.length > 0 ? mediaUrls : undefined,
      };
      if (!isLoggedIn) {
        payload.username = username.trim();
      }
      const res = await createReview(productSlug, payload);
      setSuccessMessage(res.review?.message ?? "Review submitted. It will appear after approval.");
      setTimeout(() => {
        handleClose();
        onSuccess?.();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="leave-review-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <h2 id="leave-review-title" className="text-lg font-semibold text-black/87">
          Leave a review
        </h2>
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 rounded p-1 text-black/54 hover:bg-black/5 hover:text-black/87"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {successMessage ? (
          <p className="mt-4 text-green-600">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {error && (
              <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <div>
              <label className="block text-sm font-medium text-black/87">Rating</label>
              <div className="mt-1 flex gap-1">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRating(r)}
                    className={`rounded border p-1.5 ${
                      rating >= r
                        ? "border-red-500 bg-red-50 text-red-500"
                        : "border-black/20 bg-white text-black/54"
                    }`}
                    aria-label={`${r} star${r > 1 ? "s" : ""}`}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="leave-review-comment" className="block text-sm font-medium text-black/87">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="leave-review-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                maxLength={5000}
                className="mt-1 w-full rounded border border-black/20 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Share your experience with this product..."
                required
              />
              <span className="text-xs text-black/54">{comment.length}/5000</span>
            </div>

            <div>
              <label htmlFor="leave-review-variation" className="block text-sm font-medium text-black/87">
                Variation (optional)
              </label>
              <input
                id="leave-review-variation"
                type="text"
                value={variation}
                onChange={(e) => setVariation(e.target.value)}
                maxLength={255}
                className="mt-1 w-full rounded border border-black/20 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="e.g. 1PCS, Size M"
              />
            </div>

            {!isLoggedIn && (
              <div>
                <label htmlFor="leave-review-username" className="block text-sm font-medium text-black/87">
                  Display name <span className="text-red-500">*</span>
                </label>
                <input
                  id="leave-review-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={255}
                  className="mt-1 w-full rounded border border-black/20 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Your name (will be partially hidden)"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-black/87">Images & videos (optional)</label>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/webm,video/quicktime,video/x-msvideo"
                  multiple
                  className="hidden"
                  onChange={handleFileSelect}
                  aria-label="Upload image or video"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="rounded border border-red-500 bg-white px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50 disabled:opacity-50"
                >
                  {uploading ? "Uploading…" : "Upload image or video"}
                </button>
                <span className="text-xs text-black/54">or add URL:</span>
                <select
                  value={newMediaType}
                  onChange={(e) => setNewMediaType(e.target.value as "image" | "video")}
                  className="rounded border border-black/20 px-2 py-1.5 text-sm"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
                <input
                  type="url"
                  value={newMediaUrl}
                  onChange={(e) => setNewMediaUrl(e.target.value)}
                  placeholder="https://..."
                  className="flex-1 min-w-0 rounded border border-black/20 px-3 py-1.5 text-sm focus:border-red-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={addMedia}
                  className="rounded bg-black/10 px-3 py-1.5 text-sm font-medium text-black/87 hover:bg-black/20"
                >
                  Add URL
                </button>
              </div>
              {uploadError && (
                <p className="mt-1 text-xs text-red-600" role="alert">{uploadError}</p>
              )}
              {mediaUrls.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {mediaUrls.map((m, i) => (
                    <div
                      key={i}
                      className="relative flex h-20 w-20 shrink-0 overflow-hidden rounded border border-black/10 bg-black/5"
                    >
                      {m.type === "image" ? (
                        <img
                          src={m.src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <video
                          src={m.src}
                          className="h-full w-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => removeMedia(i)}
                        className="absolute right-0.5 top-0.5 rounded bg-black/60 p-0.5 text-white hover:bg-black/80"
                        aria-label="Remove"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="rounded border border-black/20 px-4 py-2 text-sm font-medium text-black/87 hover:bg-black/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 disabled:opacity-50"
              >
                {submitting ? "Submitting…" : "Submit review"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
