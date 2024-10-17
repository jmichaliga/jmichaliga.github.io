"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";

import { Badge } from "@/components/ui/badge";

import AnimatedBackground from "@/components/animated-bg";

import { Education, Experience, Award } from "@/types";

const education: Education[] = [
  {
    university: {
      name: "Maryland Institute College of Art",
      date: "August 2020 - December 2021",
      location: "Baltimore, MD",
    },
    degrees: [
      {
        type: "Masters of Professional Studies",
        major: "User Experience Design",
      },
    ],
  },
  {
    university: {
      name: "Salisbury University",
      date: "August 2002 - May 2007",
      location: "Salisbury, MD",
    },
    degrees: [
      {
        type: "Bachelors of Science",
        major: "Computer Science",
        minor: "Mathematics",
      },
      {
        type: "Bachelors of Arts",
        major: "Art",
        concentration: "Graphic Design",
      },
    ],
  },
];

const experience: Experience[] = [
  {
    title: "Head of Engineering / Fractional CTO",
    company: "Venture Studio",
    location: "New York, NY",
    timeline: "June 2022 - Present",
    description: `Leading the Software Development processes on the front-lines of foresight building and investing in the future of
FinTech, InsurTech, HealthTech, web3 and the Metaverse.`,
  },
  {
    title: "Javascript Engineer / Consultant",
    company: "SmartNode, LLC",
    location: "Brooklyn, NY",
    timeline: "January 2015 - Present",
    description: `Full-stack Javascript application development and project management. 
Typical stack consists of Node APIs on Angular / React / Vue Frontends.`,
  },
  {
    title: "Software Engineer",
    company: "Courier, Inc (YC19)",
    location: "San Francisco, CA (Remote)",
    timeline: "December 2019 - July 2020",
    description: `The smart way to design and deliver notifications. Connect and orchestrate messages through different channels to your customers with consistent messaging. Full-stack Typescript application development. Customer App developed with Next.js / SlateJS editor. Backend with AWS serverless resources on Node v12.`,
  },

  {
    title: "Staff Engineer, Fullstack",
    company: "Knotel",
    location: "New York, NY",
    timeline: "July 2018 - November 2019",
    description: `Revolutionizing the GraphQL implementations that not only push the technology forward through use in the CRE and Arch industry, but as all engineering as a whole. Lead development of several applications, systems architecture, patterns, as well as our design system. Stack is React, Node, Apollo, AWS, Github Actions, running on Kubernetes.`,
  },
  {
    title: "Lead Frontend Engineer",
    company: "Capsule8, Inc",
    location: "Brooklyn, NY",
    timeline: "June 2017 - December 2017",
    description: `Architected Capsule8's Security dashboard console. Helped hire developers and built both the UI and UX teams within this smart and stealthy startup. Led Junior level developers as well as oversaw contract partnerships.`,
  },
  {
    title: "Senior UI Engineer / Consultant",
    company: "Cake & Arrow (formerly Alexander Interactive)",
    location: "New York, NY",
    timeline: "October 2013 - January 2015",
    description: `Developed proprietary software for a Fortune 50 client utilizing AngularJS with a team under the agile methodology. Similiarly sharing knowledge throughout the company crossing between the development and design teams.`,
  },
  {
    title: "UX / UI Development Consultant",
    company: "Celtra, Milk Studios, Layerframe",
    location: "New York, NY",
    timeline: "October 2012 - December 2013",
    description: `Created custom mobile advertising campaigns, lead development and oversaw teams on several high-end mobile/web projects including those with Budweiser, Burberry, Jeep, McDonalds, Nickelodeon, Spotify, SuperCell, Theory and several more.`,
  },
  {
    title: "Creative Technologist",
    company: "Medialets",
    location: "New York, NY",
    timeline: "October 2010 - October 2012",
    description: `Lead Developer in the Rich Media Mobile Advertising space. Direct communication of best practices with creative, technical, and agency partners. Award Winning Innovation in the mobile space utilizing HTML5 elements, CSS animations, touch events, and js frameworks.`,
  },
  {
    title: "Interactive Developer",
    company: "Warschawski",
    location: "Baltimore, MD",
    timeline: "August 2009 - October 2010",
    description:
      "Created interactive solutions for clients in need of online branding. A custom content management system was created in order to give customers control of their content without need to be onboarded into a complex system. Logo creation, wireframing, and branding solutions were also part of this creative role.",
  },
  {
    title: "Front-End Developer",
    company: "Inside Lacrosse",
    location: "Baltimore, MD",
    timeline: "December 2008 - August 2009",
    description:
      "Redeveloped InsideLacrosse.com onto the Drupal6 Platform while creating smaller applications for custom polls, magazine revenue, and archival projects.",
  },
  {
    title: "Web Applications Developer",
    company: "no|inc",
    location: "Baltimore, MD",
    timeline: "August 2008 - December 2008",
    description:
      "Developed Software for various companies in an agency capacity. Specialized in interactive interfaces with PHP backends.",
  },
  {
    title: "Web Applications Developer",
    company: "CSD Architects",
    location: "Baltimore, MD",
    timeline: "June 2007 - August 2008",
    description:
      "Designed and developed an internal intranet which powered content for Marketing purposes including a new website presence.",
  },
];

