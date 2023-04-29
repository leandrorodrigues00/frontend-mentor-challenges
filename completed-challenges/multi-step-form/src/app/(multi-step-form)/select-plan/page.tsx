import SelectPlanForm from "@/components/pages-components/select-plan/SelectPlanForm";

export default function SelectPlan() {
  return (
    <div className="max-w-[27.437rem] w-full flex flex-col">
      <div className="mt-11">
        <h1 className="text-4xl font-bold text-marine-blue leading-6">
          Select your plan
        </h1>
        <p className="text-cool-gray mt-5">
          You have option of monthly or yearly billing.
        </p>
      </div>
      <SelectPlanForm />
    </div>
  );
}
