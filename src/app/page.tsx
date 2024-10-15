"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"

import { Mail, Moon, Sun, Calendar } from "lucide-react"
import Image from "next/image"

import { PopupButton } from "react-calendly"
import { useTheme } from "next-themes"

import MobileNav from "@/components/mobile-nav"

import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Clients from "@/components/clients"

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.45), transparent 80%)`,
        }}
      />
    </div>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const calenderRef = useRef(null)

  const { theme, setTheme } = useTheme()

  const [currentTime, setCurrentTime] = useState("")
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      setCurrentTime(now.toLocaleTimeString("en-US", options) + " EST")
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 z-50 bg-accent transform-none"
        style={{ scaleX }}
      />
      <header className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/jm.svg" alt="JM Logo" width={50} height={50} />
            <h1 className="text-3xl font-bold font-spaceGrotesk">
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
              <a href="mailto:justin@jmichaliga.com" target="_blank">
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
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

      <main className="container mx-auto px-4 py-12 relative z-10">
        <a href="#about" />
        <About />

        <a href="#technologies" />
        <Technologies />

        <a href="#projects" />
        <Projects />

        <a href="#clients" />
        <Clients />

        <a href="#contact" />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="mb-6">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. If you&apos;re looking for
            consultation on your startup, a new project, or just want to say hi,
            feel free to get in touch.
          </p>
          <a href="mailto:justin@jmichaliga.com" target="_blank">
            <Button className="font-spaceGrotesk">
              Get In Touch <Mail className="ml-2 h-4 w-4" />
            </Button>
          </a>{" "}
          or{" "}
          <a href="https://calendly.com/jmichaliga" target="_blank">
            <Button className="font-spaceGrotesk">
              Schedule a Chat <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-xs font-spaceGrotesk flex justify-between text-gray-600 dark:text-gray-400 relative z-10">
        <p className="flex flex-col items-center text-left" ref={calenderRef}>
          <span>&copy; {new Date().getFullYear()} Justin Michaliga.</span>
          <span>New York City, USA 🇺🇸</span>
          <span>{currentTime}</span>
        </p>
        <PopupButton
          url="https://calendly.com/jmichaliga"
          className="bg-accent text-white px-4 py-2 rounded-md"
          rootElement={calenderRef?.current || window?.document?.body}
          text="📆 Click here to schedule a chat"
        />
      </footer>
    </div>
  )
}
