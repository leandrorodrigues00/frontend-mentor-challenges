import { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  maxLength?: number;
}

export function Textarea({ className, maxLength, ...props }: TextareaProps) {
  return (
    <textarea
      id={props.name}
      className={cn(
        "w-full resize-none rounded border border-gray-300 px-5 py-[14px] outline-blue-700 transition-all placeholder:text-gray-400",
        className
      )}
      {...props}
    />
  );
}
