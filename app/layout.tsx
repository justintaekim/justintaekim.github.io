import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin's Portfolio",
  description: "Learn more about me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.className}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="min-h-screen lg:flex">
          <Sidebar />
          <main className="flex-grow p-8 lg:ml-[33.3333%] lg:w-2/3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
