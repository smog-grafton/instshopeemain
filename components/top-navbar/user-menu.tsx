import type { UserData } from "./data";
import { UserMenuTrigger } from "./user-menu-trigger";

interface UserMenuProps {
  user: UserData;
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <li className="justify-center items-center flex relative px-2.5 select-none text-white cursor-pointer after:hidden before:hidden hover:text-white/70">
      <UserMenuTrigger user={user} />
    </li>
  );
}
