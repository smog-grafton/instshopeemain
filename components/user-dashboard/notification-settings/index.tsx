"use client";

import { useState, useCallback, useEffect } from "react";
import type { NotificationSection as Section } from "./data";
import { NOTIFICATION_SECTIONS } from "./data";
import { NotificationSection } from "./notification-section";
import {
  getNotificationPreferences,
  updateNotificationPreference,
  type ApiNotificationPreferences,
} from "@/lib/api-client";

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
  const [loading, setLoading] = useState(true);

  // Map item IDs to channel/category
  const itemIdMap: Record<string, { channel: string; category: string }> = {
    "email-order": { channel: "email", category: "order" },
    "email-promo": { channel: "email", category: "promotion" },
    "email-surveys": { channel: "email", category: "survey" },
    "sms-promo": { channel: "sms", category: "promotion" },
    "wa-order": { channel: "whatsapp", category: "order" },
    "wa-promo": { channel: "whatsapp", category: "promotion" },
  };

  useEffect(() => {
    async function loadPreferences() {
      try {
        const prefs = await getNotificationPreferences();
        // Map API preferences to sections
        setSections((prev) =>
          prev.map((s) => {
            const channelPrefs = prefs[s.id] || {};
            const sectionChecked = Object.values(channelPrefs).some((v) => v === true);
            return {
              ...s,
              checked: sectionChecked,
              items: s.items.map((item) => {
                const mapping = itemIdMap[item.id];
                if (mapping) {
                  const enabled = channelPrefs[mapping.category] ?? item.checked;
                  return { ...item, checked: enabled };
                }
                return item;
              }),
            };
          })
        );
      } catch (error) {
        console.error("Failed to load notification preferences:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPreferences();
  }, []);

  const onSectionToggle = useCallback(
    async (sectionId: string, checked: boolean) => {
      setSections((prev) =>
        prev.map((s) =>
          s.id === sectionId ? { ...s, checked } : s
        )
      );
      // Update all items in the section
      const section = sections.find((s) => s.id === sectionId);
      if (section) {
        for (const item of section.items) {
          const mapping = itemIdMap[item.id];
          if (mapping) {
            try {
              await updateNotificationPreference(mapping.channel, mapping.category, checked);
            } catch (error) {
              console.error(`Failed to update ${item.id}:`, error);
            }
          }
        }
      }
    },
    [sections]
  );

  const onItemToggle = useCallback(
    async (sectionId: string, itemId: string, checked: boolean) => {
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
      // Update API
      const mapping = itemIdMap[itemId];
      if (mapping) {
        try {
          await updateNotificationPreference(mapping.channel, mapping.category, checked);
        } catch (error) {
          console.error(`Failed to update ${itemId}:`, error);
          // Revert on error
          setSections((prev) =>
            prev.map((s) =>
              s.id === sectionId
                ? {
                    ...s,
                    items: s.items.map((i) =>
                      i.id === itemId ? { ...i, checked: !checked } : i
                    ),
                  }
                : s
            )
          );
        }
      }
    },
    []
  );

  if (loading) {
    return (
      <div className="w-[980px] ml-7">
        <div className="bg-white rounded-[2px] shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="text-sm leading-tight text-black/80 px-6 py-4 shadow-inner">
            <p className="text-center text-black/54 py-10">Loading notification preferences...</p>
          </div>
        </div>
      </div>
    );
  }

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
