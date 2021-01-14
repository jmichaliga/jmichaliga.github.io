import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IconLink from "../components/iconlink"
import Svg from "../components/svg"

import styled from "styled-components"
import theme from "../theme"

import { Box, Center, Flex } from "../components/elements"
import Skills, { skills } from "../components/skills"

const Bar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 2px;
  background: ${theme.colors.jmRed};
`

const HoverBulge = styled(Box)`
  transition-duration: ${theme.duration.normal};
  transform: scale(1);
  &:hover {
    transform: scale(0.9) rotate(-15deg);
    filter: brightness(80%);
  }
`

const Social = styled.section`
  display: flex;
  justify-content: space-evenly;
`

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
            "ecmascript6",
            "east village",
            "greenpoint",
            "nextjs",
          ].concat(skills)}
        />

        <Skills />

        <Flex>
          <Box width={[1, 1 / 2]}>
            <Center>
              <HoverBulge>
                <Svg name="jm" />
              </HoverBulge>
            </Center>
          </Box>

          <Box width={[1, 1 / 2]} p={3}>
            <Center mt={4}>
              <p>
                Full-Stack Javascript Engineer with over a decade of
                professional experience in agency, direct service, and in-house
                brand capacities &mdash; specializing in Interactive Design,
                Mobile/Web Development, GraphQL Adoption, Design Systems,{" "}
                <abbr title="and" className="amp">
                  &amp;
                </abbr>{" "}
                Immersive User Experiences.
                <br />
                Based in Brooklyn, NYC 🍎.
              </p>

              <Social>
                <IconLink
                  href="https://github.com/jmichaliga"
                  icon="github"
                  text="Follow @jmichaliga on Github."
                />

                <IconLink
                  href="https://dribbble.com/jmichaliga"
                  icon="dribbble"
                  text="Follow @jmichaliga on Dribbble."
                />

                <IconLink
                  href="https://codepen.com/jmichaliga"
                  icon="codepen"
                  text="Follow @jmichaliga on Codepen."
                />

                <IconLink
                  href="https://twitter.com/jmichaliga"
                  icon="twitter"
                  text="Follow @jmichaliga on twitter."
                />

                <IconLink
                  href="https://www.linkedin.com/in/justin-michaliga-6b57594"
                  icon="linkedin"
                  text="Follow @jmichaliga on LinkedIn."
                />
              </Social>
            </Center>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default IndexPage
