/**
 * Notification settings: section and item types and mock data
 */

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  checked: boolean;
}

export interface NotificationSection {
  id: string;
  title: string;
  subtitle: string;
  checked: boolean;
  items: NotificationItem[];
}

const SECTION_SUBTITLE =
  "Important account notifications and reminders cannot be turned off";

export const NOTIFICATION_SECTIONS: NotificationSection[] = [
  {
    id: "email",
    title: "Email Notifications",
    subtitle: SECTION_SUBTITLE,
    checked: true,
    items: [
      {
        id: "email-order",
        title: "Order Updates",
        description: "Updates on shipping and delivery status of all orders",
        checked: true,
      },
      {
        id: "email-promo",
        title: "Promotions",
        description: "Exclusive updates on upcoming deals and campaigns",
        checked: false,
      },
      {
        id: "email-surveys",
        title: "Customer Surveys",
        description: "Receive survey to help Shopee serve you better",
        checked: false,
      },
    ],
  },
  {
    id: "sms",
    title: "SMS Notifications",
    subtitle: SECTION_SUBTITLE,
    checked: true,
    items: [
      {
        id: "sms-promo",
        title: "Promotions",
        description: "Exclusive updates on upcoming deals and campaigns",
        checked: true,
      },
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp Notifications",
    subtitle: SECTION_SUBTITLE,
    checked: true,
    items: [
      {
        id: "wa-order",
        title: "Order",
        description: "Updates on shipping and delivery status of all orders",
        checked: true,
      },
      {
        id: "wa-promo",
        title: "Promotions",
        description: "Exclusive updates on upcoming deals and campaigns",
        checked: true,
      },
    ],
  },
];
