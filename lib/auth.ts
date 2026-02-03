/**
 * Simulated buyer auth: credentials and user display data.
 * Used by AuthContext and login form.
 */

export const SIMULATED_BUYER = {
  email: "smogcoders@gmail.com",
  password: "98@Akiibu21@98",
  username: "smogcoders",
  avatarUrl: "/images/common/user/account/smogcoders-avatar.png",
} as const;

export function checkCredentials(emailOrUsername: string, password: string): boolean {
  const key = emailOrUsername.trim().toLowerCase();
  const emailMatch = key === SIMULATED_BUYER.email.toLowerCase();
  const usernameMatch = key === SIMULATED_BUYER.username.toLowerCase();
  return (emailMatch || usernameMatch) && password === SIMULATED_BUYER.password;
}
