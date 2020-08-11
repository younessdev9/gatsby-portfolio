import React from "react"
import { StyledSkills } from "./skills.styles"
import { data } from "../constant/skills-data"
// import HtmlImg from "../assets/htmlcss.svg"
// import JavaScriptImg from "../assets/js.svg"
// import GatsbyImg from "../assets/gatsby.svg"

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
      <div className="cards">{skills}</div>
    </StyledSkills>
  )
}

export default Skills

// <div className="skill-img">{img}</div>
