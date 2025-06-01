import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "@/components/header";

import { cn } from "../lib/utils";

const roboto = Roboto({ weight: ["500", "400", "300"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job listings with filtering",
  description: "Site to filter jobs based on selected categories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, "bg-cyan-50")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
