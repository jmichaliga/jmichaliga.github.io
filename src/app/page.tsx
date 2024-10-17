"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "@/components/header";
import Footer from "@/components/footer";

import About from "@/components/about";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Clients from "@/components/clients";
import Contact from "@/components/contact";

import AnimatedBackground from "@/components/animated-bg";
import ProgressHeader from "@/components/progress-header";
import PulseBg from "@/components/pulse-bg";

import { Technology } from "@/types";

export default function Portfolio() {
  const calenderRef = useRef(null);
  const [calRef, setCalRef] = useState<HTMLElement>();

  const [selectedFilters, setSelectedFilters] = useState<Technology[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setCalRef(calenderRef?.current || window?.document?.body);
  }, []);

  return (
    <>
      <PulseBg dark={darkMode} />
      <div
        ref={calenderRef}
        className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      >
        <AnimatedBackground />
        <ProgressHeader />

        <Header onToggleDarkMode={setDarkMode} />

        <main className="container mx-auto px-4 py-12 relative z-10">
          <a href="#about" />
          <About />

          <a href="#technologies" />
          <Technologies onFilterChange={setSelectedFilters} />

          <a href="#projects" />
          <Projects
            filters={selectedFilters}
            clearFilters={() => setSelectedFilters([])}
          />

          <a href="#clients" />
          <Clients />

          <a href="#contact" />
          <Contact calRef={calRef as HTMLElement} />
        </main>

        <Footer />
      </div>
    </>
  );
}
