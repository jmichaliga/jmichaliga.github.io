import React from "react"

import IconLink from "../components/iconlink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
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
  text-shadow: 0px 0px 4px rgba(0,0,0,0.25);
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

      <Skills
        className={showSkills ? "open" : "close"}
        onClick={_toggleShowSkills}
      >
        {skills.sort().map((skill, idx) => (
          <SkillBox ml={2} showSkills={showSkills} index={skills.length - idx} key={skill}>
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
              Development, GraphQL Adoption, Design Systems,{" "}
              <abbr title="and" className="amp">
                &amp;
              </abbr>{" "}
              Immersive User Experiences.<br/>Based in Brooklyn, NYC 🍎.
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
    </>
  )
}

export default IndexPage