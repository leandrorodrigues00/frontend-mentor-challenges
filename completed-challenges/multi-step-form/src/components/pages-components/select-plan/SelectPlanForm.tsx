import { NextStepButton } from "@/components/shared-components/NextStepButton";
import { RadioGroupPlans } from "./RadioGroupPlans";
import { SwitchBillingModel } from "./SwitchBillingModel";
import { PreviousStepButton } from "@/components/shared-components/PreviousStepButton";

export default function SelectPlanForm() {
  return (
    <div className="mt-11 flex-1 grid pb-8">
      <RadioGroupPlans />
      <SwitchBillingModel />

      <div className="flex justify-between">
        <PreviousStepButton href={"/"} />
        <NextStepButton href={"/add-ons"} />
      </div>
    </div>
  );
}
