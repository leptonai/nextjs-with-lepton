import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js With Lepton AI",
  description: "A Next.js starter with the Lepton LLM API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"}>
      <main className="min-h-screen flex flex-col items-center">
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
          <Header/>
          <div className="flex-1 flex flex-col gap-20 w-full px-3">
            {children}
          </div>
        </div>
      </main>
      </body>
    </html>
  );
}
