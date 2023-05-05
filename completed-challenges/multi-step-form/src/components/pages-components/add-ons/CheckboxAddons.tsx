/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { NextStepButton } from "@/components/shared-components/NextStepButton";
import { PreviousStepButton } from "@/components/shared-components/PreviousStepButton";

const dataCheckboxAddons = [
  {
    id: "onlineService",
    addonName: "Online Service",
    addonDescription: "Acess to multiplayer games",
    addonPriceMonthly: "+$1/mo",
    addonPriceYearly: "+$10/yr",
  },
  {
    id: "largerStorage",
    addonName: "Larger storage",
    addonDescription: "Extra 1TB of cloud save",
    addonPriceMonthly: "+$2/mo",
    addonPriceYearly: "+$20/yr",
  },

  {
    id: "customizableProfile",
    addonName: "Customizable Profile",
    addonDescription: "Custom theme on your profile",
    addonPriceMonthly: "+$2/mo",
    addonPriceYearly: "+$20/yr",
  },
];

const selectAddonsSchema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean(),
});

type SelectAddonsData = z.infer<typeof selectAddonsSchema>;

export function CheckboxAddons() {
  const router = useRouter();
  const { formData, setFormData } = useWizardFormContext();

  const { handleSubmit, control } = useForm<SelectAddonsData>({
    resolver: zodResolver(selectAddonsSchema),
    defaultValues: {
      largerStorage: false,
      customizableProfile: false,
      onlineService: false,
    },
  });

  function handleNextStep(data: SelectAddonsData) {
    setFormData({
      ...formData,
      onlineService: data.onlineService,
      largerStorage: data.largerStorage,
      customizableProfile: data.customizableProfile,
    });
    router.push("/summary");
  }
  return (
    <div className="mt-11 flex-1 grid pb-8">
      <form className="flex flex-col gap-[15px]">
        {dataCheckboxAddons.map((data, index) => (
          <div
            key={index}
            className="flex gap-6 items-center px-6 py-4 border border-light-gray hover:border-purplish-blue rounded-lg [&:has(button[data-state='checked'])]:bg-pastel-blue [&:has(button[data-state='checked'])]:bg-opacity-20 [&:has(button[data-state='checked'])]:border-purplish-blue"
          >
            <Controller
              name={
                data.id as
                  | "onlineService"
                  | "largerStorage"
                  | "customizableProfile"
              }
              control={control}
              render={({ field }) => (
                <Checkbox.Root
                  className="flex h-[25px] w-[25px] rounded-[4px] border border-cool-gray data-[state=checked]:border-0  "
                  onCheckedChange={field.onChange}
                >
                  <Checkbox.Indicator className="bg-purplish-blue h-full w-full rounded-[4px] flex items-center justify-center group">
                    <img src="/icons/icon-checkmark.svg" alt="" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              )}
            />

            <div className="flex-1">
              <label
                htmlFor={data.id}
                className="text-marine-blue font-medium hover:cursor-pointer"
              >
                {data.addonName}
              </label>
              <p className="text-cool-gray leading-5">
                {data.addonDescription}
              </p>
            </div>

            <span className="text-purplish-blue">
              {formData.billingModel === "monthly"
                ? data.addonPriceMonthly
                : data.addonPriceYearly}
            </span>
          </div>
        ))}
      </form>

      <div className="flex justify-between  absolute xs:relative bottom-0 right-0 left-0 bg-white w-full p-8 xs:p-0 ">
        <PreviousStepButton href={"/select-plan"} />
        <NextStepButton onClick={handleSubmit(handleNextStep)} />
      </div>
    </div>
  );
}
