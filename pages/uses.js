import React from "react"

import Layout from "../src/components/layout"
import SEO from "../src/components/seo"

import {
  Box,
  Flex,
  Bar,
  Center,
  H2,
  H3,
  Ul,
  Li,
} from "../src/components/elements"

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

        <Flex>
          <Box width={1} p={3}>
            <Center mt={4}>
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
                <Li>KUL ES-76</Li>
              </Ul>
            </Center>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default IndexPage
