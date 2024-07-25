import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import "./globals.css";

import NavBar from "../components/NavBar";

export const metadata = {
  title: "Termina One, Tech Wizards 🧙",
  description:
    "Termina One is a group of nerds founded by zuedev known for innovating the development of software and hardware for the tech industry. We are a team of professionals that have been working in the tech industry for over 10 years. We have worked with many companies and have helped them to develop their products and services.",
  icons: {
    icon: "/t1_logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "yellow" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          "min-h-screen bg-background antialiased bg-black text-white " +
          fontSans.variable
        }
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
