import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata: Metadata = {
  title: {
    default: "philosophydusting",
    template: "%s | philosophydusting",
  },
  description: "Philosophy writings of Indic perspective",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
