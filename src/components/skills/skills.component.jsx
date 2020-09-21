import React from "react"
import { StyledSkills } from "./skills.styles"
import { data } from "../constant/skills-data"
import Fade from "react-reveal/Fade"

const skills = data.map(({ id, img, title }) => (
  <div key={id} className="skill-item">
    <div className="skill-img">{img}</div>
    <h3 className="skill-title">{title}</h3>
  </div>
))

const Skills = () => {
  return (
    <StyledSkills>
      <h2>Skills</h2>
      <Fade bottom cascade>
        <div className="cards">{skills}</div>
      </Fade>
    </StyledSkills>
  )
}

export default Skills
