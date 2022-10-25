import { InputContainer } from "./styles";
interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  return <InputContainer placeholder={placeholder} type="text" />;
}
