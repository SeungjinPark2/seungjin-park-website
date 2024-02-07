import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.scss";

const font = Quicksand({ weight: ['400'], preload: false });

export const metadata: Metadata = {
  title: "seungjin park portfolio",
  description: "handmade portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
