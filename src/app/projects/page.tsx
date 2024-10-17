"use client";

import { useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

import AnimatedBackground from "@/components/animated-bg";
import { Technology } from "@/types";

export default function ProjectsPage() {
  const [selectedFilters, setSelectedFilters] = useState<Technology[]>([]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      <Header onToggleDarkMode={() => {console.log("toggle dark mode")}} />
      <main className="container mx-auto px-4 py-8">
        <Technologies onFilterChange={setSelectedFilters} />
        <Projects
          filters={selectedFilters}
          clearFilters={() => setSelectedFilters([])}
        />
      </main>
      <Footer />
    </div>
  );
}
