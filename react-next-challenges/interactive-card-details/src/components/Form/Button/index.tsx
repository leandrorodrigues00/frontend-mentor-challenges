import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: buttonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
