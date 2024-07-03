import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-screen lg:flex">
          <aside className="flex-shrink-0 bg-gray-400 text-white p-4 lg:w-1/3 lg:h-screen lg:fixed">
            <div className="flex flex-col items-center justify-center h-full">
              <Image
                src="/images/avatar.jpg"
                alt="Profile Picture"
                className="rounded-full"
                width={150}
                height={150}
              />
              <h1 className="text-3xl font-bold mt-4">I am Strata</h1>
              <p className="text-center mt-2">
                A super simple responsive site template freebie crafted by HTML5
                UP.
              </p>
              <p className="text-center mt-2">
                <a href="https://html5up.net">HTML5 UP</a>
              </p>
            </div>
          </aside>
          <main className="flex-grow p-8 lg:ml-[33.3333%] lg:w-2/3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
