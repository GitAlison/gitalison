import "./globals.css";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import PrelineScript from "./components/PrelineScript";
import Shapes from "./components/Shapes";
import HeaderPage from "./components/HeaderPage";

const oxanium = Oxanium({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alison Aguiar",
  description: "A real good developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable}  antialiased relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light`}
      >
        <div className="mx-auto flex max-w-8xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6" >
          <HeaderPage />
          <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {children}
          </main>
        </div>
        <Shapes />
      </body>

      <PrelineScript />
    </html>
  );
}
