"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface DateBirthType {
  years: number;
  months: number;
  days: number;
}

interface DateBirthContextType {
  calculateAge: (year: number, month: number, day: number) => void;
  dateBirth: DateBirthType | null;
}

const DateBirthContext = createContext({} as DateBirthContextType);

export function DateBirthProvider({ children }: { children: ReactNode }) {
  const [dateBirth, setDateBirth] = useState<DateBirthType | null>(null);

  function calculateAge(year: number, month: number, day: number) {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day); // months range from 0 to 11 in javascript, so we subtract 1.

    const difference = currentDate.getTime() - birthDate.getTime();
    const ageDate = new Date(difference);

    const years = ageDate.getUTCFullYear() - 1970; //javascript returns milliseconds starting from 1 January 1970,
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Subtract 1 to get days instead of date

    setDateBirth({
      years,
      months,
      days,
    });
  }

  return (
    <DateBirthContext.Provider value={{ calculateAge, dateBirth }}>
      {children}
    </DateBirthContext.Provider>
  );
}

export const useDateBirth = () => useContext(DateBirthContext);
