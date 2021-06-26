import React, { useState } from "react"

import Icon from "./icon"
import styled from "@emotion/styled"
import useClickSound from "../hooks/useClickSound"

import theme from "../theme"

import { Box } from "./elements"

const SkillsActivate = styled.section`
  position: fixed;
  cursor: pointer;
  left: 8px;
  bottom: 4px;
  transition-duration: ${theme.duration.normal};
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  &.close {
    transform: translate3d(0px, 0, 0);
  }
  &.open {
    transform: translate3d(-50px, 0, 0);
  }
`

const Skills = styled.section`
  position: fixed;
  cursor: pointer;
  left: 0px;
  bottom: 0px;
`

const SkillBox = styled(({ showSkills, ...props }) => <Box {...props} />)`
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: scale(0.5) translate3d(-50px, 0, 0);
  transition-delay: ${(props) => props.index * 15}ms;
  &:hover {
    filter: invert(50);
  }
  ${({ showSkills }) =>
    showSkills &&
    `
      transform: scale(1) translate3d(0,0,0);
      opacity: 1;
  `}
`

export const skills = [
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
  "nuxt",
  "postgresql",
  "react",
  "redux",
  "rollup",
  "sass",
  "serverless",
  "vue",
  "yarn",
]

const SkillsComponent = () => {
  const [showSkills, setShowSkills] = useState(false)
  const [click, stopClick] = useClickSound("clickPop")
  const _toggleShowSkills = () => {
    stopClick()
    click()
    setShowSkills(!showSkills)
  }

  return (
    <>
      <Skills
        className={showSkills ? "open" : "close"}
        onClick={_toggleShowSkills}
      >
        {skills.sort().map((skill, idx) => (
          <SkillBox
            ml={2}
            showSkills={showSkills}
            index={skills.length - idx}
            key={skill}
          >
            <Icon icon={skill} inverted={false} ml={2} />
          </SkillBox>
        ))}
      </Skills>

      <SkillsActivate
        className={showSkills ? "open" : "close"}
        onClick={_toggleShowSkills}
      >
        <span role="img" aria-label="skills">
          ⚡️
        </span>
      </SkillsActivate>
    </>
  )
}

export default SkillsComponent
