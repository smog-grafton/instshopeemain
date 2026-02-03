"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { SIMULATED_BUYER } from "@/lib/auth";

const AUTH_STORAGE_KEY = "instshopee_buyer_auth";

export interface AuthUser {
  username: string;
  avatarUrl: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadStored(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(AUTH_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function setStored(loggedIn: boolean) {
  try {
    if (loggedIn) {
      window.sessionStorage.setItem(AUTH_STORAGE_KEY, "1");
    } else {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch {}
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(loadStored());
  }, []);

  const login = useCallback(() => {
    setStored(true);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setStored(false);
    setIsLoggedIn(false);
  }, []);

  const user: AuthUser | null = isLoggedIn
    ? {
        username: SIMULATED_BUYER.username,
        avatarUrl: SIMULATED_BUYER.avatarUrl,
        email: SIMULATED_BUYER.email,
      }
    : null;

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, login, logout }}
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
