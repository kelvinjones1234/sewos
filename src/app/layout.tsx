import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sewos",
  description:
    "A massive gathering of group of women in the entire south east of the federation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
