import { AddOnsForm } from '@/components/add-ons-form'

export interface PageProps {}

export default function AddOnsPage() {
  return (
    <div className="z-10 mt-[-95px] flex w-full max-w-[27.437rem] flex-col rounded-lg bg-white p-4 xs2:mt-[-190px] xs:mt-0 xs:p-0">
      <div className="mt-11">
        <h1 className="text-4xl font-bold leading-6 text-marine-blue">
          Pick add-ons
        </h1>
        <p className="mt-5 text-cool-gray">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <AddOnsForm />
    </div>
  )
}
