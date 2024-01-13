import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ className, type, ...props }: InputProps) {
  const { register } = useFormContext();
  return (
    <input
      type={type}
      className={cn(
        "flex h-[70px] tabletL:h-12 text-3xl tabletL:text-base font-bold w-full rounded-md border border-slate-200 bg-white px-6 pt-2 tabletL:p-2 ring-offset-white  placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...register(props.name)}
      {...props}
    />
  );
}

Input.displayName = "Input";

export { Input };
