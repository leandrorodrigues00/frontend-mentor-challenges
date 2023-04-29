import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="text-sm text-marine-blue font-medium flex items-center justify-between"
      {...props}
    />
  );
}
