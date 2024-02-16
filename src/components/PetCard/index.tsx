import { Logo } from "../Logo";
import { PetAvatar } from "./PetAvatar";

interface PetCardProps {
  photo: string;
  name: string;
}

export function PetCard(props: PetCardProps) { 
  return (
    <div className="w-full h-64 relative bg-white flex flex-col items-center rounded-3xl text-navy-900 hover:text-white hover:bg-navy-900 hover: cursor-pointer p-1 shadow-lg shadow-black/20">
      <img
        src={`/images/${props.photo}`}
        style={{ width: "inherit" }}
        className="h-44 rounded-[20px] object-cover"
      />
      <div className="w-14 h-14 flex items-center justify-center p-3.5 absolute bottom-11 rounded-2xl bg-coral-500 border-[3px] border-white hover:border-navy-900 ">
        <Logo />
      </div>
      <p className="mt-10 text-lg font-bold">{props.name}</p>
    </div>
  );
}