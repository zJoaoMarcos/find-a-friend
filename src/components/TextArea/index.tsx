import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react"

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
    name: string;
    label?: string;
  }

export function TextArea(props: TextAreaProps) { 
  const {name, label, ...rest } = props

  return (
    <div className="flex flex-col items-start w-full">
      {label && (
        <label htmlFor={name} className="pl-0.5 mb-2 text-base font-semibold">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        {...rest}
        className="w-full h-32 py-1 px-4 ring-2 resize-none bg-navy-900/10 ring-navy-900/20 outline-none rounded-2xl font-semibold text-navy-900/90"
      />
    </div>
  );
}