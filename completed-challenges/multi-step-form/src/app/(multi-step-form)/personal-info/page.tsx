import { Metadata } from 'next'

import { PersonalInfoForm } from '@/components/personal-info-form'

export const metadata: Metadata = {
  title: 'Personal Info',
}

export default function PersonalInfoPage() {
  return (
    <div className="z-10 mt-[-233px] flex flex-col rounded-lg bg-white p-4 xs:mt-0 xs:p-0">
      <div className="mt-11">
        <h1 className="text-4xl font-bold leading-6 text-marine-blue">
          Personal info
        </h1>
        <p className="mt-5 text-cool-gray">
          Please provide your name, email address, and phone number
        </p>
      </div>

      <PersonalInfoForm />
    </div>
  )
}
