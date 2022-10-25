import { ButtonContainer } from "./styles";

interface buttonProps {
  text: string;
}

export function Button({ text }: buttonProps) {
  return <ButtonContainer>{text}</ButtonContainer>;
}
