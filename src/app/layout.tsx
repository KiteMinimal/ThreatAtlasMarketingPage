"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "@/features/landing/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  // initial load: wait until window "load" fires, then hide loader
  useEffect(() => {
    function handleWindowLoad() {
      // small delay so loader shows briefly even on fast loads (optional)
      setTimeout(() => setIsLoading(false), 300);
    }

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
      return () => window.removeEventListener("load", handleWindowLoad);
    }
  }, []);

  // route change loader: show loader briefly whenever pathname changes
  useEffect(() => {
    // don't show for the very first render if already hidden above
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 350); // adjust duration
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Loader overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
            <div className="max-w-xs w-full px-6 py-8">
              <Loader />
            </div>
          </div>
        )}
         <div className={isLoading ? "pointer-events-none" : ""}>{children}</div>
      </body>
    </html>
  );
}
