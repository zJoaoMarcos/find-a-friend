import { title } from "process";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({

})

interface ButtonProps extends VariantProps<typeof button> {
  title?: string
  icon?: string
  hasIconLeft?: boolean;
  hasIconRight?: boolean
}

export function SearchButton({...props}: ButtonProps) {
  return (
    <button className={button()}>
      {title && title}
    </button>
  )
}