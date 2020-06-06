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

        <Box width={[1, 1 / 2]} p={3}>
          <Center mt={4}>
            <h2>What I Use</h2>

            <h3>Editor + Terminal</h3>
            <ul>
              <li>VS Code</li>
              <li>Vi on the default Mac Terminal</li>
            </ul>

            <h3>Design Tools</h3>
            <ul>
              <li>Illustrator for Illustrations</li>
              <li>Figma for Product</li>
              <li>Sketch w/ Abstract for Charts</li>
            </ul>

            <h3>Streaming</h3>
            <ul>
              <li>Yeti Blue Mic</li>
              <li>MBP Webcam</li>
            </ul>

            <h3>Hardware</h3>
            <ul>
              <li>15" MBP 2018</li>
              <li>15" MBP 2012</li>
              <li>Custom Intel Build (2006)</li>
            </ul>

            <h3>Keyboards</h3>
            <ul>
              <li>Drop Ctrl</li>
              <li>Ducky One 2 Mini</li>
              <li>KUL ES-76</li>
            </ul>

          </Center>
        </Box>
      </Flex>
    </Layout>
    </>
  )
}

export default IndexPage
