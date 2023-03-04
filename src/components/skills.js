import React, { useState } from "react"

import Icon from "./icon"
import useClickSound from "../hooks/useClickSound"


const SkillsActivate = ({ children }) => <div className="">{children}</div>

const Skills  = ({ children }) => <div className="">{children}</div>

const SkillBox  = ({ children }) => <div className="">{children}</div>

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
