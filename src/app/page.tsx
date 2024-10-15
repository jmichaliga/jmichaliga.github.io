"use client"
import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Mail, ExternalLink, Moon, Sun } from "lucide-react"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { useTheme } from "next-themes"

import MobileNav from "@/components/mobile-nav"
import Technologies from "@/components/technologies"

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

  const { theme, setTheme } = useTheme()

  const brands = [
    { id: 1, name: "Gatorade" },
    { id: 2, name: "Google" },
    { id: 3, name: "Facebook" },
    { id: 4, name: "Nike" },
    { id: 5, name: "Verizon" },
    { id: 6, name: "Pepsi" },
    { id: 7, name: "Grey Goose" },
    { id: 8, name: "T-Mobile" },
  ]

  const companies = [
    { id: 1, name: "Northwestern Mutual" },
    { id: 2, name: "NBA" },
    { id: 3, name: "Spotify" },
    { id: 4, name: "Nickelodeon" },
  ]

  const agencies = [
    { id: 1, name: "RG/A" },
    { id: 2, name: "Ogilvy" },
    { id: 3, name: "Smart Design" },
  ]

  const projects = [
    {
      title: "E-commerce Platform Migration",
      description:
        "Migrated a large-scale e-commerce platform from a monolithic architecture to Next.js, resulting in a 40% improvement in page load times.",
      link: "#",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Developed a real-time analytics dashboard using Next.js and WebSockets, providing instant insights for business decisions.",
      link: "#",
    },
    {
      title: "Content Management System",
      description:
        "Built a headless CMS using Next.js and GraphQL, allowing for flexible content delivery across multiple platforms.",
      link: "#",
    },
  ]

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
            <h1 className="text-2xl font-bold">Justin Michaliga</h1>
            <MobileNav />
          </motion.div>

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
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Modern Web Development Expert
          </h2>
          <p className="text-xl mb-6">
            Specializing in Next.js migrations and building high-performance web
            applications.
          </p>

          <p className="text-sm mt-4">
            A seasoned Full-Stack JavaScript Engineer with over 15 years of
            experience building robust web and mobile applications. Expertise in
            delivering seamless user experiences and optimizing technical
            architectures across diverse industries. Proven leadership in
            managing cross-functional teams, delivering high-impact solutions
            for top-tier clients, and driving innovation through modern
            technologies.
          </p>

          <p className="text-sm mt-4">
            Full-Stack Javascript Engineer with over a decade of professional
            experience in agency, direct service, and in-house brand capacities
            — specializing in Interactive Design, Mobile/Web Development,
            GraphQL Adoption, Design Systems, & Immersive User Experiences.
            Based in Brooklyn, NYC 🍎.
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <Badge
              variant="outline"
              className="text-green-400 bg-green-400/20 border-2 border-green-400/20"
            >
              Available for Hire
            </Badge>
            <Badge variant="outline" className="text-slate-400 bg-slate-400/20">
              Remote
            </Badge>
            <Badge variant="outline" className="text-slate-400 bg-slate-400/20">
              Full-time
            </Badge>
          </div>
        </motion.section>

        <Technologies />

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Tilt key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-black dark:text-white">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Featured Clients</h3>
          <Tabs defaultValue="brands" className="w-[400px] mb-16">
            <TabsList>
              <TabsTrigger value="brands">Brands</TabsTrigger>
              <TabsTrigger value="companies">Companies</TabsTrigger>
              <TabsTrigger value="agencies">Agencies</TabsTrigger>
            </TabsList>

            <TabsContent value="brands">
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <Badge key={brand.id}>{brand.name}</Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="companies">
              <div className="flex flex-wrap gap-2">
                {companies.map((company) => (
                  <Badge key={company.id}>{company.name}</Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="agencies">
              <div className="flex flex-wrap gap-2">
                {agencies.map((agency) => (
                  <Badge key={agency.id}>{agency.name}</Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="mb-6">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <Button>
            Get In Touch <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-xs text-center text-gray-600 dark:text-gray-400 relative z-10">
        <p>&copy; {new Date().getFullYear()} Justin Michaliga.</p>
      </footer>
    </div>
  )
}
