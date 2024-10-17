export type Technology =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Node.js"
  | "Apollo"
  | "Gatsby"
  | "GraphQL"
  | "PostgreSQL"
  | "PHP"
  | "Prisma"
  | "AWS"
  | "Docker"
  | "Kubernetes"
  | "ThreeJS"
  | "Expo"
  | "Firebase"
  | "Figma"
  | "Supabase"
  | "TailwindCSS"
  | "Vercel"
  | "Cloudflare"
  | "npm"
  | "MongoDB"
  | "MySQL"
  | "Elasticsearch"
  | "Amplify"
  | "Angular"
  | "Vue"
  | "Linear"
  | "Express"
  | "Ruby on Rails"
  | "React Native"
  | "Redwood.js"
  | "Javascript"
  | "Jira"
  | "Nest.js";

export const technologies: Technology[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Apollo",
  "Gatsby",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "ThreeJS",
  "Expo",
  "Firebase",
  "Figma",
  "Supabase",
  "TailwindCSS",
  "Vercel",
  "Cloudflare",
  "PHP",
  "Prisma",
  "npm",
  "MongoDB",
  "MySQL",
  "Elasticsearch",
  "Amplify",
  "Angular",
  "Vue",
  "Linear",
  "Express",
  "Ruby on Rails",
  "React Native",
  "Redwood.js",
  "Javascript",
  "Jira",
  "Nest.js",
];

export interface Education {
  university: {
    name: string;
    date: string;
    location: string;
  };
  degrees: {
    type: string;
    major: string;
    minor?: string;
    concentration?: string;
  }[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  timeline: string;
  description: string;
}

export interface Award {
  title: string;
  date: string;
}
