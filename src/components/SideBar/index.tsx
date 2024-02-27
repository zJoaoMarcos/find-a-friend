"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "../Button";
import { Logo } from "../Logo";

export function SideBar() { 
  return (
    <aside className="h-screen fixed flex flex-col items-center justify-between space-y-24 py-8 px-4 bg-coral-500">
      <Logo />

      <Button Icon={<ArrowLeft />} onClick={() => history.back()} />
    </aside>
  );
}