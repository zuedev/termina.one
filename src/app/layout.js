import "./globals.css";

import { Noto_Sans as FontSans } from "next/font/google";

import NavBar from "#components/zuedev/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
});

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
};

export default ({ children }) => {
  return (
    <html lang="en" className={fontSans.className}>
      <body className="bg-[yellow]">
        <NavBar />
        {children}
      </body>
    </html>
  );
};
