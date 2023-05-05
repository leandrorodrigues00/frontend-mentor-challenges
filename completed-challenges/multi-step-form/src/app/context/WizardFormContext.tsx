"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type WizardFormProviderProps = {
  children: ReactNode;
};

interface WizardFormProps {
  name: string;
  email: string;
  phone: string;
  planChoice: "arcade" | "advanced" | "pro";
  billingModel: "monthly" | "yearly";
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

interface WizardFormContextType {
  formData: WizardFormProps;
  setFormData: Dispatch<SetStateAction<WizardFormProps>>;
}

const WizardFormContext = createContext({} as WizardFormContextType);

export const WizardFormContextProvider = ({
  children,
}: WizardFormProviderProps) => {
  const [formData, setFormData] = useState({} as WizardFormProps);

  return (
    <WizardFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </WizardFormContext.Provider>
  );
};

export function useWizardFormContext() {
  return useContext(WizardFormContext);
}
