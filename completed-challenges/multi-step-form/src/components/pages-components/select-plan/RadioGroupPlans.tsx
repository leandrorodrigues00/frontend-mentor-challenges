/* eslint-disable @next/next/no-img-element */
"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Controller, useFormContext } from "react-hook-form";

import { Form } from "@/components/shared-components/Form";

export function RadioGroupPlans() {
  const { control, watch } = useFormContext();

  const watchBillingModel = watch("billingModel");

  return (
    <Controller
      name="planChoice"
      control={control}
      render={({ field }) => (
        <>
          <RadioGroup.Root
            className="flex gap-4 flex-col xs:flex-row"
            onValueChange={field.onChange}
            value={field.value}
          >
            <RadioGroup.Item
              className="relative flex xs:block max-w-full xs:max-w-[8.75rem] w-full gap-5 xs:gap-0 rounded-lg py-5 px-4 ring-1 ring-inset ring-light-gray hover:ring-purplish-blue duration-300"
              value="arcade"
            >
              <img src="/icons/icon-arcade.svg" alt="" />

              <div className="text-left xs:mt-11">
                <p className="font-medium text-marine-blue">Arcade</p>
                <span className="text-cool-gray">
                  {watchBillingModel === "monthly" ? "$9/mo" : "$90/yr"}
                </span>
                {watchBillingModel === "yearly" && (
                  <p className="text-marine-blue text-sm mt-1">2 months free</p>
                )}
              </div>

              <RadioGroup.Indicator className="absolute top-0 left-0 w-full h-full bg-pastel-blue bg-opacity-20 border border-purplish-blue rounded-lg" />
            </RadioGroup.Item>

            <RadioGroup.Item
              className="relative flex xs:block max-w-full xs:max-w-[8.75rem] w-full gap-5 xs:gap-0 rounded-lg py-5 px-4 ring-1 ring-inset ring-light-gray hover:ring-purplish-blue duration-300"
              value="advanced"
            >
              <img src="/icons/icon-advanced.svg" alt="" />

              <div className="text-left xs:mt-11">
                <p className="font-medium text-marine-blue">Advanced</p>
                <span className="text-cool-gray">
                  {watchBillingModel === "monthly" ? "$12/mo" : "$120/yr"}
                </span>
                {watchBillingModel === "yearly" && (
                  <p className="text-marine-blue text-sm mt-1">2 months free</p>
                )}
              </div>
              <RadioGroup.Indicator className="absolute top-0 left-0 w-full h-full bg-pastel-blue bg-opacity-20 border border-purplish-blue rounded-lg" />
            </RadioGroup.Item>

            <RadioGroup.Item
              className="relative flex xs:block max-w-full xs:max-w-[8.75rem] w-full gap-5 xs:gap-0 rounded-lg py-5 px-4 ring-1 ring-inset ring-light-gray hover:ring-purplish-blue duration-300"
              value="pro"
            >
              <img src="/icons/icon-pro.svg" alt="" />

              <div className="text-left xs:mt-11">
                <p className="font-medium text-marine-blue">Pro</p>
                <span className="text-cool-gray">
                  {watchBillingModel === "monthly" ? "$15/mo" : "$150/yr"}
                </span>
                {watchBillingModel === "yearly" && (
                  <p className="text-marine-blue text-sm mt-1">2 months free</p>
                )}
              </div>
              <RadioGroup.Indicator className="absolute top-0 left-0 w-full h-full bg-pastel-blue bg-opacity-20 border border-purplish-blue rounded-lg" />
            </RadioGroup.Item>
          </RadioGroup.Root>
          <Form.ErrorMessage field="planChoice" />
        </>
      )}
    />
  );
}
