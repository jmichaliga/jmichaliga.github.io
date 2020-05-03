import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/icon"
import IconLink from "../components/iconlink"
import Svg from "../components/svg"

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
  margin-top: -1.45rem;
`

const Center = styled(Box)`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const HoverBulge = styled(Box)`
  transition-duration: ${theme.duration.normal};
  transform: scale(1);
  &:hover {
    transform: scale(0.9) rotate(-15deg);
    filter: brightness(80%);
  }
`

const SkillsActivate = styled.section`
  position: fixed;
  cursor: pointer;
  right: 8px;
  bottom: 0px;
  transition-duration: ${theme.duration.normal};
  &.close {
    transform: translate3d(0, 0, 0);
  }
  &.open {
    transform: translate3d(150%, 0, 0);
  }
`

const Skills = styled.section`
  position: fixed;
  cursor: pointer;
  right: 8px;
  bottom: 0px;
`

/*


*/

// transition-duration: ${theme.duration.fast};
const SkillBox = styled(({ showSkills, ...props }) => <Box {...props} />)`
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: scale(0.5) translate3d(50px,0,0);
  transition-delay: ${props => props.index * 20}ms;
  ${({ showSkills }) =>
    showSkills &&
    `
      transform: scale(1) translate3d(0,0,0);
      opacity: 1;
  `}
`

const Social = styled.section`
  display: flex;
  justify-content: space-evenly;
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
  const [showSkills, setShowSkills] = useState(false)
  const _toggleShowSkills = () => {
    setShowSkills(!showSkills)
  }

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `brooklyn`,
          `creative`,
          `engineer`,
          `web design`,
          `justin michaliga`,
          `jmichaliga`,
          `logo design`,
          `design systems`,
          `mobile apps`,
          `web developer`,
          `full-stack`,
          `front end`,
          `new york`,
          `nyc`,
          `ecmascript6`,
          `javascript`,
          `east village`,
          `greenpoint`,
          `gatsby`,
          `nextjs`,
        ]}
      />

      <Skills
        className={showSkills ? "open" : "close"}
        onClick={_toggleShowSkills}
      >
        {skills.sort().map((skill, idx) => (
          <SkillBox ml={2} showSkills={showSkills} index={skills.length - idx}>
            <Icon icon={skill} inverted={false} ml={2} />
          </SkillBox>
        ))}
      </Skills>

      <SkillsActivate
        className={showSkills ? "open" : "close"}
        onClick={_toggleShowSkills}
      >
        <span role="img" aria-label="skills">⚡️</span>
      </SkillsActivate>

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
              Full-Stack Javascript Engineer with over a decade of professional
              experience in agency, direct service, and in-house brand
              capacities &mdash; specializing in Interactive Design, Mobile/Web
              Development, Design Systems,{" "}
              <abbr title="and" className="amp">
                &amp;
              </abbr>{" "}
              Immersive User Experiences. Based in Brooklyn, NYC 🍎.
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

            </Social>
          </Center>
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
