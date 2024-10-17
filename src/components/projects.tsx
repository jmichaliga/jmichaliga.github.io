"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AtomIcon,
  BadgePoundSterlingIcon,
  BandageIcon,
  BatteryFull,
  BuildingIcon,
  ChefHatIcon,
  DogIcon,
  DollarSignIcon,
  DumbbellIcon,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  MailCheckIcon,
  MinusCircleIcon,
  PillBottleIcon,
  Star,
  TrophyIcon,
} from "lucide-react";
import Tilt from "react-parallax-tilt";
import { Badge } from "./ui/badge";
import { Technology } from "@/types";

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  tags: Technology[];
};

export default function Projects({
  filters = [],
  clearFilters,
}: {
  filters: Technology[];
  clearFilters: () => void;
}) {
  const projects: Project[] = [
    {
      icon: <BatteryFull className="w-12 h-12" />,
      title: "Dashboard Platform Migration",
      description:
        "Migrated a dashboard from Redwood.js to a modern tech stack using Next.js, TypeScript, and TailwindCSS, enhancing code maintainability.",
      link: "#",
      tags: [
        "Next.js",
        "TypeScript",
        "Redwood.js",
        "AWS",
        "Elasticsearch",
        "Apollo",
        "GraphQL",
        "Kubernetes",
        "Docker",
        "Prisma",
      ],
    },
    {
      icon: <AtomIcon className="w-12 h-12" />,
      title: "Energy Company Customer Portal",
      description:
        "Debugged and migrated a Gatsby-based codebase to Next.js, improving maintainability with React hooks, context, and GraphQL codegen.",
      link: "#",
      tags: [
        "Gatsby",
        "React",
        "GraphQL",
        "TypeScript",
        "AWS",
        "Firebase",
        "Elasticsearch",
      ],
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Major League Stats Dashboard",
      description:
        "Converted an Angular application to Next.js, achieving a 30% improvement in page load times and migrating to TypeScript.",
      link: "#",
      tags: ["Next.js", "Angular", "React", "AWS", "TypeScript", "Javascript"],
    },
    {
      icon: <BuildingIcon className="w-12 h-12" />,
      title: "GraphQL Federation Implementation",
      description:
        "Led the implementation of GraphQL Federation to unify multiple codebases into a single API for flexible content delivery across platforms.",
      link: "#",
      tags: [
        "Next.js",
        "GraphQL",
        "Apollo",
        "TypeScript",
        "Kubernetes",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      icon: <TrophyIcon className="w-12 h-12" />,
      title: "Sports League Management System",
      description:
        "Developed a headless CMS with Next.js and GraphQL for multi-platform content delivery, integrating WordPress for content management.",
      link: "#",
      tags: [
        "Next.js",
        "GraphQL",
        "React",
        "Supabase",
        "PHP",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "MySQL",
      ],
    },
    {
      icon: <DollarSignIcon className="w-12 h-12" />,
      title: "Mobile Financial Services",
      description:
        "Created a mobile app using React Native and Firebase for financial management and personalized advice based on extensive data models.",
      link: "#",
      tags: [
        "React Native",
        "Firebase",
        "GraphQL",
        "Linear",
        "Figma",
        "Cloudflare",
        "Supabase",
        "TypeScript",
        "TailwindCSS",
        "Nest.js",
        "PostgreSQL",
      ],
    },
    {
      icon: <MailCheckIcon className="w-12 h-12" />,
      title: "Mass Email Management",
      description:
        "Integrated React into a Ruby on Rails app to enhance responsiveness, while updating libraries for security and maintainability.",
      link: "#",
      tags: [
        "React",
        "Ruby on Rails",
        "Elasticsearch",
        "TypeScript",
        "AWS",
        "Kubernetes",
        "Docker",
        "npm",
        "PostgreSQL",
      ],
    },
    {
      icon: <ChefHatIcon className="w-12 h-12" />,
      title: "Hospitality Rewards Platform",
      description:
        "Developed a rewards platform using Expo, enabling users to earn and redeem points while recognizing contributions with alternative payment options.",
      link: "#",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Expo",
        "Figma",
        "Vercel",
        "Supabase",
        "Firebase",
      ],
    },
    {
      icon: <HeartPulse className="w-12 h-12" />,
      title: "Health Tracking App",
      description:
        "Directed the development of an app with React Native and Firebase for tracking health metrics and providing personalized insights.",
      link: "#",
      tags: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "MongoDB",
        "Linear",
        "Cloudflare",
        "Supabase",
        "TailwindCSS",
        "Nest.js",
      ],
    },
    {
      icon: <DogIcon className="w-12 h-12" />,
      title: "Pet Insurance Platform",
      description:
        "Led the development of a pet insurance platform supporting cryptocurrency payments, utilizing React, Next.js, MongoDB, and Solidity.",
      link: "#",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "MongoDB",
        "Linear",
        "Cloudflare",
        "Supabase",
        "TailwindCSS",
        "Nest.js",
      ],
    },
    {
      icon: <DollarSignIcon className="w-12 h-12" />,
      title: "Financial Services Portal",
      description:
        "Modernized a financial services portal using vanilla JavaScript to enhance performance and scalability without external frameworks.",
      link: "#",
      tags: ["Javascript", "Jira", "Node.js", "npm"],
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Healthcare Insurance Marketplace",
      description:
        "Oversaw the development of a platform that connects advisors and clients, built with React, Next.js, and Prisma, hosted on AWS.",
      link: "#",
      tags: [
        "TypeScript",
        "React",
        "Next.js",
        "Prisma",
        "Linear",
        "AWS",
        "Supabase",
        "TailwindCSS",
      ],
    },
    {
      icon: <BadgePoundSterlingIcon className="w-12 h-12" />,
      title: "C2C Marketplace and Payment Platform",
      description:
        "Contributed to a direct-to-consumer marketplace using Gatsby and GraphQL for data retrieval and static page generation.",
      link: "#",
      tags: ["TypeScript", "Gatsby", "AWS", "Figma", "Apollo", "GraphQL"],
    },
    {
      icon: <DumbbellIcon className="w-12 h-12" />,
      title: "Wearable Devices App Localization",
      description:
        "Refactored a React app to TypeScript, implementing localization for LATAM markets and supporting a wearable device integration.",
      link: "#",
      tags: ["TypeScript", "React", "Firebase", "Javascript", "AWS"],
    },
    {
      icon: <PillBottleIcon className="w-12 h-12" />,
      title: "Pharmaceutical Investment Portal",
      description:
        "Developed a platform for clinical trial investments using Angular and a Node.js API, leveraging historical data for approval likelihood.",
      link: "#",
      tags: ["TypeScript", "React", "Firebase", "Javascript", "AWS"],
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      filters.length === 0 || project.tags.some((tag) => filters.includes(tag))
  );

  const filteredDisplay = (display: string) => {
    return (
      <div>
        Filtered Projects: [
        <span className="text-slate-600 dark:text-slate-400 text-sm relative -top-[2px]">
          {display}
        </span>
        ]
      </div>
    );
  };

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">
        {filters.length > 0
          ? filteredDisplay(filters.join(", ").toString())
          : "Featured Projects"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Tilt key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
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
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          filters.includes(tag)
                            ? "bg-blue-500 text-white"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                        }`}
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
      <div className="col-span-3">
        {filteredProjects.length === 0 && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="font-spaceGrotesk text-xl font-semibold text-black dark:text-white">
                  <span className="float-left mr-2">
                    <MinusCircleIcon className="w-12 h-12" />
                  </span>{" "}
                  Sorry!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  This technology is familiar and used in other projects, just
                  none that are featured here. Click the button below to view
                  all projects.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-spaceGrotesk w-full"
                  onClick={() => {
                    clearFilters();
                  }}
                >
                  View All Projects
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
