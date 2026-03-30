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

export interface AuthUser {
  id: number;
  name: string;
  username: string;
  avatarUrl: string | null;
  email: string;
  role: string;
  countryId: number | null;
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

function mapApiUserToAuthUser(apiUser: ApiUser): AuthUser {
  return {
    id: apiUser.id,
    name: apiUser.name,
    username: apiUser.username ?? apiUser.email,
    avatarUrl: apiUser.avatarUrl ?? null,
    email: apiUser.email,
    role: apiUser.role,
    countryId: apiUser.countryId ?? null,
  };
}

function isUnauthenticatedError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const status = "status" in error ? (error as { status?: number }).status : undefined;
  const message = "message" in error ? String((error as { message?: string }).message || "") : "";

  return status === 401 || message.includes("Unauthenticated");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authResolved, setAuthResolved] = useState(false);
  const userRef = useRef<AuthUser | null>(null);

  useEffect(() => {
    userRef.current = user;
  }, [user]);

  const applyAuthenticatedUser = useCallback((apiUser: ApiUser) => {
    setUser(mapApiUserToAuthUser(apiUser));
    setIsLoggedIn(true);
  }, []);

  const clearAuthState = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
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
