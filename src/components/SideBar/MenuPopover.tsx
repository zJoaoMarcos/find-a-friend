import { logout } from "@/contexts/auth";
import * as Popover from "@radix-ui/react-popover";
import { User } from "lucide-react";

export function MenuPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="p-2 rounded-full text-white border-white border-2 hover:border-mustard-400 hover:text-mustard-400">
        <User />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content side="right"  className="p-1 rounded-md bg-white border-black shadow-md">
          <button onClick={() => logout()} className="w-full hover:bg-navy-900 hover:text-mustard-400 rounded-md text-start px-2">Sair</button>

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
