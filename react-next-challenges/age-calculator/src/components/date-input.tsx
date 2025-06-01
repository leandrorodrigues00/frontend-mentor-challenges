import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ErrorMessage } from "@/components/ui/error-message";

interface DateInputProps {
  name: "day" | "month" | "year";
  placeholder: string;
}

export function DateInput({ name, placeholder }: DateInputProps) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="max-w-40 w-full">
      <p
        className={cn(
          "font-bold mb-3 tracking-widest uppercase",
          errors[name] || errors.root ? "text-red-500" : "text-gray-600"
        )}
      >
        {name}
      </p>

      <Input
        aria-invalid={errors[name] ? "true" : "false"}
        name={name}
        placeholder={placeholder}
        className={cn(
          "placeholder:font-bold placeholder:text-3xl tabletL:placeholder:text-base",
          errors[name] || errors.root ? "border-red-500" : "border-gray-600"
        )}
      />

      <ErrorMessage field={name} />
    </div>
  );
}
