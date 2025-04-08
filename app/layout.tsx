import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

const instrumentSans = localFont({
  src: "./fonts/InstrumentSans.ttf",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Devlinks - A link sharing platform for developers",
  description:
    "Devlinks is a link sharing platform for developers, allowing you to share your social links. Join us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} font-instrument-sans bg-off-white antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
