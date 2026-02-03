export interface SessionSlot {
  time: string;
  label: string;
  href: string;
  isActive: boolean;
}

const baseQuery = "fromItem=23479543390";

export const defaultSessionSlots: SessionSlot[] = [
  {
    time: "19:00",
    label: "Ongoing",
    href: `/shocking_sale?${baseQuery}&promotionId=230023730900992`,
    isActive: true,
  },
  {
    time: "04:00",
    label: "Tomorrow",
    href: `/shocking_sale?${baseQuery}&promotionId=230023730905088`,
    isActive: false,
  },
  {
    time: "07:00",
    label: "Tomorrow",
    href: `/shocking_sale?${baseQuery}&promotionId=230101879173122`,
    isActive: false,
  },
  {
    time: "09:00",
    label: "Tomorrow",
    href: `/shocking_sale?${baseQuery}&promotionId=230101883367425`,
    isActive: false,
  },
  {
    time: "11:00",
    label: "Tomorrow",
    href: `/shocking_sale?${baseQuery}&promotionId=230101883367428`,
    isActive: false,
  },
];
