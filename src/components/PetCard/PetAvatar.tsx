import { VariantProps, tv } from "tailwind-variants";
import { Logo } from "../Logo";

const petAvatar = tv({
  base: 'w-14 h-14 flex items-center justify-center p-3.5 absolute bottom-11 rounded-2xl',
  variants: {
    colors: {
      coral: 'bg-coral-500',
      mustard: 'bg-mustard-500'
    },
    border: {
      none: '',
      navy: 'border-[3px] border-navy-900',
      white: 'border-[3px] border-white'
    }
  },  
})

interface PetAvatarProps extends VariantProps<typeof petAvatar> { 

}

export function PetAvatar(props: PetAvatarProps) {
  return (
    <div className={petAvatar({...props})}>
      <Logo />
    </div>
  );
}
