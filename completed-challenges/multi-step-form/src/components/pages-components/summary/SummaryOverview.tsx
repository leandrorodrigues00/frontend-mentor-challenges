import { NextStepButton } from "@/components/shared-components/NextStepButton";

import { PreviousStepButton } from "@/components/shared-components/PreviousStepButton";
import Link from "next/link";

export default function SummaryOverview() {
  return (
    <div className="mt-11 flex-1 grid pb-8">
      <div className="bg-magnolia rounded-lg p-5  self-baseline">
        <div className="w-full flex justify-between items-center border-b pb-5">
          <div>
            <p className="font-medium text-marine-blue text-lg">
              Arcade (Monthly)
            </p>
            <Link
              className="text-cool-gray underline hover:text-purplish-blue"
              href="/select-plan"
            >
              Change
            </Link>
          </div>

          <span className="font-bold text-marine-blue">$9/mo</span>
        </div>

        <div className="pt-5">
          <div className="flex justify-between mb-5">
            <p className="text-cool-gray">Online service</p>
            <span className="font-medium text-marine-blue">+$1/mo</span>
          </div>

          <div className="flex justify-between">
            <p className="text-cool-gray ">Larger storage</p>
            <span className="font-medium text-marine-blue">+$2/mo</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-5">
        <p className="text-cool-gray ">Total(per month)</p>
        <span className="text-purplish-blue text-xl font-medium">+$12/mo</span>
      </div>

      <div className="flex justify-between">
        <PreviousStepButton href={"/add-ons"} />
        <Link
          href={"/thank-you"}
          className="self-end justify-self-end bg-purplish-blue text-white px-4 py-2 rounded-md hover:opacity-70 duration-300"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
