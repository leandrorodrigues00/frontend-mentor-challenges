import SelectPlanForm from "@/components/pages-components/select-plan/SelectPlanForm";

export default function SelectPlan() {
  return (
    <div className="max-w-[27.437rem] w-full flex flex-col bg-white p-4 xs:p-0 mt-[-115px] xs:mt-0 z-10 rounded-lg">
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
