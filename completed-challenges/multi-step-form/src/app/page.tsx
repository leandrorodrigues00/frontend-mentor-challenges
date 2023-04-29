import { UserInfoForm } from "@/components/pages-components/home/UserInfoForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mt-11">
        <h1 className="text-4xl font-bold text-marine-blue leading-6">
          Personal info
        </h1>
        <p className="text-cool-gray mt-5">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <UserInfoForm />
    </div>
  );
}
