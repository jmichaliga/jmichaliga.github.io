"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Clients from "@/components/clients";

import AnimatedBackground from "@/components/animated-bg";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200 relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      <Header onToggleDarkMode={() => {console.log("toggle dark mode")}} />
      <main className="container mx-auto px-4 py-8">
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
