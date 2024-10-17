"use client";

import { useState, useEffect, useRef } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

import AnimatedBackground from "@/components/animated-bg";
import ProgressHeader from "@/components/progress-header";
export default function ContactPage() {

  const calenderRef = useRef(null);
  const [calRef, setCalRef] = useState<HTMLElement>();

  useEffect(() => {
    setCalRef(calenderRef?.current || window?.document?.body);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      <ProgressHeader />

      <Header onToggleDarkMode={() => {console.log("toggle dark mode")}} />
      <main className="container mx-auto px-4 py-8">
        <Contact calRef={calRef as HTMLElement} />
      </main>
      <Footer />
    </div>
  );
}
