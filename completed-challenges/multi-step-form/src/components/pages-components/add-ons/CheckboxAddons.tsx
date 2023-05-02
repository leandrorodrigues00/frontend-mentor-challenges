/* eslint-disable @next/next/no-img-element */
"use client";

import { NextStepButton } from "@/components/shared-components/NextStepButton";
import { PreviousStepButton } from "@/components/shared-components/PreviousStepButton";
import * as Checkbox from "@radix-ui/react-checkbox";

const dataCheckboxAddons = [
  {
    id: "onlineService",
    addonName: "Online Service",
    addonDescription: "Acess to multiplayer games",
    addonPrice: "+$1/mo",
  },
  {
    id: "largerStorage",
    addonName: "Larger storage",
    addonDescription: "Extra 1TB of cloud save",
    addonPrice: "+$2/mo",
  },

  {
    id: "customizableProfile",
    addonName: "Customizable Profile",
    addonDescription: "Custom theme on your profile",
    addonPrice: "+$2/mo",
  },
];

export function CheckboxAddons() {
  return (
    <div className="mt-11 flex-1 grid pb-8">
      <form className="flex flex-col gap-[15px]">
        {dataCheckboxAddons.map((data, index) => (
          <div
            key={index}
            className="flex gap-6 items-center px-6 py-4 border border-light-gray hover:border-purplish-blue rounded-lg [&:has(button[data-state='checked'])]:bg-pastel-blue [&:has(button[data-state='checked'])]:bg-opacity-20 [&:has(button[data-state='checked'])]:border-purplish-blue"
          >
            <Checkbox.Root
              className="flex h-[25px] w-[25px] rounded-[4px] border border-cool-gray data-[state=checked]:border-0  "
              id={data.id}
            >
              <Checkbox.Indicator className="bg-purplish-blue h-full w-full rounded-[4px] flex items-center justify-center group">
                <img src="/icons/icon-checkmark.svg" alt="" />
              </Checkbox.Indicator>
            </Checkbox.Root>

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

            <span className="text-purplish-blue">{data.addonPrice}</span>
          </div>
        ))}
      </form>

      <div className="flex justify-between">
        <PreviousStepButton href={"/select-plan"} />
        <NextStepButton href={"/summary"} />
      </div>
    </div>
  );
}
