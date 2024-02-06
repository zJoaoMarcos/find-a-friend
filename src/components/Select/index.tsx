/* eslint-disable react/display-name */
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const select = tv({
  slots: {
    root: "flex items-center",
    trigger: "inline-flex items-center justify-center rounded-2xl font-extrabold",
    content: "rounded-2xl font-extrabold",
  },
  variants: {
    variant: {
      "outlined-white-row": {
        root: "flex-row gap-6",
        trigger: "ring-1 ring-white",
        content: "bg-coral-700",
      },
      "filed-coral-row": {
        root: "flex-row",
        trigger: "bg-coral-700",
        content: "bg-coral-700",
      },
    },
    size: {
      xs: { trigger: "w-16 h-16 justify-center gap-2 p-1" },
      lg: { trigger: "w-72 h-16 justify-center gap-2 p-2", content: 'w-72 p-2' },
    },
  },
  defaultVariants: {
    variant: "filed-coral-row",
    size: "lg",
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
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ id, label, placeholder, variant, size, children, ...props }, ref) => {
    return (
      <div className={root({ variant })}>
        {label && (
          <LabelPrimitive.Root htmlFor={id}>{label}</LabelPrimitive.Root>
        )}
        <SelectPrimitive.Root {...props}>
          <SelectPrimitive.Trigger
            id={id}
            ref={ref}
            className={trigger({ variant, size })}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon>
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              sideOffset={5}
              className={content({ variant, size })}
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
