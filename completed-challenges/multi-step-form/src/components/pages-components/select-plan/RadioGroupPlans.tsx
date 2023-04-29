/* eslint-disable @next/next/no-img-element */
"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function RadioGroupPlans() {
  return (
    <RadioGroup.Root className="flex gap-4">
      <RadioGroup.Item
        className="relative max-w-[8.75rem] w-full rounded-lg py-5 px-4 ring-1 ring-inset ring-light-gray hover:ring-purplish-blue duration-300"
        value="arcade"
        id="r1"
      >
        <img src="/icons/icon-arcade.svg" alt="" />

        <div className="text-left mt-11">
          <p className="font-medium text-marine-blue">Arcade</p>
          <span className="text-cool-gray">$9/mo</span>
        </div>

        <RadioGroup.Indicator className="absolute top-0 left-0 w-full h-full bg-pastel-blue bg-opacity-20 border border-purplish-blue rounded-lg" />
      </RadioGroup.Item>

      <RadioGroup.Item
        className="relative max-w-[8.75rem] w-full rounded-lg py-5 px-4 ring-1 ring-inset ring-light-gray hover:ring-purplish-blue duration-300"
        value="advanced"
        id="r2"
      >
        <img src="/icons/icon-advanced.svg" alt="" />

        <div className="text-left mt-11">
          <p className="font-medium text-marine-blue">Advanced</p>
          <span className="text-cool-gray">$12/mo</span>
        </div>
        <RadioGroup.Indicator className="absolute top-0 left-0 w-full h-full bg-pastel-blue bg-opacity-20 border border-purplish-blue rounded-lg" />
      </RadioGroup.Item>

      <RadioGroup.Item
        className="relative max-w-[8.75rem] w-full rounded-lg py-5 px-4 ring-1 ring-inset ring-light-gray hover:ring-purplish-blue duration-300"
        value="pro"
        id="r3"
      >
        <img src="/icons/icon-pro.svg" alt="" />

        <div className="text-left mt-11">
          <p className="font-medium text-marine-blue">Pro</p>
          <span className="text-cool-gray">$15/mo</span>
        </div>
        <RadioGroup.Indicator className="absolute top-0 left-0 w-full h-full bg-pastel-blue bg-opacity-20 border border-purplish-blue rounded-lg" />
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
