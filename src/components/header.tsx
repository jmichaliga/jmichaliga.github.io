"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import MobileNav from "@/components/mobile-nav";

export default function Header({ onToggleDarkMode }: { onToggleDarkMode: (dark: boolean) => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="container mx-auto px-4 py-8 relative z-10">
      <nav className="flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image src="/images/jm.svg" alt="JM Logo" width={50} height={50} />
          </Link>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-spaceGrotesk">
            j13a: Justin Michaliga
          </h1>
        </motion.div>

        <MobileNav />
        <motion.div
          className="space-x-4 hidden md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="ghost" size="icon">
            <a href="https://github.com/jmichaliga" target="_blank">
              <Image
                src="/images/github.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/jmichaliga/" target="_blank">
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="https://x.com/jmichaliga" target="_blank">
              <Image
                src="/images/x.svg"
                alt="Twotter"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="mailto:justin@michaliga.com" target="_blank">
              <Image
                src="/images/gmail.svg"
                alt="Mail"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              onToggleDarkMode(theme === "dark");
            }}
            className="hover:scale-110 transition-transform"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </motion.div>
      </nav>
    </header>
  );
}
