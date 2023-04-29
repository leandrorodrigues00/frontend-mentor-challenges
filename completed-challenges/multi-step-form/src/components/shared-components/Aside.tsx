"use client";
import { usePathname } from "next/navigation";

const asideData = [
  {
    RoundedNumber: "1",
    Step: "STEP 1",
    description: "YOUR INFO",
    path: "/",
  },

  {
    RoundedNumber: "2",
    Step: "STEP 2",
    description: "SELECT PLAN",
    path: "/select-plan",
  },
  {
    RoundedNumber: "3",
    Step: "STEP 3",
    description: "ADD-ONS",
    path: "/add-ons",
  },
  {
    RoundedNumber: "4",
    Step: "STEP 4",
    description: "SUMMARY",
    path: "/summary",
  },
];

export function Aside() {
  const pathname = usePathname();

  return (
    <aside className="bg-aside-desktop max-w-full w-[17.125rem] max-h-full h-[35.5rem] rounded-lg p-8">
      <ul className="flex flex-col gap-8">
        {asideData.map((data, index) => (
          <li key={index} className="flex gap-4 items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center  ${
                pathname === data.path ? "bg-light-blue " : "border text-white"
              } `}
            >
              {data.RoundedNumber}
            </div>
            <div>
              <span className="text-xs text-pastel-blue">{data.Step}</span>
              <p className="text-white text-sm leading-4">{data.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
