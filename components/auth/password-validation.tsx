"use client";

/** Rules: met = green check, unmet = red x. Only letters, numbers, common punctuation = green when met. */
export interface PasswordRule {
  id: string;
  label: string;
  test: (password: string) => boolean;
}

export const PASSWORD_RULES: PasswordRule[] = [
  {
    id: "lower",
    label: "At least one lowercase character",
    test: (p) => /[a-z]/.test(p),
  },
  {
    id: "upper",
    label: "At least one uppercase character",
    test: (p) => /[A-Z]/.test(p),
  },
  {
    id: "length",
    label: "8-16 characters",
    test: (p) => p.length >= 8 && p.length <= 16,
  },
  {
    id: "chars",
    label: "Only letters, numbers and common punctuation can be used",
    test: (p) => /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/.test(p) && p.length > 0,
  },
];

const SUCCESS_GREEN = "rgb(0, 128, 0)"; // or #008000
const ERROR_RED = "rgb(255, 66, 79)";

interface PasswordValidationListProps {
  password: string;
  className?: string;
}

export function PasswordValidationList({
  password,
  className = "",
}: PasswordValidationListProps) {
  return (
    <div className={className}>
      {PASSWORD_RULES.map((rule) => {
        const met = rule.test(password);
        return (
          <div
            key={rule.id}
            className="flex items-center gap-2 text-sm min-h-[18px] mb-2.5 align-self-start"
            style={{
              color: met ? SUCCESS_GREEN : (password ? ERROR_RED : "rgba(117, 117, 117, 0.4)"),
              fontSize: "14px",
              marginBottom: "10px",
              minHeight: "18px",
              alignSelf: "flex-start",
            }}
          >
            {met ? (
              <svg
                className="shrink-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M13.5 4L6 11.5 2.5 8"
                  stroke={SUCCESS_GREEN}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span
                className="shrink-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold"
                style={{ color: password ? ERROR_RED : "rgba(117, 117, 117, 0.4)" }}
                aria-hidden
              >
                ×
              </span>
            )}
            <span style={{ verticalAlign: "middle" }}>{rule.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function isPasswordValid(password: string): boolean {
  return PASSWORD_RULES.every((r) => r.test(password));
}
