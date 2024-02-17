import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  label?: string;
}

export function Input(props: InputProps) {
  const {name, label, ...rest } = props
  
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
        {...rest}
        className="w-full h-16 py-1 px-4 ring-2 bg-navy-900/10 ring-navy-900/20 outline-none rounded-2xl font-semibold text-navy-900/90"
      />
    </div>
  );
}