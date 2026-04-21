"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  type ApiUser,
  fetchCurrentUser,
  logoutApi,
} from "@/lib/api-client";
import { clearStoredAddress } from "@/lib/address-storage";
import { resolvePostAuthHref } from "@/lib/account-routing";

export interface AuthUser {
  id: number;
  name: string;
  username: string;
  avatarUrl: string | null;
  email: string;
  role: string;
  countryId: number | null;
  buyerPortalEnabled?: boolean;
  canAccessBuyerPortal?: boolean;
  isSeller?: boolean;
  sellerStatus?: "pending" | "approved" | "rejected" | "suspended" | null;
  prefersSellerPortal?: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  isLoggedIn: boolean;
  authResolved: boolean;
  /** Set logged-in user (session managed by cookies). */
  login: (payload: { user: AuthUser }) => void;
  logout: () => void;
  /** Refetch current user from API (e.g. after avatar update). */
  refreshUser: () => Promise<void>;
  /** Verify the current session cookie and update auth state if it expired. */
  verifySession: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function areAuthUsersEqual(a: AuthUser | null, b: AuthUser): boolean {
  if (!a) {
    return false;
  }

  return (
    a.id === b.id &&
    a.name === b.name &&
    a.username === b.username &&
    a.avatarUrl === b.avatarUrl &&
    a.email === b.email &&
    a.role === b.role &&
    a.countryId === b.countryId &&
    a.buyerPortalEnabled === b.buyerPortalEnabled &&
    a.canAccessBuyerPortal === b.canAccessBuyerPortal &&
    a.isSeller === b.isSeller &&
    a.sellerStatus === b.sellerStatus &&
    a.prefersSellerPortal === b.prefersSellerPortal
  );
}

function mapApiUserToAuthUser(apiUser: ApiUser): AuthUser {
  return {
    id: apiUser.id,
    name: apiUser.name,
    username: apiUser.username ?? apiUser.email,
    avatarUrl: apiUser.avatarUrl ?? null,
    email: apiUser.email,
    role: apiUser.role,
    countryId: apiUser.countryId ?? null,
    buyerPortalEnabled: apiUser.buyerPortalEnabled ?? false,
    canAccessBuyerPortal: apiUser.canAccessBuyerPortal ?? false,
    isSeller: apiUser.isSeller ?? false,
    sellerStatus: apiUser.sellerStatus ?? null,
    prefersSellerPortal: apiUser.prefersSellerPortal ?? false,
  };
}

function isUnauthenticatedError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const status = "status" in error ? (error as { status?: number }).status : undefined;
  const message = "message" in error ? String((error as { message?: string }).message || "") : "";

  return status === 401 || message.includes("Unauthenticated");
}

function isAbsoluteUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}

function buildCleanAuthUrl(): string {
  const url = new URL(window.location.href);

  ["auth", "status", "error", "next", "token"].forEach((key) => {
    url.searchParams.delete(key);
  });

  return `${url.pathname}${url.search}${url.hash}`;
}

function buildGoogleLoginUrl(error: string, nextUrl?: string | null): string {
  const url = new URL("/login", window.location.origin);

  if (error) {
    url.searchParams.set("error", error);
  }

  if (typeof nextUrl === "string" && nextUrl.trim()) {
    url.searchParams.set("next", nextUrl.trim());
  }

  return `${url.pathname}${url.search}${url.hash}`;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authResolved, setAuthResolved] = useState(false);
  const userRef = useRef<AuthUser | null>(null);
  const handledGoogleAuthRef = useRef<string | null>(null);

  useEffect(() => {
    userRef.current = user;
  }, [user]);

  const applyAuthenticatedUser = useCallback((apiUser: ApiUser) => {
    const nextUser = mapApiUserToAuthUser(apiUser);
    setUser((currentUser) =>
      areAuthUsersEqual(currentUser, nextUser) ? currentUser : nextUser
    );
    setIsLoggedIn(true);
  }, []);

  const clearAuthState = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    clearStoredAddress();
  }, []);

  const syncSession = useCallback(
    async ({ preserveOnUnknownFailure = true }: { preserveOnUnknownFailure?: boolean } = {}) => {
      try {
        const res = await fetchCurrentUser();
        applyAuthenticatedUser(res.user);
        return true;
      } catch (error) {
        if (isUnauthenticatedError(error) || !preserveOnUnknownFailure || !userRef.current) {
          clearAuthState();
          return false;
        }

        return true;
      } finally {
        setAuthResolved(true);
      }
    },
    [applyAuthenticatedUser, clearAuthState]
  );

  useEffect(() => {
    void syncSession({ preserveOnUnknownFailure: false });
  }, [syncSession]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const url = new URL(window.location.href);
    if (url.searchParams.get("auth") !== "google") {
      return undefined;
    }

    const signature = `${url.pathname}?${url.searchParams.toString()}`;
    if (handledGoogleAuthRef.current === signature) {
      return undefined;
    }
    handledGoogleAuthRef.current = signature;

    const nextUrl = url.searchParams.get("next");
    const error = url.searchParams.get("error");
    const cleanUrl = buildCleanAuthUrl();

    if (error) {
      clearAuthState();
      setAuthResolved(true);

      const loginUrl = buildGoogleLoginUrl(error, nextUrl);
      if (window.location.pathname === "/login") {
        window.history.replaceState({}, "", loginUrl);
      } else {
        window.location.replace(loginUrl);
      }

      return undefined;
    }

    let cancelled = false;

    const finalizeGoogleAuth = async () => {
      try {
        const res = await fetchCurrentUser();
        if (cancelled) return;

        applyAuthenticatedUser(res.user);
        setAuthResolved(true);

        const destination = resolvePostAuthHref(res.user, nextUrl);

        if (isAbsoluteUrl(destination)) {
          if (destination !== window.location.href) {
            window.location.replace(destination);
            return;
          }
        } else if (destination && destination !== cleanUrl) {
          window.location.replace(destination);
          return;
        }

        window.history.replaceState({}, "", cleanUrl);
      } catch {
        if (cancelled) return;

        clearAuthState();
        setAuthResolved(true);

        const loginUrl = buildGoogleLoginUrl(
          "Google sign-in could not be completed. Please try again.",
          nextUrl
        );

        if (window.location.pathname === "/login") {
          window.history.replaceState({}, "", loginUrl);
        } else {
          window.location.replace(loginUrl);
        }
      }
    };

    void finalizeGoogleAuth();

    return () => {
      cancelled = true;
    };
  }, [applyAuthenticatedUser, clearAuthState]);

  const login = useCallback((payload: { user: AuthUser }) => {
    setUser(payload.user);
    setIsLoggedIn(true);
    setAuthResolved(true);
  }, []);

  const logout = useCallback(() => {
    logoutApi().finally(() => {
      clearAuthState();
      setAuthResolved(true);
    });
  }, [clearAuthState]);

  const refreshUser = useCallback(async () => {
    await syncSession();
  }, [syncSession]);

  const verifySession = useCallback(async () => {
    return syncSession();
  }, [syncSession]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleUnauthorized = () => {
      clearAuthState();
      setAuthResolved(true);
    };

    window.addEventListener("instshopee:unauthenticated", handleUnauthorized);
    return () => {
      window.removeEventListener("instshopee:unauthenticated", handleUnauthorized);
    };
  }, [clearAuthState]);

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, authResolved, login, logout, refreshUser, verifySession }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
