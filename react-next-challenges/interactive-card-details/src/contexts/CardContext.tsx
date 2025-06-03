import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { createContext, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const CardContext = createContext({});

interface CardContextProviderProps {
  children: ReactNode;
}

export function CardContextProvider({ children }: CardContextProviderProps) {
  const schema = z.object({
    cardHolderName: z.string().min(1, { message: "name can't be empty" }),
    cardNumber: z
      .string()
      .min(1, { message: "can't be empty" })
      .regex(/^[0-9]{16}$/, { message: "Only 16 numbers are accepted" }),
    cardExpMonth: z
      .string()
      .min(1, { message: "can't be empty" })
      .regex(/^[0-9]{2}$/, { message: "Incorrect month" }),
    cardExpYear: z
      .string()
      .min(1, { message: "can't be empty" })
      .regex(/^[0-9]{2}$/, { message: "Incorrect year" }),
    cardCvc: z
      .string()
      .min(1, { message: "can't be empty" })
      .regex(/^[0-9]{3}$/, { message: "Numbers only" }),
  });

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <CardContext.Provider value={{ methods }}>{children}</CardContext.Provider>
  );
}