const awards: Award[] = [
  {
    title: "Proposed Speaker, ReactDay NYC",
    date: "October 2020",
  },
  {
    title: "Speaker !!Con",
    date: "May 2020",
  },
  {
    title: "Speaker, VueNYC",
    date: "October 2017",
  },
  {
    title: "Best iPad/Tablet Advertising, Digiday Mobi Awards",
    date: "2012",
  },
  {
    title: "Best Mobile Branding, Digiday Mobi Awards",
    date: "2012",
  },
  {
    title: "Mobile Mentor, Startup Weekend NYC",
    date: "2011",
  },
  {
    title: "Javascript Instructor, General Assembly",
    date: "2010 - 2012",
  },
  {
    title: "Co-Founder, Refresh Baltimore",
    date: "2008",
  },
];

const skillset: string[] = [
  "AngularJS",
  "Vue",
  "React",
  "Redux",
  "Expo",
  "React Native",
  "Apollo",
  "GraphQL",
  "Node.JS",
  "Express",
  "Passport",
  "TypeScript",
  "Babel ",
  "ESLint",
  "D3",
  "Lodash",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "Javascript",
  "ES5(6)",
  "SASS",
  "Theme-UI",
  "Styled-Components",
  "Styled-System",
  "PostgreSQL",
  "SQLite",
  "MongoDB",
  "Firebase",
  "REST",
  "SVG",
  "Icon Development",
  "Interface Design",
  "Debian Linux",
  "OSX",
  "Agile Methodologies",
];

const tools: string[] = [
  "Git",
  "Github",
  "Heroku",
  "AWS",
  "Docker",
  "Now",
  "Kubernetes",
  "Photoshop",
  "Illustrator",
  "Sketch",
  "Figma",
  "NPM",
  "Yarn",
  "Webpack",
  "Parcel",
  "Vim",
  "VSCode",
  "Gatsby",
  "Next.JS",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      <Header
        onToggleDarkMode={() => {
          console.log("toggle dark mode");
        }}
      />
      <main className="container mx-auto px-4 py-8">
        <About />

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          <div className="col-span-8 md:col-span-4 ">
            <aside className=" bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">Education</h2>

              {education.map((instance) => (
                <div
                  key={instance.university.name}
                  className="flex flex-col mb-4"
                >
                  <strong>{instance.university.name}</strong>

                  <small className="text-xs uppercase text-slate-500">
                    {instance.university.date}
                  </small>

                  <address className="text-xs italic">
                    {instance.university.location}
                  </address>

                  {instance.degrees.map((degree) => (
                    <div key={degree.type} className="flex flex-col">
                      <h4 className="text-sm font-semibold mt-2">
                        {degree.type}
                      </h4>
                      <span className="text-xs flex">
                        <label className="uppercase text-slate-500 mr-1">
                          Major:
                        </label>{" "}
                        {degree.major}
                      </span>
                      {degree.minor && (
                        <span className="text-xs flex">
                          <label className="uppercase text-slate-500 mr-1">
                            Minor:
                          </label>{" "}
                          {degree.minor}
                        </span>
                      )}
                      {degree.concentration && (
                        <span className="text-xs">
                          <label className="uppercase text-slate-500">
                            Concentration:
                          </label>{" "}
                          {degree.concentration}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </aside>

            <aside className=" bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">Awards</h2>
              {awards.map((award) => (
                <div key={award.title} className="mb-4">
                  <h4 className="text-sm font-semibold">{award.title}</h4>
                  <small className="text-xs uppercase text-slate-500">
                    {award.date}
                  </small>
                </div>
              ))}
            </aside>

            <aside className=" bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">Skillset</h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {skillset.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>

              <h2 className="text-xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">Tools</h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </aside>
          </div>

          <section className="col-span-8 bg-white dark:bg-slate-900  p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">Experience</h3>
            {experience.map((pos) => (
              <article key={pos.title} className="mb-4">
                <div className="flex justify-between">
                  <div className="float-left">
                    <h4 className="text-lg font-semibold">{pos.title}</h4>
                    <h5 className="text-sm text-slate-500">{pos.company}</h5>
                  </div>

                  <div className="float-right">
                    <small className="text-xs uppercase text-slate-500">
                      {pos.timeline}
                    </small>
                    <address className="text-xs italic text-right">
                      {pos.location}
                    </address>
                  </div>
                </div>
                <p className="text-sm mt-2">{pos.description}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
