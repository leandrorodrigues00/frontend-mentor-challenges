import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, disabled }: buttonProps) {
  return <ButtonContainer disabled={disabled}>{children}</ButtonContainer>;
}
