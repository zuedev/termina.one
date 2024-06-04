import { Noto_Sans as PrimaryFontImport } from "next/font/google";
import "./globals.css";

const PrimaryFont = PrimaryFontImport({
  subsets: ["latin"],
});

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  // essentials
  title: "Termina One, Tech Wizards 🧙",
  description:
    "Termina One is a group of nerds founded by zuedev known for innovating the development of software and hardware for the tech industry. We are a team of professionals that have been working in the tech industry for over 10 years. We have worked with many companies and have helped them to develop their products and services.",
  icons: {
    icon: "/t1_logo.png",
  },

  // misc
  generator: "Next.js",
  applicationName: "t1.zue.dev",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Alexander Pooley", url: "https://zue.dev" }],
  creator: "Alexander Pooley",
  publisher: "Alexander Pooley",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// https://nextjs.org/docs/app/api-reference/functions/generate-viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={PrimaryFont.className}>{children}</body>
    </html>
  );
}
