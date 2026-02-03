"use client";

import { useState, useCallback } from "react";
import type { NotificationSection as Section } from "./data";
import { NOTIFICATION_SECTIONS } from "./data";
import { NotificationSection } from "./notification-section";

export { NotificationSwitcher } from "./notification-switcher";
export { NotificationSection } from "./notification-section";
export {
  NOTIFICATION_SECTIONS,
  type NotificationSection as NotificationSectionType,
  type NotificationItem,
} from "./data";

/**
 * Notification settings: Email, SMS, WhatsApp sections with toggles and separator lines.
 */
export function NotificationSettings() {
  const [sections, setSections] = useState<Section[]>(NOTIFICATION_SECTIONS);

  const onSectionToggle = useCallback(
    (sectionId: string, checked: boolean) => {
      setSections((prev) =>
        prev.map((s) =>
          s.id === sectionId ? { ...s, checked } : s
        )
      );
    },
    []
  );

  const onItemToggle = useCallback(
    (sectionId: string, itemId: string, checked: boolean) => {
      setSections((prev) =>
        prev.map((s) =>
          s.id === sectionId
            ? {
                ...s,
                items: s.items.map((i) =>
                  i.id === itemId ? { ...i, checked } : i
                ),
              }
            : s
        )
      );
    },
    []
  );

  return (
    <div className="w-[980px] ml-7">
      <div className="bg-white rounded-[2px] shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="text-sm leading-tight text-black/80 px-6 py-4 shadow-inner">
          {sections.map((section, index) => (
            <div key={section.id}>
              {index > 0 && (
                <div
                  className="h-px w-full bg-black/6 my-0"
                  aria-hidden
                  role="separator"
                />
              )}
              <NotificationSection
                section={section}
                onSectionToggle={onSectionToggle}
                onItemToggle={onItemToggle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
