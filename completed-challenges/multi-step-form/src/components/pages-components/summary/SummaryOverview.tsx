"use client";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { PreviousStepButton } from "@/components/shared-components/PreviousStepButton";
import Link from "next/link";

type Addons = {
  onlineService?: number;
  largerStorage?: number;
  customizableProfile?: number;
  total: number;
};

function getPlanValue(
  planChoice: "arcade" | "advanced" | "pro",
  billingModel: string
) {
  const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  };

  if (billingModel === "yearly") {
    return planPrices[planChoice] * 10;
  } else {
    return planPrices[planChoice];
  }
}

function getAddOnsValue(
  onlineService: boolean,
  largerStorage: boolean,
  customizableProfile: boolean,
  billingModel: string
) {
  const addons: Addons = { total: 0 };

  if (onlineService) {
    addons.onlineService = billingModel === "monthly" ? 1 : 10;
    addons.total += addons.onlineService;
  }

  if (largerStorage) {
    addons.largerStorage = billingModel === "monthly" ? 2 : 20;
    addons.total += addons.largerStorage;
  }

  if (customizableProfile) {
    addons.customizableProfile = billingModel === "monthly" ? 2 : 20;
    addons.total += addons.customizableProfile;
  }

  return addons;
}

function formatPrice(value: number, billingModel: string) {
  const divider = billingModel === "monthly" ? "/mo" : "/yr";
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return `${formattedValue.replace(".00", "")}${divider}`;
}

export default function SummaryOverview() {
  const { formData } = useWizardFormContext();

  const planValue = getPlanValue(formData.planChoice, formData.billingModel);
  const addOnsValue = getAddOnsValue(
    formData.onlineService,
    formData.largerStorage,
    formData.customizableProfile,
    formData.billingModel
  );

  return (
    <div className="mt-11 flex-1 grid pb-8">
      <div className="bg-magnolia rounded-lg p-5 pb-2 self-baseline ">
        <div className="w-full flex justify-between items-center border-b pb-5">
          <div>
            <p className="font-medium text-marine-blue text-lg capitalize">
              {formData.planChoice} ({formData.billingModel})
            </p>
            <Link
              className="text-cool-gray underline hover:text-purplish-blue"
              href="/select-plan"
            >
              Change
            </Link>
          </div>

          <span className="font-bold text-marine-blue">
            {formatPrice(planValue || 0, formData.billingModel)}
          </span>
        </div>

        <div className="pt-4 flex flex-col gap-3">
          {formData.onlineService && (
            <div className="flex justify-between  ">
              <p className="text-cool-gray">Online service</p>
              <span className="font-medium text-marine-blue">
                +{" "}
                {formatPrice(
                  addOnsValue.onlineService || 0,
                  formData.billingModel
                )}
              </span>
            </div>
          )}

          {formData.largerStorage && (
            <div className="flex justify-between">
              <p className="text-cool-gray ">Larger storage</p>
              <span className="font-medium text-marine-blue">
                +{" "}
                {formatPrice(
                  addOnsValue.largerStorage || 0,
                  formData.billingModel
                )}
              </span>
            </div>
          )}

          {formData.customizableProfile && (
            <div className="flex justify-between">
              <p className="text-cool-gray ">Customiable Profile</p>
              <span className="font-medium text-marine-blue">
                +{" "}
                {formatPrice(
                  addOnsValue.customizableProfile || 0,
                  formData.billingModel
                )}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between px-5 mt-3">
        <p className="text-cool-gray ">Total(per month)</p>
        <span className="text-purplish-blue text-xl font-medium">
          +
          {formatPrice(
            planValue + addOnsValue.total || 0,
            formData.billingModel
          )}
        </span>
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
