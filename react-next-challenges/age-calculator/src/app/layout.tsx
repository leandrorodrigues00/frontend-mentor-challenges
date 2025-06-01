import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { DateBirthProvider } from "@/contexts/date-birth";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Age Calculator | Frontend Mentor challenge",
  description:
    "Enter your date of birth and see how old you are in terms of years, months and days.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "bg-gray-50 px-5")}>
        <DateBirthProvider>{children}</DateBirthProvider>
      </body>
    </html>
  );
}
