import { Ubuntu } from "next/font/google";

import "./globals.css";

import { WizardFormContextProvider } from "./context/WizardFormContext";
import { Aside } from "@/components/shared-components/Aside";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Multi-Step Form",
  description: "Frontend Mentor multi-step form challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <WizardFormContextProvider>
          <div className="bg-magnolia min-h-screen flex items-center justify-center p-3">
            <main className="xs:bg-white max-w-[58.75rem] w-full p-4 flex gap-8 md:gap-[6.25rem] flex-col xs:flex-row rounded-lg   -sm:items-center ">
              <Aside />
              {children}
            </main>
          </div>
        </WizardFormContextProvider>
      </body>
    </html>
  );
}
