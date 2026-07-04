"use client";

import { useEffect, useState } from "react";
import { getUiBlocksSafe, resolveCountryIdForBrowser } from "@/lib/api-client";

const DEFAULT_AUTH_BACKGROUND_COLOR = "rgb(33, 142, 126)";

type AuthBackgroundPage = "login" | "register" | "shared";

const PAGE_KEYS: Record<AuthBackgroundPage, string> = {
  login: "auth_login_background",
  register: "auth_register_background",
  shared: "auth_background",
};

export function useAuthBackground(page: AuthBackgroundPage = "shared") {
  const [image, setImage] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_AUTH_BACKGROUND_COLOR);

  useEffect(() => {
    let active = true;

    async function loadBackground() {
      const countryId = await resolveCountryIdForBrowser();
      const [pageBlocks, sharedBlocks] = await Promise.all([
        getUiBlocksSafe({ key: PAGE_KEYS[page], country_id: countryId }),
        page === "shared" ? Promise.resolve([]) : getUiBlocksSafe({ key: PAGE_KEYS.shared, country_id: countryId }),
      ]);
      const block = pageBlocks[0] ?? sharedBlocks[0];
      if (!active) return;

      setImage(block?.imageSrc || null);
      setBackgroundColor(String(block?.meta?.backgroundColor || DEFAULT_AUTH_BACKGROUND_COLOR));
    }

    void loadBackground();

    return () => {
      active = false;
    };
  }, [page]);

  return { image, backgroundColor };
}
