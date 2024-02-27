import React from "react";
import { ClassValue, VariantProps, tv } from "tailwind-variants";

const buttonTv = tv({
  slots: {
    button: "flex justify-center items-center ",
    icon: '',
  },
  variants: {
    color: {
      'mustard': { button:"bg-mustard-400 hover:bg-mustard-400/90"}
    },
    size: {
      xs: { button: 'py-3 px-3 rounded-2xl text-xs'},
      sm: { button: 'py-1.5 px-4 rounded-2xl text-sm'}
    }
  },
  defaultVariants: {
    color: 'mustard',
    size: 'xs',
  }
});

const { button, icon } = buttonTv()

type ButtonVariantProps = VariantProps<typeof buttonTv>;
type NativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<NativeProps, keyof ButtonVariantProps>, ButtonVariantProps {
  text?: string;
  Icon?: React.ReactElement;
  classValue?: ClassValue;
  iconPosition?: "right" | "left";
}

export function Button(props: ButtonProps) {
  const { Icon, iconPosition, classValue, ...rest} = props

  return (
    <button className={button({ className: classValue })} {...rest}>
      {iconPosition === "left" && Icon && (
        <span className={icon()}>{Icon}</span>
      )}

      {!iconPosition && Icon && <span className={icon()}>{Icon}</span>}
      
      {props?.text && props.text}
      
      {iconPosition === "right" && Icon && (
        <span className={icon()}>{Icon}</span>
      )}
    </button>
  );
}
