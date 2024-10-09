"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [display, setDisplay] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName.includes("dashboard")) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  });
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {display && <Header />}
        <main className="flex-grow">
          <Suspense fallback={"loading.."}> {children}</Suspense>
        </main>
        {display && <Footer />}
      </body>
    </html>
  );
}
