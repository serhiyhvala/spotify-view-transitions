import { Sidebar } from "@/modules/sidebar";
import { FC, PropsWithChildren } from "react";

import S from "./home-layout.module.scss";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative h-screen p-2 gap-2 flex items-stretch">
    <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
      <Sidebar />
    </div>
    <div className="rounded-lg bg-zinc-900 flex-1 mx-auto overflow-y-auto">
      {children}
    </div>
  </div>
);
