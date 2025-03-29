import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const instrumentSans = localFont({
  src: "./fonts/InstrumentSans.ttf",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Devlinks - A link sharing platform for developers",
  description:
    "Devlinks is a link sharing platform for developers, allowing you to share and discover useful links. Join us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} font-instrument-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
