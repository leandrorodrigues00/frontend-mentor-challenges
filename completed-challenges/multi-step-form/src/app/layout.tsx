import { Ubuntu } from "next/font/google";

import "./globals.css";
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
        <div className="bg-magnolia min-h-screen flex items-center justify-center p-3">
          <main className="bg-white max-w-[58.75rem] w-full p-4 flex gap-[6.25rem] rounded-lg">
            <Aside />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
