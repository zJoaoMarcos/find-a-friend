"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { MenuPopover } from "./MenuPopover";

interface SideBarProps { 
  hasGoBackButton?: boolean,
  hasOptionMenu?: boolean;
}

export function SideBar(props: SideBarProps) { 
  const { hasGoBackButton = false, hasOptionMenu = false } = props
  
  return (
    <aside className="h-screen fixed flex flex-col items-center justify-between space-y-24 py-8 px-4 bg-coral-500">
      <Logo />

      <div className="flex flex-col items-center gap-4"> 
      {hasGoBackButton && <MenuPopover />}
      {hasOptionMenu && <Button Icon={<ArrowLeft />} onClick={() => history.back()} />}
      </div>
    </aside>
  );
}