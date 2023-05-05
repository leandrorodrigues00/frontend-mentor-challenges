/* eslint-disable @next/next/no-img-element */
export default function ThankYou() {
  return (
    <div className="max-w-[27.437rem] w-full flex flex-col items-center justify-center gap-8">
      <img src="/icons/icon-thank-you.svg" alt="" />
      <span className="text-marine-blue font-bold text-4xl">Thank you!</span>
      <p className="text-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
