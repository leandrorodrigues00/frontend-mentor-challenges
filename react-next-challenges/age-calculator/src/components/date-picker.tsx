"use client";

import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DateInput } from "@/components/date-input";
import { useDateBirth } from "@/contexts/date-birth";
import { ErrorMessage } from "@/components/ui/error-message";

const dateOfBirthSchema = z.object({
  day: z.coerce
    .number({
      invalid_type_error: "must be a valid day",
    })
    .min(1, { message: "this field is required" })
    .max(31, { message: "must be a valid day" })
    .int({ message: "must be a valid day" }),
  month: z.coerce
    .number({
      invalid_type_error: "must be a valid month",
    })
    .min(1, { message: "this field is required" })
    .max(12, { message: "must be a valid month" })
    .int({ message: "must be a valid month" }),
  year: z.coerce
    .number({
      invalid_type_error: "must be a valid year",
    })
    .min(1, { message: "this field is required" })
    .int({ message: "must be a valid year" })
    .refine(
      (val) => {
        const currentYear = new Date().getFullYear();
        return val <= currentYear;
      },
      { message: "must be in the past" }
    ),
});

type DateOfBirthData = z.infer<typeof dateOfBirthSchema>;

export function DatePicker() {
  const { calculateAge } = useDateBirth();

  const dateOfBirthForm = useForm<DateOfBirthData>({
    resolver: zodResolver(dateOfBirthSchema),
  });

  const { handleSubmit, setError } = dateOfBirthForm;

  async function getAge(data: DateOfBirthData) {
    const isValidDay = validateDay(data.year, data.month, data.day);

    if (!isValidDay) {
      setError("root.serverError", {
        message: "Invalid day for the selected month.",
      });
      return;
    }

    calculateAge(data.year, data.month, data.day);
  }

  function validateDay(year: number, month: number, day: number) {
    const daysInMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= daysInMonth;
  }

  return (
    <FormProvider {...dateOfBirthForm}>
      <form
        onSubmit={handleSubmit(getAge)}
        className="flex gap-8 tabletL:gap-4"
        id="ageForm"
      >
        <DateInput name="day" placeholder="DD" />
        <DateInput name="month" placeholder="MM" />
        <DateInput name="year" placeholder="YYYY" />
      </form>
      <ErrorMessage field="root.serverError" />
    </FormProvider>
  );
}
