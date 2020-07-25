import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { space, width, fontSize, color } from "styled-system"

import theme from "../theme"

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

const Flex = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`

const Bar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 2px;
  background: ${theme.colors.jmRed};
`

const Center = styled(Box)`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const H2 = styled.h2`
  padding-top: 1.5rem;
`

const H3 = styled.h3`
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  background: ${theme.colors.jmRed};
`

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  line-height: 1.5em;
`

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

            <H3><span role="img" aria-label="Tools">🛠</span> Editor + Terminal</H3>
            <Ul>
              <Li>VS Code</Li>
              <Li>Vi on the default Mac Terminal</Li>
            </Ul>

            <H3><span role="img" aria-label="Crayon">🖍</span> Design Tools</H3>
            <Ul>
              <Li>Illustrator for Illustrations</Li>
              <Li>Figma for Product</Li>
              <Li>Sketch w/ Abstract for Charts</Li>
            </Ul>

            <H3><span role="img" aria-label="Microphone">🎤</span> Streaming</H3>
            <Ul>
              <Li>Yeti Blue Mic</Li>
              <Li>MBP Webcam</Li>
            </Ul>

            <H3><span role="img" aria-label="Laptop">💻</span> Hardware</H3>
            <Ul>
              <Li>15" MBP 2018</Li>
              <Li>15" MBP 2012</Li>
              <Li>Custom Intel Build (2006)</Li>
            </Ul>

            <H3><span role="img" aria-label="Keyboard">⌨️</span> Keyboards</H3>
            <Ul>
              <Li>Drop Ctrl - 76 Keys</Li>
              <Li>Ducky One 2 Mini - 64 Keys</Li>
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
