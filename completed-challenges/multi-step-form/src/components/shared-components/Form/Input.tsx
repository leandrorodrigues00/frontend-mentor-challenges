import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      id={props.name}
      className={`flex-1 rounded-md border shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500 hover:cursor-pointer ${
        errors[props.name]
          ? "border-strawberry-red focus:ring-0  focus:ring-transparent"
          : "border-zinc-300 "
      } `}
      {...register(props.name)}
      {...props}
    />
  );
}
