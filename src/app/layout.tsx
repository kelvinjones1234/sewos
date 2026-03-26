import type { Metadata } from "next";
import { ToastProvider } from "./(general)/context/ToastContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sewos",
  description:
    "A massive gathering of group of women in the entire south east of the federation.",
  // Add your logo paths here
  icons: {
    icon: "/logo.jpg", 
    apple: "/logo.jpg", // This shows up when users save your site to their iOS home screen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning prevents browser extensions like Grammarly from crashing your app */}
      <body suppressHydrationWarning>
        {/* Wrapping the app in ToastProvider gives all pages access to the useToast hook */}
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}