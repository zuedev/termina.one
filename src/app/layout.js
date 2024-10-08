import "./globals.css";

import { Inter } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import TopNav from "#components/TopNav/index.js";
import MainNav from "#components/MainNav/index.js";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Termina One, Tech Wizards 🧙",
  description:
    "Termina One, founded by zuedev, is a team of tech industry professionals with over 10 years of experience in software and hardware innovation. We've collaborated with numerous companies to develop their products and services.",
  icons: {
    icon: "/t1_logo.png",
  },
  verification: {
    google: "Qougi0o67Ig2NefIckpcyOuU2vZz5TSNbvARpmjbs0Y",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased dark:text-white dark:bg-black">
        <header className="border-b-2 border-black dark:border-white">
          <div className="container mx-auto p-4 space-y-4">
            <TopNav />
            <MainNav />
          </div>
        </header>

        <main className="container mx-auto p-4 p-4">{children}</main>

        <footer></footer>

        <GoogleAnalytics gaId="G-V231BMCVZG" />
      </body>
    </html>
  );
};
