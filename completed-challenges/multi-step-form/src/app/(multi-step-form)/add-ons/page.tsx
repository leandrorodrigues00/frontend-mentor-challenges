import { CheckboxAddons } from "@/components/pages-components/add-ons/CheckboxAddons";

export default function addOns() {
  return (
    <div className="max-w-[27.437rem] w-full flex flex-col">
      <div className="mt-11">
        <h1 className="text-4xl font-bold text-marine-blue leading-6">
          Pick add-ons
        </h1>
        <p className="text-cool-gray mt-5">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <CheckboxAddons />
    </div>
  );
}
