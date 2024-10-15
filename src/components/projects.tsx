"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BatteryFull,
  ChefHatIcon,
  DollarSignIcon,
  ExternalLink,
  FileText,
  GraduationCap,
  MailCheckIcon,
  Star,
} from "lucide-react"
import Tilt from "react-parallax-tilt"
import { Badge } from "./ui/badge"

export default function Portfolio() {
  const projects = [
    {
      icon: <BatteryFull className="w-12 h-12" />,
      title: "Dashboard Platform Migration",
      description:
        "Migrated a large-scale e-commerce platform from a Redwood.js to Next.js, resulting in a 40% improvement in page load times.",
      link: "#",
      tags: ["Next.js", "Redwood.js"],
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "National Basketball Association Stats Dashboard",
      description:
        "Converted an Angular instance to a Next.js project, resulting in a 30% improvement in page load times and large increase in developer experience.",
      link: "#",
      tags: ["Next.js", "Angular", "React"],
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "GraphQL Implementation and Migration",
      description:
        "Built a headless CMS using Next.js and GraphQL, allowing for flexible content delivery across multiple platforms.",
      link: "#",
      tags: ["Next.js", "GraphQL"],
    },
    {
      icon: <DollarSignIcon className="w-12 h-12" />,
      title: "Mobile Financial Services",
      description:
        "Built a mobile financial services app using React Native and Firebase, allowing users to manage their finances on the go and receive financial advice from models trained on millions of data points.",
      link: "#",
      tags: ["React Native", "Firebase", "GraphQL"],
    },
    {
      icon: <MailCheckIcon className="w-12 h-12" />,
      title: "Mass Email Management",
      description:
        "Implemented React into a Ruby on Rails application to allow for a more responsive user experience, while also allowing for an increase indeveloper experience to ship features faster.",
      link: "#",
      tags: ["React", "Ruby on Rails"],
    },
    {
      icon: <ChefHatIcon className="w-12 h-12" />,
      title: "Hospitality Rewards and Recognition",
      description:
        "Designed and developed a hospitality rewards and recognition platform using Expo, a framework for building cross-platform mobile applications. The platform allows users to earn and redeem points for rewards, and to recognize each other for their contributions and providing alternative payment options.",
      link: "#",
      tags: ["React", "Next.js", "Expo", "Figma"],
    },
  ]

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4">
        Featured Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Tilt key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full">
                <CardHeader>
                  <CardTitle className="font-spaceGrotesk text-xl font-semibold text-black dark:text-white">
                    <span className="float-left mr-2">{project.icon}</span>{" "}
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4 font-spaceGrotesk">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-spaceGrotesk w-full"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  )
}
