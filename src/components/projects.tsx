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
        "Migrated a dashboard platform from a Redwood.js instance and modernized the tech stack. This included the use of Next.js, TypeScript, and TailwindCSS to create a more maintainable codebase.",
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
        "Joined an existing codebase that was built in Gatsby and utilized GraphQL endpoints to fetch data. Debugged and fixed critical bugs in the codebase. This included the use of React hooks, React context, and GraphQL codegen to ensure a maintainable codebase. Helped migrate the codebase to Next.js and modernize the tech stack.",
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
        "Converted an Angular instance to a Next.js project, resulting in a 30% improvement in page load times and large increase in developer experience. Led the migration of the codebase to TypeScript in order to modernize the tech stack.",
      link: "#",
      tags: ["Next.js", "Angular", "React", "AWS", "TypeScript", "Javascript"],
    },
    {
      icon: <BuildingIcon className="w-12 h-12" />,
      title: "GraphQL Federation Implementation",
      description:
        "Oversaw the implementation of GraphQL Federation, for a company that wanted to unify multiple codebases under a single GraphQL API, allowing for flexible content delivery across multiple platforms utilizing a microservice architecture based on several real estate sources.",
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
        "Built a headless CMS using Next.js and GraphQL, allowing for flexible content delivery across multiple platforms. Articles were written in Wordpress and imported using the WP-GraphQL plugin to generate a GraphQL API and static pages on buildtime.",
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
        "Built a mobile financial services app using React Native and Firebase, allowing users to manage their finances on the go and receive financial advice from models trained on millions of data points.",
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
        "Implemented React into a Ruby on Rails application to allow for a more responsive user experience, while also allowing for an increase indeveloper experience to ship features faster. Several libraries and javascript dependencies were updated to the latest versions to ensure security and stability as well as maintainability.",
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
      title: "Hospitality Rewards and Recognition",
      description:
        "Designed and developed a hospitality rewards and recognition platform using Expo, a framework for building cross-platform mobile applications. The platform allows users to earn and redeem points for rewards, and to recognize each other for their contributions and providing alternative payment options.",
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
      title: "Health Tracking and Monitoring App",
      description:
        "Oversaw the development of a health tracking and monitoring app using React Native and Firebase, allowing users to track their health metrics and receive personalized recommendations, while also subscribing to a blood testing service to receive lab results and health insights.",
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
        "Oversaw the development of a pet insurance platform that accepted cryptocurrencies as payment for it's policies. This went live on the Ethereum blockchain as well as the state of Illinois. This was built using React, Next.js, MongoDB, and Solidity.",
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
        "Joined an existing team to update and modernize a financial services portal that used native javascript modules to fetch and display data. No frameworks were allowed in this codebase, so vanilla javascript was utilized to build highend production features for high traffic users.",
      link: "#",
      tags: ["Javascript", "Jira", "Node.js", "npm"],
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Healthcare Insurance Marketplace",
      description:
        "Oversaw and led the development of a healthcare insurance platform which matched advisors with clients based on their needs and goals. This was built using React, Next.js, Prisma, and hosted on Vercel eventually migrating to AWS.",
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
        "Joined a team to use existing patterns and APIs to build a Direct to Consumer marketplace within several verticals. Gatsby utilized the existing GraphQL API to fetch data and build static pages on buildtime. Higher level features included maintaining a design system for multiple variants of brands and products as well as locales.",
      link: "#",
      tags: ["TypeScript", "Gatsby", "AWS", "Figma", "Apollo", "GraphQL"],
    },
    {
      icon: <DumbbellIcon className="w-12 h-12" />,
      title: "Localization of Wearable Devices App",
      description:
        "Refactored an existing React Application to TypeScript as well as implemented a localization system for the app to support multiple languages for LATAM regions. This app supported a wearable device that would send data to the app and the user would receieve personalized recommendations and insights based on their data.",
      link: "#",
      tags: ["TypeScript", "React", "Firebase", "Javascript", "AWS"],
    },
    {
      icon: <PillBottleIcon className="w-12 h-12" />,
      title: "Portal for Pharmaceutical Investment",
      description:
        "Built an application for a pharmaceutical company to allow for the investment in clinical trials. This application was built using Angular, and hosted on Heroku. It utilized a Node.js API that used over 30 years of historical data to power the recommendations of likelihood of approval for upcoming drugs.",
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
      <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
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
