/**
 * Laravel API Client for InstShopee Main Platform
 * 
 * This client automatically includes country context in all API requests
 * based on the domain/header resolution from middleware.
 * 
 * Usage in Server Components:
 * ```ts
 * import { apiClient } from "@/lib/api/client";
 * import { getCountryContext } from "@/lib/country";
 * 
 * const country = await getCountryContext();
 * const products = await apiClient.get("/products", {}, country.code, country.domain);
 * ```
 */

const API_BASE_URL = (process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "").replace(/\/+$/, "");

export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
  success?: boolean;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    countryCode?: string,
    frontendDomain?: string
  ): Promise<ApiResponse<T>> {
    if (!this.baseURL) {
      throw {
        message: "NEXT_PUBLIC_LARAVEL_API_URL is not configured.",
        status: 500,
      } as ApiError;
    }

    const url = `${this.baseURL}${endpoint}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(typeof options.headers === "object" && !(options.headers instanceof Headers)
        ? (options.headers as Record<string, string>)
        : {}),
    };

    // Add country context headers for Laravel backend
    if (countryCode) {
      headers["X-Country-Code"] = countryCode;
    }
    if (frontendDomain) {
      headers["X-Frontend-Domain"] = frontendDomain;
    }

    // Add authentication token if available
    // const token = getAuthToken();
    // if (token) {
    //   headers.Authorization = `Bearer ${token}`;
    // }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw {
          message: data.message || "An error occurred",
          errors: data.errors,
          status: response.status,
        } as ApiError;
      }

      return data;
    } catch (error) {
      if (error && typeof error === "object" && "status" in error) {
        throw error;
      }
      throw {
        message: "Network error or server unavailable",
        status: 0,
      } as ApiError;
    }
  }

  /**
   * Get country context from headers (for server components)
   */
  private getCountryContext(): { countryCode?: string; frontendDomain?: string } {
    // This will be implemented to read from Next.js headers()
    // For now, return empty - will be set per request
    return {};
  }

  async get<T>(
    endpoint: string,
    options?: RequestInit,
    countryCode?: string,
    frontendDomain?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "GET",
    }, countryCode, frontendDomain);
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
    countryCode?: string,
    frontendDomain?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    }, countryCode, frontendDomain);
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
    countryCode?: string,
    frontendDomain?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    }, countryCode, frontendDomain);
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
    countryCode?: string,
    frontendDomain?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    }, countryCode, frontendDomain);
  }

  async delete<T>(
    endpoint: string,
    options?: RequestInit,
    countryCode?: string,
    frontendDomain?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "DELETE",
    }, countryCode, frontendDomain);
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export for custom instances if needed
export { ApiClient };
