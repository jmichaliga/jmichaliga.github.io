"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Technology, technologies } from "@/types";
import { X } from "lucide-react";
const TechnologyIcon = ({ name }: { name: string }) => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Next.js": (
      <Image src="/images/next.svg" alt="Next.JS" width={20} height={20} />
    ),
    React: <Image src="/images/react.svg" alt="React" width={20} height={20} />,
    TypeScript: (
      <Image
        src="/images/typescript.svg"
        alt="TypeScript"
        width={20}
        height={20}
      />
    ),
    "Tailwind CSS": (
      <Image
        src="/images/tailwindcss.svg"
        alt="Tailwind CSS"
        width={20}
        height={20}
      />
    ),
    "Node.js": (
      <Image src="/images/node.svg" alt="Node.js" width={20} height={20} />
    ),
    Apollo: (
      <Image
        src="/images/apollographql.svg"
        alt="Apollo"
        width={20}
        height={20}
      />
    ),
    Gatsby: (
      <Image src="/images/gatsby.svg" alt="Gatsby" width={20} height={20} />
    ),
    GraphQL: (
      <Image src="/images/graphql.svg" alt="GraphQL" width={20} height={20} />
    ),
    PostgreSQL: (
      <Image
        src="/images/postgresql.svg"
        alt="PostgreSQL"
        width={20}
        height={20}
      />
    ),
    AWS: <Image src="/images/aws.svg" alt="AWS" width={20} height={20} />,
    Docker: (
      <Image src="/images/docker.svg" alt="Docker" width={20} height={20} />
    ),
    Kubernetes: (
      <Image
        className="w-5 h-5"
        src="/images/kubernetes.svg"
        alt="Kubernetes"
        width={20}
        height={20}
      />
    ),
    ThreeJS: (
      <Image
        src="/images/threedotjs.svg"
        alt="ThreeJS"
        width={20}
        height={20}
      />
    ),
    Expo: <Image src="/images/expo.svg" alt="Expo" width={20} height={20} />,
    Firebase: (
      <Image src="/images/firebase.svg" alt="Firebase" width={20} height={20} />
    ),
    Figma: <Image src="/images/figma.svg" alt="Figma" width={20} height={20} />,
    Supabase: (
      <Image src="/images/supabase.svg" alt="Supabase" width={20} height={20} />
    ),
    TailwindCSS: (
      <Image
        src="/images/tailwindcss.svg"
        alt="TailwindCSS"
        width={20}
        height={20}
      />
    ),
    npm: <Image src="/images/npm.svg" alt="npm" width={20} height={20} />,
    Vercel: (
      <Image src="/images/vercel.svg" alt="Vercel" width={20} height={20} />
    ),
    Cloudflare: (
      <Image
        src="/images/cloudflare.svg"
        alt="Cloudflare"
        width={20}
        height={20}
      />
    ),
    MongoDB: (
      <Image src="/images/mongodb.svg" alt="MongoDB" width={20} height={20} />
    ),
    MySQL: <Image src="/images/mysql.svg" alt="MySQL" width={20} height={20} />,
    Elasticsearch: (
      <Image
        src="/images/elastic.svg"
        alt="Elasticsearch"
        width={20}
        height={20}
      />
    ),
    Amplify: (
      <Image
        src="/images/awsamplify.svg"
        alt="Amplify"
        width={20}
        height={20}
      />
    ),
    Angular: (
      <Image src="/images/angular.svg" alt="Angular" width={20} height={20} />
    ),
    "React Native": (
      <Image
        src="/images/react.svg"
        alt="React Native"
        width={20}
        height={20}
      />
    ),
    Express: (
      <Image src="/images/express.svg" alt="Express" width={20} height={20} />
    ),
    "Ruby on Rails": (
      <Image src="/images/rubyonrails.svg" alt="Ruby on Rails" width={20} height={20} />
    ),
    "Redwood.js": (
      <Image src="/images/redwoodjs.svg" alt="Redwood.js" width={20} height={20} />
    ),
    Vue: <Image src="/images/vue.svg" alt="Vue.js" width={20} height={20} />,
    Linear: <Image src="/images/linear.svg" alt="Linear" width={20} height={20} />,
    Svelte: (
      <Image src="/images/svelte.svg" alt="Svelte" width={20} height={20} />
    ),
    Astro: <Image src="/images/astro.svg" alt="Astro" width={20} height={20} />,
    Remix: <Image src="/images/remix.svg" alt="Remix" width={20} height={20} />,
    PHP: <Image src="/images/php.svg" alt="PHP" width={20} height={20} />,
    Prisma: <Image src="/images/prisma.svg" alt="Prisma" width={20} height={20} />,
    Javascript: <Image src="/images/javascript.svg" alt="Javascript" width={20} height={20} />,
    Jira: <Image src="/images/jira.svg" alt="Jira" width={20} height={20} />,
    "Nest.js": <Image src="/images/nestjs.svg" alt="Nest.js" width={20} height={20} />,
  };

  return (
    <div className="flex items-center space-x-1">
      {iconMap[name] || <div className="w-5 h-5" />}
      <span>{name}</span>
    </div>
  );
};

export default function Technologies({
  onFilterChange,
}: {
  onFilterChange: (filters: Technology[]) => void;
}) {
  const [filters, setFilters] = useState<Technology[]>([]);

  const toggleTechnology = (tech: Technology) => {
    setFilters((prevSelected) => {
      const newFilters = prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech];
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <section className="font-spaceGrotesk mb-16">
      <h3 className="text-2xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              onClick={() => toggleTechnology(tech)}
              className={`flex items-center cursor-pointer space-x-1 p-2 ${
                filters.includes(tech)
                  ? "bg-blue-500 text-slate-200"
                  : "bg-accent text-slate-200 dark:bg-accent dark:text-slate-200"
              }`}
            >
              <TechnologyIcon name={tech} />
            </Badge>
          </motion.div>
        ))}
        {filters.length > 0 && (
          <Badge
            onClick={() => {
              setFilters([]);
              onFilterChange([]);
            }}
            className="flex items-center cursor-pointer space-x-1 p-2 text-slate-200 dark:bg-white dark:text-slate-800"
          >
            <X className="w-4 h-4" /> Clear
          </Badge>
        )}
      </div>
    </section>
  );
}
