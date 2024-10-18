"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options) + " EST");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="container mx-auto px-4 py-8 text-xs font-spaceGrotesk flex justify-between text-slate-600 dark:text-slate-400 relative z-10 mb-4 border-t border-slate-200 dark:border-slate-800">
      <p className="flex flex-col md:flex-row gap-2 items-center justify-center mx-auto text-left">
        <span>
          &copy; {new Date().getFullYear()} Justin Michaliga &mdash; Greenpoint,
          Brooklyn, USA
        </span>
        <span>{currentTime}</span>
      </p>
    </footer>
  );
}
