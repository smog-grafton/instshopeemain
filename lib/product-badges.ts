export function normalizeBadgeList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((badge) => (typeof badge === "string" ? badge.trim() : ""))
      .filter((badge) => badge.length > 0);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (!trimmed) {
      return [];
    }

    try {
      const parsed = JSON.parse(trimmed) as unknown;
      if (parsed !== value) {
        return normalizeBadgeList(parsed);
      }
    } catch {
      // Fall through to plain-string handling.
    }

    return [trimmed];
  }

  return [];
}
