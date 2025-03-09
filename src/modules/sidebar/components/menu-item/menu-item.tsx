import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

import S from "./menu-item.module.scss";

interface MenuItemProps extends PropsWithChildren {
  href: string;
  icon: IconName;
}

export const MenuItem: FC<MenuItemProps> = ({ href, icon, children }) => (
  <li>
    <Link
      href={href}
      className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
    >
      <DynamicIcon name={icon} className="h-6 w-6" />
      {children}
    </Link>
  </li>
);
