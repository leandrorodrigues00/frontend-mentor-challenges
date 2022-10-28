import { InputHTMLAttributes } from "react";
import {
  FieldValues,
  useFormContext,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { InputContainer, ErrorMessage } from "./styles";

type InputProps = {
  regForm: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

export function Input({ placeholder, regForm, type = "text" }: InputProps) {
  const {
    register,
    formState: { errors },
  }: FieldErrors = useFormContext();

  const hasErrors = !!errors[regForm];

  if (hasErrors) {
    if (placeholder === "Email Address") {
      placeholder = "email@example.com";
    } else {
      placeholder = " ";
    }
  }

  return (
    <>
      <InputContainer
        placeholder={placeholder}
        {...register(regForm, {
          required: "invalid",
        })}
        type={type}
        hasErrors={hasErrors}
      />
      {errors[regForm] && (
        <ErrorMessage>{errors[regForm]?.message}</ErrorMessage>
      )}
    </>
  );
}
