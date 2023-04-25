import "./globals.css";

export const metadata = {
  title: "IP address Tracker",
  description: "Tracking locations",
};

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
