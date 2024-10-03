import "./globals.css";

import { Inter } from "next/font/google";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import NavBar from "#components/NavBar/index.js";

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
      <body className="antialiased">
        <header className="container mx-auto p-4">
          <NavBar />
        </header>
        <main>{children}</main>
        <footer className="mt-8">
          <span className="fixed bottom-0 w-full bg-black text-white p-2 text-center text-xs">
            Termina One is a venture by <a href="https://zue.dev">zue.dev</a>
          </span>
        </footer>
        <GoogleAnalytics gaId="G-V231BMCVZG" />
      </body>
    </html>
  );
};
