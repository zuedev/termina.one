import "./globals.css";

import { Inter } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import TopBar from "#components/TopBar/index.js";
import NavBar from "#components/NavBar/index.js";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Termina One, Tech Wizards 🧙",
  description:
    "Termina One is a group of nerds founded by zuedev known for innovating the development of software and hardware for the tech industry. We are a team of professionals that have been working in the tech industry for over 10 years. We have worked with many companies and have helped them to develop their products and services.",
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
      <body className="antialiased bg-[yellow]">
        <header>
          <TopBar />
          {/* <NavBar /> */}
        </header>
        <main>{children}</main>
        <footer>
          <span className="fixed bottom-0 left-0 w-full p-4 text-right text-sm">
            Termina One is a venture by <a href="https://zue.dev">zue.dev</a>
          </span>
        </footer>
        <GoogleAnalytics gaId="G-V231BMCVZG" />
      </body>
    </html>
  );
};
