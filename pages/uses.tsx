import React from "react"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Link from "next/link"

import {
  Bar,
  Stack,
  H2,
  H3,
  Ul,
  Li,
} from "@/components"

const skills = [
  "illustrator",
  "photoshop",
  "css3",
  "d3",
  "docker",
  "eslint",
  "figma",
  "firebase",
  "gatsby",
  "graphql",
  "html5",
  "javascript",
  "jest",
  "kubernetes",
  "next",
  "node",
  "npm",
  "nuxt-dot-js",
  "postgresql",
  "react",
  "redux",
  "rollup",
  "sass",
  "serverless",
  "vue",
  "yarn",
]

const IndexPage = () => {
  return (
    <>
      <Bar />
      <Layout>
        <SEO
          title="Home"
          keywords={[
            "brooklyn",
            "creative",
            "engineer",
            "web design",
            "justin michaliga",
            "jmichaliga",
            "logo design",
            "design systems",
            "mobile apps",
            "web developer",
            "full-stack",
            "front end",
            "new york",
            "nyc",
            "east village",
            "greenpoint",
            "nextjs",
          ].concat(skills)}
        />

        <Stack>


          <H2>What I Use</H2>

          <H3>
            <span role="img" aria-label="tools">
              🛠
            </span>{" "}
            Editor + Terminal
          </H3>
          <Ul>
            <Li>VS Code</Li>
            <Li>Vi on the default Mac Terminal</Li>
          </Ul>

          <H3>
            <span role="img" aria-label="marker">
              🖍
            </span>{" "}
            Design Tools
          </H3>
          <Ul>
            <Li>Illustrator for Illustrations</Li>
            <Li>Figma for Product</Li>
            <Li>Sketch w/ Abstract for Charts</Li>
          </Ul>

          <H3>
            <span role="img" aria-label="mic">
              🎤
            </span>{" "}
            Streaming
          </H3>
          <Ul>
            <Li>Yeti Blue Mic</Li>
            <Li>MBP Webcam</Li>
          </Ul>

          <H3>
            <span role="img" aria-label="computer">
              💻
            </span>{" "}
            Hardware
          </H3>
          <Ul>
            <Li>16&ldquo; M1 MBP 2022</Li>
            <Li>M1 Mac Mini 2020</Li>
            <Li>15&ldquo; MBP 2018</Li>
            <Li>15&ldquo; MBP 2012</Li>
            <Li>Custom Intel Build (2006)</Li>
          </Ul>

          <H3>
            <span role="img" aria-label="keyboard">
              ⌨️
            </span>{" "}
            Keyboards
          </H3>
          <Ul>
            <Li>Drop Ctrl</Li>
            <Li>Ducky One 2 Mini</Li>
            <Li>KUL ES-76 w/ Cherry Blues</Li>
            <Li>Drop Alt w/ Holy Pandas</Li>
          </Ul>
        </Stack>

        <Link href="/"><span className="text-xs text-jmRed hover:text-jmBlue transition-colors">&larr; Back Home</span></Link>
      </Layout>
    </>
  )
}

export default IndexPage
