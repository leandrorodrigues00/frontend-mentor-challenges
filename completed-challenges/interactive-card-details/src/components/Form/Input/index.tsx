import { InputHTMLAttributes } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { ErrorMessage, InputStyles, InputWrapper, TitleCard } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  regForm: string;
  label: string;
}

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

export function Input({ label, name, regForm, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  }: FieldErrors = useFormContext();

  return (
    <InputWrapper>
      <TitleCard htmlFor={name}>{label}</TitleCard>
      <InputStyles
        {...register(regForm, {
          required: "invalid",
        })}
        {...rest}
      />
      {errors[regForm] && (
        <ErrorMessage>{errors[regForm]?.message}</ErrorMessage>
      )}
    </InputWrapper>
  );
}
