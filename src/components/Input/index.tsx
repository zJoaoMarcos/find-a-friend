import React, { DetailedHTMLProps, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  error?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { name, label, error, ...rest } = props;

    return (
      <div className="flex flex-col items-start w-full">
        {label && (
          <label htmlFor={name} className="pl-0.5 mb-2 text-base font-semibold">
            {label}
          </label>
        )}
        
        <input
          id={name}
          name={name}
          ref={ref}
          {...rest}
          className="w-full h-16 py-1 px-4 ring-2 bg-navy-900/10 ring-navy-900/20 outline-none rounded-2xl font-semibold text-navy-900/90"
        />

        {error && (
          <span className=" text-sm text-coral-500 pl-2 pt-1">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
