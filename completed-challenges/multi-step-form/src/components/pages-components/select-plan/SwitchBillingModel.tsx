"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function SwitchBillingModel() {
  return (
    <RadioGroup.Root
      className="flex justify-center w-full bg-pastel-blue bg-opacity-20 py-2 rounded-lg mt-9"
      defaultValue="monthly"
      aria-label="View density"
    >
      <div className="flex items-center justify-center gap-6">
        <label className="font-medium text-cool-gray" htmlFor="monthly">
          Monthly
        </label>

        <div className="flex w-[45px] h-[20px] bg-marine-blue rounded-full outline-none cursor-default">
          <RadioGroup.Item
            className="bg-transparent w-[25px] h-[20px] rounded-full outline-none cursor-default"
            value="monthly"
            id="monthly"
          >
            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[12px] after:rounded-[50%] after:bg-white" />
          </RadioGroup.Item>

          <RadioGroup.Item
            className="bg-transparent w-[25px] h-[20px] rounded-full outline-none cursor-default"
            value="yearly"
            id="yearly"
          >
            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[12px] after:rounded-[50%] after:bg-white" />
          </RadioGroup.Item>
        </div>

        <label className="font-medium text-cool-gray" htmlFor="yearly">
          Yearly
        </label>
      </div>
    </RadioGroup.Root>
  );
}
