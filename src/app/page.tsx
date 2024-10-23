"use client";

import { useState, useEffect, useRef } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

import About from "@/components/about";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
// import Clients from "@/components/clients";
import Contact from "@/components/contact";

import AnimatedBackground from "@/components/animated-bg";
import ProgressHeader from "@/components/progress-header";
import PulseBg from "@/components/pulse-bg";

import { Technology } from "@/types";

export default function Portfolio() {
  const [selectedFilters, setSelectedFilters] = useState<Technology[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const calenderRef = useRef(null);
  const [calRef, setCalRef] = useState<HTMLElement>();
  useEffect(() => {
    setCalRef(calenderRef?.current || window?.document?.body);
  }, []);

  return (
    <>
      <PulseBg dark={darkMode} />
      <div
        ref={calenderRef}
        className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200 relative overflow-hidden transition-colors duration-300"
      >
        <AnimatedBackground />
        <ProgressHeader />

        <Header onToggleDarkMode={setDarkMode} />

        <main className="container mx-auto p-4 relative z-10">
          <a href="#about" />
          <About />

          <a href="#technologies" />
          <Technologies onFilterChange={setSelectedFilters} />

          <a href="#projects" />
          <Projects
            filters={selectedFilters}
            clearFilters={() => setSelectedFilters([])}
          />

          {/* 
          <a href="#clients" />
          <Clients /> 
          */}

          <a href="#contact" />
          <Contact calRef={calRef as HTMLElement} />
        </main>

        <Footer />
      </div>
    </>
  );
}
