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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      <ProgressHeader />

      <Header onToggleDarkMode={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <Contact calRef={calRef as HTMLElement} />
      </main>
      <Footer />
    </div>
  );
}
