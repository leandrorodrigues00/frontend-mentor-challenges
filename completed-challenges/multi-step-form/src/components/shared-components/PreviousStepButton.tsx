import Link, { LinkProps } from "next/link";

export function PreviousStepButton(props: LinkProps) {
  return (
    <Link
      className="self-end mt-[70px] text-cool-gray font-medium p-1 hover:text-marine-blue duration-300"
      {...props}
    >
      Go Back
    </Link>
  );
}
