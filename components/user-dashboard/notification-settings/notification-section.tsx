"use client";

import type { NotificationSection as Section } from "./data";
import { NotificationSwitcher } from "./notification-switcher";

interface NotificationSectionProps {
  section: Section;
  onSectionToggle?: (sectionId: string, checked: boolean) => void;
  onItemToggle?: (sectionId: string, itemId: string, checked: boolean) => void;
}

export function NotificationSection({
  section,
  onSectionToggle,
  onItemToggle,
}: NotificationSectionProps) {
  return (
    <>
      {/* Section header: title + subtitle + section toggle */}
      <div className="py-2.5">
        <div className="flex items-center">
          <label className="[-webkit-tap-highlight-color:transparent] flex-1 min-w-0 overflow-hidden cursor-pointer">
            <div className="mb-1 text-xl font-medium leading-8 text-black/87">
              {section.title}
            </div>
            <div className="text-sm leading-5 text-black/40">
              {section.subtitle}
            </div>
          </label>
          <NotificationSwitcher
            checked={section.checked}
            onChange={(checked) => onSectionToggle?.(section.id, checked)}
            aria-label={`Toggle ${section.title}`}
          />
        </div>
      </div>

      {/* Indented sub-items */}
      <div className="pl-6">
        {section.items.map((item, index) => (
          <div
            key={item.id}
            className={`py-2.5 ${index === 0 ? "mt-1.5" : ""} ${index === section.items.length - 1 ? "mb-1.5" : ""}`}
          >
            <div className="flex items-center">
              <label className="[-webkit-tap-highlight-color:transparent] flex-1 min-w-0 overflow-hidden cursor-pointer">
                <div className="mb-1 text-lg leading-7 text-black/87">
                  {item.title}
                </div>
                <div className="text-sm leading-5 text-black/40">
                  {item.description}
                </div>
              </label>
              <NotificationSwitcher
                checked={item.checked}
                onChange={(checked) =>
                  onItemToggle?.(section.id, item.id, checked)
                }
                aria-label={`Toggle ${item.title}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
