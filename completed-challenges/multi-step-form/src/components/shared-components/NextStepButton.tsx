import { ButtonHTMLAttributes } from "react";

export function NextStepButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="self-end justify-self-end bg-marine-blue text-white px-4 py-2 rounded-md hover:opacity-70 duration-300"
      {...props}
    >
      Next Step
    </button>
  );
}
