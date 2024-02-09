import { ClassValue, VariantProps, tv } from "tailwind-variants";

const buttonTv = tv({
  slots: {
    button: "flex justify-center items-center rounded-2xl",
    icon: '',
  },
  variants: {
    color: {
      'mustard': { button:"bg-[#F4D35E] hover:bg-mustard-400/90"}
    },
    size: {
      xs: { button: 'py-1 px-3 text-xs'},
      sm: { button: 'py-1.5 px-4 text-sm'}
    }
  },
  defaultVariants: {
    color: 'mustard',
    size: 'xs',
  }
});

const { button, icon } = buttonTv()

interface ButtonProps extends VariantProps<typeof button> {
  text?: string;
  icon?: React.ReactNode;
  className?: ClassValue
  iconPossition?: "right" | "left";
}

export function Button(props: ButtonProps) {
  return (
    <button className={button({ className: props.className })}>
      {props?.iconPossition === "left" && props?.icon && (
        <span className={icon()}>{props.icon}</span>
      )}
      {!props.iconPossition && props?.icon && <span className={icon()}>{props.icon}</span>}
      {props?.text && props.text}
      {props?.iconPossition === "right" && props?.icon && (
        <span className={icon()}>{props.icon}</span>
      )}
    </button>
  );
}
