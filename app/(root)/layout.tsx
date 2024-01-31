'use client'
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkmode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`bg-primary-foreground flex flex-col ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
      <main className="flex-1">{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
