import React, { useState } from "react"

import Icon from "./icon"
import styled from "styled-components"
import { space, width, fontSize, color } from "styled-system"

import theme from "../theme"

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
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

// transition-duration: ${theme.duration.fast};
const SkillBox = styled(({ showSkills, ...props }) => <Box {...props} />)`
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: translate3d(50px,0,0);
  transition-delay: ${props => props.index * 20}ms;
  ${({ showSkills }) =>
    showSkills &&
    `
      transform: scale(1) translate3d(0,0,0);
      opacity: 1;
  `}
`

const SkillsComponent = () => {
  const [showSkills, setShowSkills] = useState(false)
  const _toggleShowSkills = () => {
    setShowSkills(!showSkills)
  }

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

  return (
    <>
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
    </>
  )
}

export default SkillsComponent
