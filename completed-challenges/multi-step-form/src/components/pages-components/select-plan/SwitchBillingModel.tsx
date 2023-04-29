"use client";
import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

export function SwitchBillingModel() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex justify-center w-full bg-pastel-blue bg-opacity-20 py-3 rounded-lg mt-9">
      <div className="flex items-center gap-6">
        <p
          className={`font-medium ${
            checked ? "text-cool-gray" : "text-marine-blue"
          }`}
        >
          Monthly
        </p>
        <Switch.Root
          className="w-[42px] h-[20px] bg-marine-blue rounded-full relative focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          id="airplane-mode"
          onCheckedChange={setChecked}
        >
          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
        <p
          className={`font-medium ${
            checked ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
