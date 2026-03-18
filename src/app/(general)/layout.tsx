import React from "react";
import Navbar from "./components/Navbar";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="">
        <Navbar />
        {children}
      </main>
  );
}