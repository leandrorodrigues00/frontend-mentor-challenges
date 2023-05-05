"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { NextStepButton } from "@/components/shared-components/NextStepButton";
import { PreviousStepButton } from "@/components/shared-components/PreviousStepButton";
import { RadioGroupPlans } from "./RadioGroupPlans";
import { SwitchBillingModel } from "./SwitchBillingModel";

const selectPlanSchema = z.object({
  planChoice: z.enum(["arcade", "advanced", "pro"], {
    required_error: "You must select a valid plan",
  }),
  billingModel: z.enum(["monthly", "yearly"], {
    required_error: "You must select a valid billing mode",
  }),
});

type selectedPlanData = z.infer<typeof selectPlanSchema>;

export default function SelectPlanForm() {
  const router = useRouter();
  const { formData, setFormData } = useWizardFormContext();

  const selectedPlanForm = useForm<selectedPlanData>({
    resolver: zodResolver(selectPlanSchema),
    defaultValues: {
      billingModel: formData.billingModel || "monthly",
      planChoice: formData.planChoice,
    },
  });

  const { handleSubmit } = selectedPlanForm;

  function handleNextStep(data: selectedPlanData) {
    setFormData({
      ...formData,
      planChoice: data.planChoice,
      billingModel: data.billingModel,
    });

    router.push("/add-ons");
  }

  return (
    <FormProvider {...selectedPlanForm}>
      <form className="mt-11 flex-1 grid pb-8">
        <RadioGroupPlans />
        <SwitchBillingModel />

        <div className="flex justify-between">
          <PreviousStepButton href={"/"} />
          <NextStepButton onClick={handleSubmit(handleNextStep)} />
        </div>
      </form>
    </FormProvider>
  );
}
