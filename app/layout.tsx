import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

// Google Analytics
// import GoogleAnalytics from "./components/GoogleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";

// fontawsome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Font
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
      <head>
        <GoogleAnalytics gaId="G-YKNMHY3NF6" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta property="og:title" content="Justin Kim" />
        <meta
          property="og:description"
          content="Check out my portfolio and projects!"
        />
        <meta
          property="og:image"
          content="https://justintaekim.github.io/images/background.png"
        />
        <meta property="og:url" content="https://justintaekim.github.io" />
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
