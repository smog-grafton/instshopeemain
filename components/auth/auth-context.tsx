"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
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
  /** Set logged-in user (session managed by cookies). */
  login: (payload: { user: AuthUser }) => void;
  logout: () => void;
  /** Refetch current user from API (e.g. after avatar update). */
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkedInitial, setCheckedInitial] = useState(false);

  useEffect(() => {
    // On first load, check if user has valid session cookie
    fetchCurrentUser()
      .then((res) => {
        const apiUser = res.user;
        const mapped: AuthUser = {
          id: apiUser.id,
          name: apiUser.name,
          username: apiUser.username ?? apiUser.email,
          avatarUrl: apiUser.avatarUrl ?? null,
          email: apiUser.email,
          role: apiUser.role,
          countryId: apiUser.countryId ?? null,
        };
        setUser(mapped);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setUser(null);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setCheckedInitial(true);
      });
  }, []);

  const login = useCallback((payload: { user: AuthUser }) => {
    setUser(payload.user);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    logoutApi().finally(() => {
      setUser(null);
      setIsLoggedIn(false);
    });
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetchCurrentUser();
      const apiUser = res.user;
      const mapped: AuthUser = {
        id: apiUser.id,
        name: apiUser.name,
        username: apiUser.username ?? apiUser.email,
        avatarUrl: apiUser.avatarUrl ?? null,
        email: apiUser.email,
        role: apiUser.role,
        countryId: apiUser.countryId ?? null,
      };
      setUser(mapped);
    } catch {
      // keep current user on refresh failure
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, refreshUser }}>
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
