import { normalizeBadgeList } from "@/lib/product-badges";

const API_BASE = `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/v1`;
const SANCTUM_BASE = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

export interface ApiUser {
  id: number;
  name: string;
  username: string | null;
  email: string;
  avatarUrl: string | null;
  role: string;
  countryId: number | null;
  phone?: string | null;
  gender?: "male" | "female" | "other" | null;
  dateOfBirth?: { date: number | null; month: number | null; year: number | null };
  buyerPortalEnabled?: boolean;
  canAccessBuyerPortal?: boolean;
  isSeller?: boolean;
  sellerStatus?: "pending" | "approved" | "rejected" | "suspended" | null;
  prefersSellerPortal?: boolean;
}

export interface AuthResponse {
  user: ApiUser;
  token?: string; // Optional for backward compatibility
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
  useAuth: boolean = false
): Promise<T> {
  const url = `${API_BASE}${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ...(options.headers || {}),
  };

  try {
    const res = await fetch(url, {
      ...options,
      headers,
      credentials: "include", // CRITICAL: Send session cookies
    });

    if (!res.ok) {
      let message = "Request failed";
      let errorData: any = null;
      try {
        errorData = (await res.json()) as any;
        if (errorData && typeof errorData.message === "string") {
          message = errorData.message;
        }
      } catch {
        // ignore parse errors
        message = `Request failed with status ${res.status}`;
      }
      
      // Handle specific status codes
      if (res.status === 429) {
        message = "Too many requests. Please try again later.";
      } else if (res.status === 401) {
        message = errorData?.message || "Unauthenticated";
        if (useAuth && typeof window !== "undefined") {
          window.dispatchEvent(new Event("instshopee:unauthenticated"));
        }
      }
      
      const error = new Error(message) as any;
      error.status = res.status;
      error.data = errorData;
      throw error;
    }

    return (await res.json()) as T;
  } catch (error) {
    // Handle network errors (Failed to fetch)
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      const networkError = new Error("Network error: Unable to reach the server. Please check if the API server is running.") as any;
      networkError.status = 0;
      networkError.isNetworkError = true;
      throw networkError;
    }
    // Re-throw if it's already an Error with status
    if (error instanceof Error && (error as any).status) {
      throw error;
    }
    // Other errors
    throw error;
  }
}

export interface UploadReviewMediaResponse {
  url: string;
  path: string;
  type: "image" | "video";
}

/** Upload a single image or video file for use in a product review. Returns the public URL to use in createReview media. */
export async function uploadReviewMedia(file: File): Promise<UploadReviewMediaResponse> {
  const url = `${API_BASE}/upload/review-media`;
  const formData = new FormData();
  formData.append("file", file);
  const type = file.type.startsWith("video/") ? "video" : "image";
  formData.append("type", type);

  const headers: HeadersInit = {};

  const res = await fetch(url, {
    method: "POST",
    body: formData,
    headers,
    credentials: "include", // Send session cookie
  });

  if (!res.ok) {
    let message = "Upload failed";
    try {
      const data = (await res.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  return res.json() as Promise<UploadReviewMediaResponse>;
}

export interface ChatThread {
  id: string;
  shopName: string;
  shopSlug?: string;
  avatarUrl?: string;
  lastMessage: string;
  lastMessageAt: string;
  unread: boolean;
  product?: {
    id?: number;
    title: string;
    image: string | null;
    price: string;
    originalPrice?: string | null;
    href?: string;
  };
  recentProducts?: {
    id?: number;
    title: string;
    image: string | null;
    price: string;
    originalPrice?: string | null;
    href?: string;
  }[];
}

export async function getChatThreads() {
  return apiFetch<{ success: boolean; threads: ChatThread[] }>("/chat/threads", {}, true);
}

export async function startChatThread(vendorId: number, productId?: number) {
  return apiFetch<{ success: boolean; thread: ChatThread }>(
    "/chat/threads/start",
    {
      method: "POST",
      body: JSON.stringify({ vendor_id: vendorId, product_id: productId }),
    },
    true
  );
}

export async function getChatMessages(threadId: string, afterId?: number) {
  const query = afterId ? `?after_id=${afterId}` : "";
  return apiFetch<{ success: boolean; messages: { id: string; text: string; sender_type: string; timestamp: string }[] }>(
    `/chat/threads/${threadId}/messages${query}`,
    {},
    true
  );
}

export async function sendChatMessage(threadId: string, message: string, productId?: number) {
  return apiFetch<{ success: boolean; message: { id: string; text: string; sender_type: string; timestamp: string } }>(
    `/chat/threads/${threadId}/send`,
    {
      method: "POST",
      body: JSON.stringify({ message, product_id: productId }),
    },
    true
  );
}

export async function setChatThreadProduct(threadId: string, productId: number) {
  return apiFetch<{ success: boolean; recent_products: ChatThread["recentProducts"] }>(
    `/chat/threads/${threadId}/product`,
    {
      method: "POST",
      body: JSON.stringify({ product_id: productId }),
    },
    true
  );
}

export async function loginWithEmailPassword(
  email: string,
  password: string
): Promise<AuthResponse> {
  // Step 1: Get CSRF cookie from Sanctum
  await fetch(`${SANCTUM_BASE}/sanctum/csrf-cookie`, {
    credentials: "include",
  });
  
  // Step 2: Login (session cookie set automatically by Laravel)
  return apiFetch<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function registerBuyer(input: {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}): Promise<AuthResponse> {
  // Get CSRF cookie before registration
  await fetch(`${SANCTUM_BASE}/sanctum/csrf-cookie`, {
    credentials: "include",
  });
  
  return apiFetch<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      password: input.password,
      password_confirmation: input.passwordConfirmation,
    }),
  });
}

export async function fetchCurrentUser(): Promise<{ user: ApiUser }> {
  return apiFetch<{ user: ApiUser }>("/auth/me", {}, true);
}

/** Returns stored auth token if any (e.g. from login). Session auth uses cookies so this may be null. */
export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token") ?? sessionStorage.getItem("auth_token") ?? null;
}

/** Upload avatar image; returns updated user. Do not set Content-Type (browser sets multipart boundary). */
export async function uploadAvatar(file: File): Promise<ApiUser> {
  const headers: HeadersInit = {};

  const formData = new FormData();
  formData.append("avatar", file);

  const res = await fetch(`${API_BASE}/auth/avatar`, {
    method: "POST",
    headers,
    body: formData,
    credentials: "include", // Send session cookie
  });

  if (!res.ok) {
    let message = "Upload failed";
    try {
      const data = (await res.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  const data = (await res.json()) as { user: ApiUser };
  return data.user;
}

export async function logoutApi(): Promise<void> {
  try {
    await apiFetch("/auth/logout", { method: "POST" }, true);
  } catch {
    // ignore logout errors
  }
  // Session cookie cleared by Laravel automatically
}

export function getGoogleAuthRedirectUrl(): string {
  return `${API_BASE}/auth/google/redirect`;
}

// Product types and functions
export interface ApiProduct {
  slug: string;
  title: string;
  shopId: string;
  shopSlug: string | null;
  shopName: string;
  categoryId?: number | null;
  categorySlug: string;
  price: number;
  originalPrice: number | null;
  currencyCode?: string;
  currencySymbol?: string;
  imageSrc: string;
  soldCount: number;
  rating: number;
  location: string;
  promotionLabel?: string | null;
  textBadges?: string[];
  imageBadges?: string[];
}

/** Product detail from GET /products/:slug – includes variants, images, specs. */
export interface ApiProductDetail extends ApiProduct {
  id?: number;
  description?: string | null;
  favoriteCount?: number;
  inStock?: boolean;
  /** Extra shipping from linked catalog product (wholesale centre), added at checkout. */
  catalogShippingFee?: number;
  shippingText?: string | null;
  shippingSubtext?: string | null;
  guaranteeText?: string | null;
  promotionEndsAt?: string | null;
  ratingsCount?: number;
  colors?: Array<{ label: string; imagePath: string | null }>;
  sizes?: string[];
  images?: Array<{ imagePath: string | null; imagePathWebp: string | null; isThumbnail: boolean }>;
  specifications?: Array<{
    label: string;
    value?: string | null;
    categoryBreadcrumbs?: unknown;
  }>;
}

export interface ApiProductsResponse {
  products: ApiProduct[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

function normalizeApiProduct<T extends ApiProduct>(product: T): T {
  return {
    ...product,
    textBadges: normalizeBadgeList(product.textBadges),
    imageBadges: normalizeBadgeList(product.imageBadges),
  };
}

function normalizeApiProductsResponse<T extends { products: ApiProduct[] }>(response: T): T {
  return {
    ...response,
    products: response.products.map((product) => normalizeApiProduct(product)),
  };
}

export async function getProductBySlug(slug: string): Promise<ApiProductDetail> {
  const response = await apiFetch<{ product: ApiProductDetail }>(`/products/${slug}`);
  return normalizeApiProduct(response.product);
}

export interface FavoriteResponse {
  message: string;
  favorited: boolean;
  favoriteCount: number;
}

export async function favoriteProduct(slug: string): Promise<FavoriteResponse> {
  return apiFetch<FavoriteResponse>(`/products/${slug}/favorite`, {
    method: "POST",
  }, true); // Use authentication
}

export async function unfavoriteProduct(slug: string): Promise<FavoriteResponse> {
  return apiFetch<FavoriteResponse>(`/products/${slug}/favorite`, {
    method: "DELETE",
  }, true); // Use authentication
}

export async function checkFavorite(slug: string): Promise<FavoriteResponse> {
  return apiFetch<FavoriteResponse>(`/products/${slug}/favorite/check`, {}, true); // Use authentication
}

export interface ApiProductReviewMedia {
  type: "image" | "video";
  src: string;
  duration?: string | null;
  poster?: string | null;
}

export interface ApiProductReview {
  id: string;
  username: string;
  rating: number;
  date: string;
  variation: string;
  attributes: Record<string, string> | string[];
  comment: string;
  media: ApiProductReviewMedia[];
  helpfulCount: number;
}

export interface ApiProductReviewsResponse {
  overallScore: number;
  reviews: ApiProductReview[];
  pagination?: { page: number; per_page: number; total: number; last_page: number };
}

export async function getProductReviews(slug: string, params?: {
  page?: number;
  per_page?: number;
}): Promise<ApiProductReviewsResponse> {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  const query = searchParams.toString();
  return apiFetch<ApiProductReviewsResponse>(`/products/${slug}/reviews${query ? `?${query}` : ""}`);
}

export interface CreateReviewPayload {
  rating: number;
  comment: string;
  variation?: string;
  attributes?: Record<string, string>;
  media?: Array<{ type: "image" | "video"; src: string; duration?: string; poster?: string }>;
  username?: string;
}

export interface CreateReviewResponse {
  review: { id: string; status: string; message: string };
}

/** Submit a product review (guest or authenticated). Uses auth token when available. */
export async function createReview(
  slug: string,
  payload: CreateReviewPayload
): Promise<CreateReviewResponse> {
  return apiFetch<CreateReviewResponse>(
    `/products/${slug}/reviews`,
    { method: "POST", body: JSON.stringify(payload) },
    true
  );
}

export async function getRelatedProducts(slug: string, params?: {
  type?: "same_shop" | "recommended";
  limit?: number;
}): Promise<{ products: ApiProduct[] }> {
  const searchParams = new URLSearchParams();
  if (params?.type) searchParams.set("type", params.type);
  if (params?.limit) searchParams.set("limit", String(params.limit));
  const query = searchParams.toString();
  const response = await apiFetch<{ products: ApiProduct[] }>(`/products/${slug}/related${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

export async function getProducts(params?: {
  category?: string;
  category_id?: number;
  shop?: string;
  page?: number;
  per_page?: number;
}): Promise<ApiProductsResponse> {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.set("category", params.category);
  if (params?.category_id) searchParams.set("category_id", String(params.category_id));
  if (params?.shop) searchParams.set("shop", params.shop);
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  const query = searchParams.toString();
  const response = await apiFetch<ApiProductsResponse>(`/products${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

// Categories API
export interface ApiCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  imagePath: string | null;
  url: string;
  parentId: number | null;
  parentName: string | null;
  productsCount: number;
  position: number;
}

export interface ApiCategoryDetail extends ApiCategory {
  children: ApiCategory[];
}

export interface ApiCategoriesResponse {
  categories: ApiCategory[];
}

export interface ApiCategoryProductsResponse {
  category: ApiCategory;
  products: ApiProduct[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

export interface CategoryFilterOptions {
  subcategories: Array<{ id: number; name: string; slug: string }>;
  brands: string[];
  shippingOptions: string[];
  servicePromotions: string[];
}

export interface CategoryFilterOptionsResponse {
  filterOptions: CategoryFilterOptions;
}

export async function getCategories(params?: {
  parent_id?: number | null;
  country_id?: number;
}): Promise<ApiCategoriesResponse> {
  const searchParams = new URLSearchParams();
  if (params?.parent_id !== undefined) {
    searchParams.set("parent_id", params.parent_id === null ? "null" : String(params.parent_id));
  }
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiCategoriesResponse>(`/categories${query ? `?${query}` : ""}`);
}

export async function getCategoryById(id: number): Promise<{ category: ApiCategoryDetail }> {
  return apiFetch<{ category: ApiCategoryDetail }>(`/categories/${id}`);
}

export async function getCategoryFilterOptions(
  id: number
): Promise<CategoryFilterOptionsResponse> {
  return apiFetch<CategoryFilterOptionsResponse>(`/categories/${id}/filter-options`);
}

export async function getCategoryProducts(
  id: number,
  params?: {
    page?: number;
    per_page?: number;
    min_price?: number;
    max_price?: number;
    rating?: number;
    subcategory_ids?: number[];
    brands?: string[];
    shipping_options?: string[];
    service_promotions?: string[];
  }
): Promise<ApiCategoryProductsResponse> {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.min_price) searchParams.set("min_price", String(params.min_price));
  if (params?.max_price) searchParams.set("max_price", String(params.max_price));
  if (params?.rating) searchParams.set("rating", String(params.rating));
  if (params?.subcategory_ids && params.subcategory_ids.length > 0) {
    searchParams.set("subcategory_ids", params.subcategory_ids.join(","));
  }
  if (params?.brands && params.brands.length > 0) {
    searchParams.set("brands", params.brands.join(","));
  }
  if (params?.shipping_options && params.shipping_options.length > 0) {
    searchParams.set("shipping_options", params.shipping_options.join(","));
  }
  if (params?.service_promotions && params.service_promotions.length > 0) {
    searchParams.set("service_promotions", params.service_promotions.join(","));
  }
  const query = searchParams.toString();
  const response = await apiFetch<ApiCategoryProductsResponse>(`/categories/${id}/products${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

// Shop types and functions
export interface ApiShopProfile {
  id: string;
  name: string;
  slug: string;
  status: string;
  profileImageUrl: string;
  coverImageUrl: string | null;
  isMall: boolean;
  /** ISO currency code for this shop (from seller account / vendor). */
  currencyCode?: string;
  /** Display symbol, e.g. $ or RM */
  currencySymbol?: string;
  stats: {
    products: number;
    followers: string;
    following: number;
    rating: string;
    ratingCount: string;
    chatPerformance: string;
    chatPerformanceNote: string;
    joined: string;
    /** Optional; backend may add. Use rating for display if absent. */
    ratings?: number | string;
    responseRate?: string | number;
    responseTime?: string;
  };
}

export interface ApiShopVoucher {
  id: string;
  title: string;
  description: string;
  tag?: string | null;
  validTill: string;
  claimLabel?: string | null;
  badgeCount?: number | null;
  usedPercent?: number | null;
  claimCount?: number | null;
}

export type ApiShopProductSort =
  | "popular"
  | "latest"
  | "top_sales"
  | "price_asc"
  | "price_desc";

export async function getShopBySlug(slug: string): Promise<ApiShopProfile> {
  const response = await apiFetch<{ shop: ApiShopProfile }>(`/shops/${slug}`);
  return response.shop;
}

export async function getShopProducts(
  slug: string,
  params?: { page?: number; per_page?: number; sort?: ApiShopProductSort }
): Promise<ApiProductsResponse> {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.sort) searchParams.set("sort", params.sort);
  const query = searchParams.toString();
  const response = await apiFetch<ApiProductsResponse>(`/shops/${slug}/products${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

export async function getShopVouchers(slug: string): Promise<ApiShopVoucher[]> {
  const response = await apiFetch<{ vouchers: ApiShopVoucher[] }>(`/shops/${slug}/vouchers`);
  return response.vouchers;
}

export interface ApiShopNavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ApiShopNavigation {
  mainTabs: ApiShopNavItem[];
  moreItems: ApiShopNavItem[];
}

export async function getShopNavigation(slug: string): Promise<ApiShopNavigation> {
  const response = await apiFetch<ApiShopNavigation>(`/shops/${slug}/navigation`);
  return response;
}

/** Whether the current session follows this shop (false if logged out). */
export async function getShopFollowStatus(slug: string): Promise<{ following: boolean }> {
  return apiFetch<{ following: boolean }>(`/shops/${encodeURIComponent(slug)}/follow`);
}

export async function followShop(slug: string): Promise<{ following: boolean; followersCount?: number }> {
  return apiFetch<{ following: boolean; followersCount?: number }>(
    `/shops/${encodeURIComponent(slug)}/follow`,
    { method: "POST" }
  );
}

export async function unfollowShop(slug: string): Promise<{ following: boolean; followersCount?: number }> {
  return apiFetch<{ following: boolean; followersCount?: number }>(
    `/shops/${encodeURIComponent(slug)}/follow`,
    { method: "DELETE" }
  );
}

export async function getShopCollectionProducts(
  slug: string,
  params?: {
    shopCollection?: string;
    limit?: number;
    page?: number;
    per_page?: number;
    sort?: ApiShopProductSort;
    keyword?: string;
  }
): Promise<{ products: ApiProduct[]; pagination?: ApiProductsResponse["pagination"] }> {
  const searchParams = new URLSearchParams();
  if (params?.shopCollection) searchParams.set("shopCollection", params.shopCollection);
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.sort) searchParams.set("sort", params.sort);
  if (params?.keyword) searchParams.set("keyword", params.keyword);
  const query = searchParams.toString();
  const response = await apiFetch<{ products: ApiProduct[]; pagination?: ApiProductsResponse["pagination"] }>(`/shops/${slug}/collection-products${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

export async function searchShopProducts(
  slug: string,
  params?: {
    keyword?: string;
    page?: number;
    per_page?: number;
    sort?: ApiShopProductSort;
    shopCollection?: string;
  }
): Promise<ApiProductsResponse> {
  const searchParams = new URLSearchParams();
  if (params?.keyword) searchParams.set("keyword", params.keyword);
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.sort) searchParams.set("sort", params.sort);
  if (params?.shopCollection) searchParams.set("shopCollection", params.shopCollection);
  const query = searchParams.toString();
  const response = await apiFetch<ApiProductsResponse>(`/shops/${slug}/search${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

// User dashboard types and functions
export interface ApiUserProfile {
  username: string;
  name: string;
  email: string;
  emailMasked: string;
  phoneNumber: string | null;
  avatarUrl: string | null;
  gender: "male" | "female" | "other" | null;
  dateOfBirth: { date: number | null; month: number | null; year: number | null };
}

export async function getUserProfile(): Promise<ApiUserProfile> {
  try {
    const { user } = await fetchCurrentUser();
    // Transform backend user to frontend profile format
    const emailMasked = user.email
      ? `${user.email.slice(0, 2)}${"*".repeat(Math.max(0, user.email.indexOf("@") - 2))}${user.email.slice(user.email.indexOf("@"))}`
      : "";
    
    // Extract dateOfBirth from user object (should be included in transformUser)
    const dateOfBirth = (user as any).dateOfBirth || { date: null, month: null, year: null };
    
    return {
      username: user.username || user.name,
      name: user.name,
      email: user.email,
      emailMasked,
      phoneNumber: (user as any).phone || null,
      avatarUrl: user.avatarUrl ?? null,
      gender: (user as any).gender || null,
      dateOfBirth,
    };
  } catch (error) {
    // Return default profile on error
    return {
      username: "",
      name: "",
      email: "",
      emailMasked: "",
      phoneNumber: null,
      avatarUrl: null,
      gender: null,
      dateOfBirth: { date: null, month: null, year: null },
    };
  }
}

// Mall stores
export interface ApiMallStore {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  href: string;
  kind?: "store" | "collection";
  secondaryText?: string;
}

export async function getMallStores(): Promise<ApiMallStore[]> {
  const response = await apiFetch<{ stores: ApiMallStore[] }>("/mall/stores");
  return response.stores;
}

export async function getMallHighlights(): Promise<ApiMallStore[]> {
  const response = await apiFetch<{ highlights: ApiMallStore[] }>("/mall/highlights");
  return response.highlights;
}

// Recommended products
export async function getRecommendedProducts(limit: number = 12): Promise<ApiProduct[]> {
  const response = await apiFetch<{ products: ApiProduct[] }>(`/products/recommended?limit=${limit}`);
  return response.products.map((product) => normalizeApiProduct(product));
}

// Address types and functions
export interface ApiAddress {
  id: string;
  region: string;
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo: string;
  streetAddress: string;
  labelAs: string;
  setAsDefault: boolean;
  city?: string;
  state?: string | null;
  countryId?: number | null;
  isTemplate?: boolean;
  sourceAddressId?: string | null;
  summaryLabel?: string;
}

export async function getAddresses(): Promise<ApiAddress[]> {
  try {
    const response = await apiFetch<{ addresses: ApiAddress[] }>("/addresses", {}, true);
    return response.addresses || [];
  } catch (error: any) {
    // If 401, user is not authenticated - return empty array silently
    if (error?.status === 401 || error?.message?.includes('Unauthenticated')) {
      return [];
    }
    console.error("Failed to fetch addresses:", error);
    // Return empty array on error (user might not be authenticated or have no addresses)
    return [];
  }
}

export async function getAddress(id: string): Promise<ApiAddress> {
  const response = await apiFetch<{ address: ApiAddress }>(`/addresses/${id}`, {}, true);
  return response.address;
}

export async function getShippingAddressTemplates(
  search?: string,
  limit: number = 1000
): Promise<ApiAddress[]> {
  const params = new URLSearchParams();
  params.set("limit", String(limit));

  if (search?.trim()) {
    params.set("search", search.trim());
  }

  try {
    const response = await apiFetch<{ addresses: ApiAddress[] }>(
      `/addresses/templates?${params.toString()}`,
      {},
      true
    );
    return response.addresses || [];
  } catch (error: any) {
    if (error?.status === 401 || error?.message?.includes("Unauthenticated")) {
      return [];
    }

    console.error("Failed to fetch shipping address templates:", error);
    return [];
  }
}

export async function createAddress(data: {
  full_name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postal_code?: string;
  is_default?: boolean;
  region?: string;
  label_as?: string;
}): Promise<ApiAddress> {
  const response = await apiFetch<{ address: ApiAddress }>("/addresses", {
    method: "POST",
    body: JSON.stringify(data),
  }, true);
  return response.address;
}

export async function updateAddress(id: string, data: Partial<{
  full_name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postal_code?: string;
  is_default?: boolean;
  region?: string;
  label_as?: string;
}>): Promise<ApiAddress> {
  const response = await apiFetch<{ address: ApiAddress }>(`/addresses/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  }, true);
  return response.address;
}

export async function deleteAddress(id: string): Promise<void> {
  await apiFetch(`/addresses/${id}`, { method: "DELETE" }, true);
}

// Payment method types and functions
export interface ApiPaymentMethod {
  key: string;
  name: string;
  type: "manual" | "automatic";
  logoUrl: string | null;
  config: Record<string, any>;
  enabledForDeposits: boolean;
  enabledForCheckout: boolean;
}

export interface ApiCheckoutConfig {
  shippingPercent: number;
  sellerCoversShipping: boolean;
}

export async function getBuyerWallet() {
  return apiFetch<{
    success: boolean;
    wallet: {
      balance: string;
      available_balance: string;
      pending_balance?: string;
      currency: string;
    };
  }>(
    "/wallet?scope=buyer",
    {},
    true,
  );
}

export async function getWalletDepositMethods() {
  return apiFetch<{ success: boolean; methods: Array<{ id: number; key: string; name: string; type: string; logo_url?: string | null; config?: Record<string, unknown> }> }>(
    "/wallet/deposit-methods?scope=buyer",
    {},
    true,
  );
}

export async function requestBuyerWalletTopup(data: {
  amount: number;
  payment_method_id: number;
  reference?: string;
  notes?: string;
  proof?: File | null;
}) {
  const form = new FormData();
  form.append("amount", String(data.amount));
  form.append("payment_method_id", String(data.payment_method_id));
  if (data.reference) form.append("reference", data.reference);
  if (data.notes) form.append("notes", data.notes);
  if (data.proof) form.append("proof", data.proof);
  form.append("scope", "buyer");
  const url = `${API_BASE}/wallet/topup/request`;
  const res = await fetch(url, {
    method: "POST",
    body: form,
    credentials: "include",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
  });
  const body = (await res.json()) as { message?: string; success?: boolean };
  if (!res.ok) {
    const err = new Error(body.message || "Top-up request failed") as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  return body;
}

export async function getPaymentMethods(): Promise<ApiPaymentMethod[]> {
  try {
    const response = await apiFetch<{ paymentMethods: ApiPaymentMethod[] }>("/payment-methods");
    return response.paymentMethods || [];
  } catch (error: any) {
    // Handle network errors, rate limiting (429), and other errors gracefully
    if (error?.isNetworkError) {
      console.error("Network error when fetching payment methods. Is the Laravel server running?", error);
    } else if (error?.status === 429) {
      console.warn("Rate limited when fetching payment methods. Using cached or empty list.");
    } else {
      console.error("Failed to fetch payment methods:", error);
    }
    // Return empty array on error - checkout can proceed without payment methods
    return [];
  }
}

export async function getCheckoutConfig(): Promise<ApiCheckoutConfig> {
  const response = await apiFetch<{ checkout: ApiCheckoutConfig }>("/checkout/config");

  return response.checkout;
}

// Currencies (for price formatting; rateToUsd is manual, no live data)
export interface ApiCurrency {
  id: string;
  code: string;
  name: string;
  symbol: string;
  rateToUsd: number;
  decimalPlaces: number;
}

export async function getCurrencies(): Promise<ApiCurrency[]> {
  const response = await apiFetch<{ currencies: ApiCurrency[] }>("/currencies");
  return response.currencies;
}

// Orders (checkout)
export interface PlaceOrderItemSnapshot {
  productSlug: string;
  title: string;
  imageSrc?: string | null;
  variation?: string | null;
  unitPrice: number;
  quantity: number;
}

export interface PlaceOrderAddressSnapshot {
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo?: string | null;
  streetAddress: string;
  labelAs?: string | null;
}

export interface PlaceOrderInput {
  items: PlaceOrderItemSnapshot[];
  address: PlaceOrderAddressSnapshot;
  paymentMethod: string;
  merchandiseSubtotal: number;
  shippingSubtotal: number;
  shippingDiscount: number;
  totalPayment: number;
}

export interface PlaceOrderResult {
  order: {
    id: string;
    orderNumber: string;
    status: string;
    items: PlaceOrderItemSnapshot[];
    address: PlaceOrderAddressSnapshot;
    paymentMethod: string;
    payments: Array<{ id: string; method: string; amount: number; status: string; providerRef?: string; createdAt: string }>;
    merchandiseSubtotal: number;
    shippingSubtotal: number;
    shippingDiscount: number;
    totalPayment: number;
    createdAt: string;
  };
  primaryPayment: { id: string; method: string; amount: number; status: string; providerRef?: string; createdAt: string };
}

export async function placeOrder(input: PlaceOrderInput): Promise<PlaceOrderResult> {
  return apiFetch<PlaceOrderResult>("/orders", {
    method: "POST",
    body: JSON.stringify(input),
  }, true);
}

// Search types and functions
export async function searchProducts(params: {
  keyword?: string;
  page?: number;
  per_page?: number;
  shipped_from?: string;
  shipping_option?: string;
  shop_type?: string;
  service_promotion?: string;
  category?: string;
  brand?: string;
  payment_option?: string;
  conditions?: string;
  rating?: string;
  min_price?: string;
  max_price?: string;
}): Promise<ApiProductsResponse> {
  const searchParams = new URLSearchParams();
  if (params.keyword) searchParams.set("keyword", params.keyword);
  if (params.page) searchParams.set("page", String(params.page));
  if (params.per_page) searchParams.set("per_page", String(params.per_page));
  if (params.shipped_from) searchParams.set("shipped_from", params.shipped_from);
  if (params.shipping_option) searchParams.set("shipping_option", params.shipping_option);
  if (params.shop_type) searchParams.set("shop_type", params.shop_type);
  if (params.service_promotion) searchParams.set("service_promotion", params.service_promotion);
  if (params.category) searchParams.set("category", params.category);
  if (params.brand) searchParams.set("brand", params.brand);
  if (params.payment_option) searchParams.set("payment_option", params.payment_option);
  if (params.conditions) searchParams.set("conditions", params.conditions);
  if (params.rating) searchParams.set("rating", params.rating);
  if (params.min_price) searchParams.set("min_price", params.min_price);
  if (params.max_price) searchParams.set("max_price", params.max_price);
  const query = searchParams.toString();
  const response = await apiFetch<ApiProductsResponse>(`/search${query ? `?${query}` : ""}`);
  return normalizeApiProductsResponse(response);
}

export interface AutocompleteSuggestion {
  type: "product" | "shop";
  keyword: string;
  href: string;
}

export interface AutocompleteResponse {
  suggestions: AutocompleteSuggestion[];
}

export async function searchAutocomplete(params: {
  keyword: string;
  limit?: number;
}): Promise<AutocompleteResponse> {
  const searchParams = new URLSearchParams();
  searchParams.set("keyword", params.keyword);
  if (params.limit) searchParams.set("limit", String(params.limit));
  return apiFetch<AutocompleteResponse>(`/search/autocomplete?${searchParams.toString()}`);
}

// Notification types and functions
export interface ApiNotification {
  id: string;
  type: string;
  title: string;
  message: string;
  orderId?: string;
  orderNumber?: string;
  status?: string;
  createdAt: string;
  read: boolean;
}

export async function getNotifications(type?: string): Promise<ApiNotification[]> {
  const searchParams = new URLSearchParams();
  if (type) searchParams.set("type", type);
  if (type === "wallet") searchParams.set("scope", "buyer");
  const query = searchParams.toString();
  const response = await apiFetch<{ notifications: ApiNotification[] }>(`/notifications${query ? `?${query}` : ""}`, {}, true);
  return response.notifications;
}

// Coins types and functions
export interface ApiCoinBalance {
  available: number;
  expiring: number;
  expiringDate: string | null;
}

export interface ApiCoinTransaction {
  id: string;
  type: "earned" | "spent" | "expired" | "refunded";
  amount: number;
  description: string;
  createdAt: string;
}

export async function getCoinsBalance(): Promise<ApiCoinBalance> {
  const response = await apiFetch<{ balance: ApiCoinBalance }>("/coins", {}, true);
  return response.balance;
}

export async function getCoinTransactions(params?: {
  page?: number;
  per_page?: number;
}): Promise<{ transactions: ApiCoinTransaction[]; pagination: any }> {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  const query = searchParams.toString();
  return apiFetch<{ transactions: ApiCoinTransaction[]; pagination: any }>(
    `/coins/transactions${query ? `?${query}` : ""}`,
    {},
    true
  );
}

// User Payment Methods types and functions
export interface ApiUserPaymentMethod {
  id: string;
  type: "card" | "bank_account";
  cardType?: "credit" | "debit";
  cardNumberLast4?: string;
  cardHolderName?: string;
  cardExpiryMonth?: number;
  cardExpiryYear?: number;
  bankName?: string;
  bankAccountNumber?: string;
  bankAccountHolder?: string;
  isDefault: boolean;
}

export async function getUserPaymentMethods(): Promise<ApiUserPaymentMethod[]> {
  const response = await apiFetch<{ paymentMethods: ApiUserPaymentMethod[] }>("/payment-methods/user", {}, true);
  return response.paymentMethods;
}

export async function createPaymentMethod(data: {
  type: "card" | "bank_account";
  card_type?: "credit" | "debit";
  card_number_last4?: string;
  card_holder_name?: string;
  card_expiry_month?: number;
  card_expiry_year?: number;
  bank_name?: string;
  bank_account_number?: string;
  bank_account_holder?: string;
  is_default?: boolean;
}): Promise<ApiUserPaymentMethod> {
  const response = await apiFetch<{ paymentMethod: ApiUserPaymentMethod }>("/payment-methods/user", {
    method: "POST",
    body: JSON.stringify(data),
  }, true);
  return response.paymentMethod;
}

export async function updatePaymentMethod(id: string, data: Partial<{
  card_holder_name?: string;
  card_expiry_month?: number;
  card_expiry_year?: number;
  bank_name?: string;
  bank_account_holder?: string;
  is_default?: boolean;
}>): Promise<ApiUserPaymentMethod> {
  const response = await apiFetch<{ paymentMethod: ApiUserPaymentMethod }>(`/payment-methods/user/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  }, true);
  return response.paymentMethod;
}

export async function deletePaymentMethod(id: string): Promise<void> {
  await apiFetch(`/payment-methods/user/${id}`, { method: "DELETE" }, true);
}

export async function setDefaultPaymentMethod(id: string): Promise<ApiUserPaymentMethod> {
  const response = await apiFetch<{ paymentMethod: ApiUserPaymentMethod }>(`/payment-methods/user/${id}/default`, {
    method: "PUT",
  }, true);
  return response.paymentMethod;
}

// Notification Preferences types and functions
export interface ApiNotificationPreferences {
  [channel: string]: {
    [category: string]: boolean;
  };
}

export async function getNotificationPreferences(): Promise<ApiNotificationPreferences> {
  const response = await apiFetch<{ preferences: ApiNotificationPreferences }>("/notification-preferences", {}, true);
  return response.preferences;
}

export async function updateNotificationPreferences(preferences: ApiNotificationPreferences): Promise<ApiNotificationPreferences> {
  const response = await apiFetch<{ preferences: ApiNotificationPreferences }>("/notification-preferences", {
    method: "PUT",
    body: JSON.stringify({ preferences }),
  }, true);
  return response.preferences;
}

export async function updateNotificationPreference(
  channel: string,
  category: string,
  enabled: boolean
): Promise<{ channel: string; category: string; enabled: boolean }> {
  const response = await apiFetch<{ preference: { channel: string; category: string; enabled: boolean } }>(
    `/notification-preferences/${channel}/${category}`,
    {
      method: "PUT",
      body: JSON.stringify({ enabled }),
    },
    true
  );
  return response.preference;
}

// Profile update functions
export async function updateProfile(data: {
  name?: string;
  email?: string | null;
  gender?: "male" | "female" | "other" | null;
  date?: number | null;
  month?: number | null;
  year?: number | null;
  phone?: string | null;
}): Promise<ApiUser> {
  const response = await apiFetch<{ user: ApiUser }>("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  }, true);
  return response.user;
}

export async function changePassword(data: {
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}): Promise<{ message: string }> {
  return apiFetch<{ message: string }>(
    "/auth/password",
    {
      method: "PUT",
      body: JSON.stringify({
        current_password: data.currentPassword,
        password: data.newPassword,
        password_confirmation: data.passwordConfirmation,
      }),
    },
    true
  );
}

// Vouchers with category filtering
export async function getVouchers(category?: string): Promise<{ vouchers: any[]; tabs: any[] }> {
  const searchParams = new URLSearchParams();
  if (category) searchParams.set("category", category);
  const query = searchParams.toString();
  return apiFetch<{ vouchers: any[]; tabs: any[] }>(`/vouchers${query ? `?${query}` : ""}`, {}, true);
}

/**
 * Map middleware country code to Laravel country id for ui-blocks and similar APIs.
 * DEFAULT (local dev) resolves to MY when present, else first active country.
 */
export async function resolveCountryIdFromCode(
  countryCode: string
): Promise<number | undefined> {
  try {
    const { countries } = await apiFetch<{
      countries: Array<{ id: number; code: string }>;
    }>("/countries");
    if (!countries?.length) return undefined;
    const normalized = countryCode === "DEFAULT" ? "MY" : countryCode;
    return (
      countries.find((c) => c.code === normalized)?.id ?? countries[0]?.id
    );
  } catch {
    return undefined;
  }
}

/**
 * Client components: map `window.location.host` via NEXT_PUBLIC_DOMAIN_COUNTRY_MAP
 * then resolve Laravel `country_id`. Prevents duplicate ui-blocks when multiple
 * countries are seeded (same key without country filter returns every row).
 */
export async function resolveCountryIdForBrowser(): Promise<
  number | undefined
> {
  if (typeof window === "undefined") return undefined;
  let code = "DEFAULT";
  try {
    const raw = process.env.NEXT_PUBLIC_DOMAIN_COUNTRY_MAP;
    if (raw) {
      const map = JSON.parse(raw) as Record<string, string>;
      code = map[window.location.host] || "DEFAULT";
    }
  } catch {
    /* ignore */
  }
  return resolveCountryIdFromCode(code);
}

// UI Blocks types and functions
export interface ApiUiBlock {
  id: number;
  key: string;
  title?: string | null;
  subtitle?: string | null;
  label?: string | null;
  imageSrc: string | null;
  href: string;
  categorySlug?: string | null;
  meta?: Record<string, any>;
}

export async function getUiBlocks(params?: {
  key?: string;
  country_id?: number;
}): Promise<ApiUiBlock[]> {
  const searchParams = new URLSearchParams();
  if (params?.key) searchParams.set("key", params.key);
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  const response = await apiFetch<{ blocks: ApiUiBlock[] }>(`/ui-blocks${query ? `?${query}` : ""}`);
  return response.blocks;
}

/** Like getUiBlocks but returns [] on failure (e.g. backend unavailable). Use for optional UI. */
export async function getUiBlocksSafe(params?: {
  key?: string;
  country_id?: number;
}): Promise<ApiUiBlock[]> {
  try {
    return await getUiBlocks(params);
  } catch {
    return [];
  }
}

/** New User Zone — /m/welcome-series (image promos + interactive voucher cards) */
export interface ApiWelcomePerkCard {
  leftTitle: string | null;
  discountText: string | null;
  minSpendText: string | null;
  pillText: string | null;
  validityText: string | null;
  termsUrl: string | null;
  topBadgeText: string | null;
  logoUrl: string | null;
  ctaLabel: string;
  ctaUrl: string | null;
}

export interface ApiWelcomePerk {
  id: number;
  kind: "image_banner" | "interactive";
  sortOrder: number;
  linkUrl: string | null;
  bannerImageUrl?: string | null;
  card?: ApiWelcomePerkCard | null;
}

export async function getWelcomePerks(): Promise<ApiWelcomePerk[]> {
  const response = await apiFetch<{ perks: ApiWelcomePerk[] }>("/welcome-perks", {
    cache: "no-store",
  });
  return response.perks;
}

export async function getWelcomePerksSafe(): Promise<ApiWelcomePerk[]> {
  try {
    return await getWelcomePerks();
  } catch {
    return [];
  }
}

// Skinny Banner
export interface ApiSkinnyBanner {
  imageUrl: string | null;
  imageUrl2x: string | null;
  webpUrl: string | null;
  webpUrl2x: string | null;
  alt: string;
  links: Array<{ href: string }>;
}

export async function getSkinnyBanner(params?: {
  country_id?: number;
}): Promise<ApiSkinnyBanner> {
  const searchParams = new URLSearchParams();
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiSkinnyBanner>(`/skinny-banner${query ? `?${query}` : ""}`);
}

// Shocking Sale types and functions
export interface ApiShockingSaleProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string | null;
  discount: number;
  status: "selling-fast" | "only-left" | "sold";
  statusValue?: number;
  badge?: "choice" | "preferred" | "mall" | "top-picks";
  href: string;
  imageSrc?: string;
}

export interface ApiShockingSaleConfig {
  title: string;
  titleImageUrl?: string | null;
  seeAllHref: string;
  promotionId: string | null;
  endsAt?: string | null; // ISO 8601 timestamp
  countdown: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  products: ApiShockingSaleProduct[];
}

export interface ApiShockingSaleSession {
  id: number;
  name: string;
  title?: string | null;
  time: string;
  label: string;
  href: string;
  isActive: boolean;
}

export async function getShockingSaleHome(params?: {
  country_id?: number;
}): Promise<ApiShockingSaleConfig> {
  const searchParams = new URLSearchParams();
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiShockingSaleConfig>(`/shocking-sale/home${query ? `?${query}` : ""}`);
}

export async function getShockingSaleSessions(params?: {
  country_id?: number;
}): Promise<ApiShockingSaleSession[]> {
  const searchParams = new URLSearchParams();
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  const response = await apiFetch<{ sessions: ApiShockingSaleSession[] }>(`/shocking-sale/sessions${query ? `?${query}` : ""}`);
  return response.sessions;
}

export interface ApiShockingSalePageResponse {
  session: {
    id: number;
    title: string;
    titleImageUrl?: string | null;
    endsAt?: string | null; // ISO 8601 timestamp
    countdown: {
      hours: number;
      minutes: number;
      seconds: number;
    };
  } | null;
  products: ApiShockingSaleProduct[];
  categories: Array<{
    label: string;
    categoryId: number;
    href: string;
    showInMainTabs?: boolean;
  }>;
}

export async function getShockingSalePage(params?: {
  promotionId?: string | number;
  categoryId?: number;
  country_id?: number;
}): Promise<ApiShockingSalePageResponse> {
  const searchParams = new URLSearchParams();
  if (params?.promotionId) searchParams.set("promotionId", String(params.promotionId));
  if (params?.categoryId !== undefined) searchParams.set("categoryId", String(params.categoryId));
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiShockingSalePageResponse>(`/shocking-sale/page${query ? `?${query}` : ""}`);
}

// Footer Content
export interface ApiFooterTrendingPage {
  text: string;
  href: string;
}

export interface ApiFooterCategoryLink {
  text: string;
  href: string;
}

export interface ApiFooterCategory {
  title: string;
  titleHref: string;
  links: ApiFooterCategoryLink[];
}

export interface ApiFooterContent {
  trendingPages: ApiFooterTrendingPage[];
  categories: ApiFooterCategory[];
}

export async function getFooterContent(params?: {
  country_id?: number;
}): Promise<ApiFooterContent> {
  const searchParams = new URLSearchParams();
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiFooterContent>(`/footer${query ? `?${query}` : ""}`);
}

/** Like getFooterContent but returns empty data on failure. Use for optional UI. */
export async function getFooterContentSafe(params?: {
  country_id?: number;
}): Promise<ApiFooterContent> {
  try {
    return await getFooterContent(params);
  } catch {
    return { trendingPages: [], categories: [] };
  }
}

export async function getFooterTrendingPages(params?: {
  country_id?: number;
}): Promise<ApiFooterTrendingPage[]> {
  const searchParams = new URLSearchParams();
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiFooterTrendingPage[]>(`/footer/trending-pages${query ? `?${query}` : ""}`);
}

export async function getTrendingSearches(params?: {
  limit?: number;
}): Promise<ApiFooterTrendingPage[]> {
  const searchParams = new URLSearchParams();
  if (params?.limit) searchParams.set("limit", String(params.limit));
  const query = searchParams.toString();
  try {
    return apiFetch<ApiFooterTrendingPage[]>(`/search/trending${query ? `?${query}` : ""}`);
  } catch (error) {
    // Fallback to empty array if endpoint doesn't exist yet
    console.warn("Failed to fetch trending searches:", error);
    return [];
  }
}

export async function getFooterCategories(params?: {
  country_id?: number;
}): Promise<ApiFooterCategory[]> {
  const searchParams = new URLSearchParams();
  if (params?.country_id) searchParams.set("country_id", String(params.country_id));
  const query = searchParams.toString();
  return apiFetch<ApiFooterCategory[]>(`/footer/categories${query ? `?${query}` : ""}`);
}

// Cart API
export interface ApiCartItem {
  id?: string;
  slug: string;
  title: string;
  imageSrc: string;
  price: number;
  quantity: number;
  colorLabel?: string;
  size?: string;
  shopId?: string;
  shopName?: string;
  shopSlug?: string;
  currencySymbol?: string;
  catalogShippingFee?: number;
}

export interface ApiCartResponse {
  items: ApiCartItem[];
}

export async function getCart(): Promise<ApiCartResponse> {
  const headers: HeadersInit = {};
  // Include session ID for guest carts
  const sessionId = typeof window !== "undefined" ? sessionStorage.getItem("session_id") || crypto.randomUUID() : null;
  if (sessionId && typeof window !== "undefined") {
    sessionStorage.setItem("session_id", sessionId);
    headers["X-Session-ID"] = sessionId;
  }
  return apiFetch<ApiCartResponse>("/cart", { headers }, false);
}

export async function addToCart(item: ApiCartItem): Promise<{ item: ApiCartItem }> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  const sessionId = typeof window !== "undefined" ? sessionStorage.getItem("session_id") || crypto.randomUUID() : null;
  if (sessionId && typeof window !== "undefined") {
    sessionStorage.setItem("session_id", sessionId);
    headers["X-Session-ID"] = sessionId;
  }
  return apiFetch<{ item: ApiCartItem }>("/cart", {
    method: "POST",
    body: JSON.stringify(item),
    headers,
  }, false);
}

export async function updateCartItem(id: string, quantity: number): Promise<{ item: ApiCartItem }> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  const sessionId = typeof window !== "undefined" ? sessionStorage.getItem("session_id") : null;
  if (sessionId) {
    headers["X-Session-ID"] = sessionId;
  }
  return apiFetch<{ item: ApiCartItem }>(`/cart/${id}`, {
    method: "PUT",
    body: JSON.stringify({ quantity }),
    headers,
  }, false);
}

export async function removeFromCart(id: string): Promise<{ message: string }> {
  const headers: HeadersInit = {};
  const sessionId = typeof window !== "undefined" ? sessionStorage.getItem("session_id") : null;
  if (sessionId) {
    headers["X-Session-ID"] = sessionId;
  }
  return apiFetch<{ message: string }>(`/cart/${id}`, {
    method: "DELETE",
    headers,
  }, false);
}

export async function syncCart(): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/cart/sync", { method: "POST" }, true);
}

export async function clearCart(): Promise<{ message: string }> {
  const headers: HeadersInit = {};
  const sessionId = typeof window !== "undefined" ? sessionStorage.getItem("session_id") : null;
  if (sessionId) {
    headers["X-Session-ID"] = sessionId;
  }
  return apiFetch<{ message: string }>("/cart/clear", {
    method: "POST",
    headers,
  }, false);
}
