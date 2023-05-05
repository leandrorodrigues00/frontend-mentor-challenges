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
    altPath: "/thank-you",
  },
];

export function Aside() {
  const pathname = usePathname();

  return (
    <aside className="bg-aside-mobile xs:bg-aside-desktop bg-cover xs:w-[17.125rem] max-h-full h-[10.75rem]  xs:h-[35.5rem] xs:rounded-lg p-8 absolute xs:relative top-0 right-0 left-0 z-0">
      <ul className="flex xs:flex-col  justify-center gap-8  ">
        {asideData.map((data, index) => (
          <li key={index} className="flex gap-4 items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center  ${
                pathname === data.path || pathname === data.altPath
                  ? "bg-light-blue "
                  : "border text-white"
              } `}
            >
              {data.RoundedNumber}
            </div>
            <div>
              <span className="text-xs text-pastel-blue hidden xs:block">
                {data.Step}
              </span>
              <p className="text-white text-sm leading-4 hidden xs:block">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
