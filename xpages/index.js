import React from "react"

import Layout from "../src/components/layout"
import SEO from "../src/components/seo"

import {
  Box,
  Flex,
  Bar,
  Center,
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
          
            </Center>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default IndexPage
