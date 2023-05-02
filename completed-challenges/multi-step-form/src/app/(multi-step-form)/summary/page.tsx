import SummaryOverview from "@/components/pages-components/summary/SummaryOverview";

export default function Summary() {
  return (
    <div className="max-w-[27.437rem] w-full flex flex-col">
      <div className="mt-11">
        <h1 className="text-4xl font-bold text-marine-blue leading-6">
          Finishing up
        </h1>
        <p className="text-cool-gray mt-5">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <SummaryOverview />
    </div>
  );
}
