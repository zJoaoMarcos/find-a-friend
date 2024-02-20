/* eslint-disable react/display-name */
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const select = tv({
  slots: {
    root: "flex",
    trigger: "inline-flex items-center rounded-2xl px-5 font-extrabold",
    content: "rounded-2xl font-extrabold",
  },
  variants: {
    variant: {
      "outlined-white": {
        root: "text-white",
        trigger: "ring-1 ring-white",
        content: "bg-coral-700 text-white",
      },
      "outlined-light": {
        root: "text-white",
        trigger: "ring-1 ring-coral-500",
        content: "bg-coral-700 text-white",
      },
      "filed-coral": {
        root: "text-white",
        trigger: "bg-coral-700",
        content: "bg-coral-700 text-white",
      },
      "filed-white-coral": {
        root: "text-white",
        trigger: "bg-coral-100 text-navy-900 font-normal",
        content: "bg-coral-100/90 text-navy-900",
      },
      "filed-light-coral": {
        root: "text-white",
        trigger: "bg-coral-300",
        content: "bg-coral-300 text-white",
      },
    },
    size: {
      xs: { trigger: "w-16 h-16 gap-2 p-1.5", content: "gap-2 p-1.5" },
      sm: {
        trigger: "w-52 h-14 gap-2 ",
        content: "w-52 p-1.5",
      },
      lg: {
        trigger: "w-72 h-16 gap-2 p-2",
        content: "w-72 p-2",
      },
      xl: {
        trigger: "w-96 h-16 gap-2 p-2",
        content: "w-96 p-2",
      },
    },
    flex: {
      col: { root: "flex-col items-start gap-3.5" },
      row: { root: "flex-row items-center gap-6" },
    },
    justifyTrigger: {
      between: { trigger: "justify-between" },
      center: { trigger: "justify-center" },
    },
  },
  defaultVariants: {
    variant: "filed-coral",
    size: "lg",
    flex: "row",
    justifyTrigger: "center",
  },
});

const { root, trigger, content } = select();

interface SelectProps
  extends SelectPrimitive.SelectProps,
    VariantProps<typeof select> {
  label?: string;
  id?: string;
  placeholder: string;
  children: React.ReactNode;
  onChangeValue?: ((event: any) => void) | undefined;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ id, label, placeholder, onChangeValue, justifyTrigger, flex, variant, size, children, ...props }, ref) => {

    return (
      <div className={root({ flex, variant})}>
        {label && (
          <LabelPrimitive.Root htmlFor={id}>{label}</LabelPrimitive.Root>
        )}
        <SelectPrimitive.Root {...props} onValueChange={(e) => onChangeValue && onChangeValue(e)}>
          <SelectPrimitive.Trigger
            id={id}
            ref={ref}
            className={trigger({ variant, size, justifyTrigger })}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon>
              <ChevronDownIcon  />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              sideOffset={5}
              className={content({ variant, size, })}
            >
              {children}
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    );
  }
);

const selectItem = tv({
  base: "px-4 py-2 rounded-lg font-extrabold data-[highlighted]:outline-none data-[highlighted]:bg-white/20"
});

interface SelectItemProps
  extends SelectPrimitive.SelectItemProps,
    VariantProps<typeof selectItem> {}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item
        {...props}
        ref={ref}
        className={selectItem()}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);
