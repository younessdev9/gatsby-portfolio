import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"
import Button from "../button/button.component"

import StyledProjects from "./project.style"
const PrevProjects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allContentfulProject(
        filter: { node_locale: { eq: "en-US" }, preview: { eq: true } }
      ) {
        nodes {
          title
          demoLink
          githubLink
          stuck
          img {
            fluid(maxWidth: 500, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const projectCards = data.projects.nodes.map(
    ({ title, demoLink, githubLink, img: { fluid }, stuck }, i) => (
      <div key={i + 4} className="project-card">
        <Img fluid={fluid} alt="project one image" />
        <h4 className="project-card-title">{title}</h4>
        <ul className="stuck">
          {stuck.map((item, i) => (
            <li key={i + 1}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <FaExternalLinkSquareAlt className="icon" />
          </a>
        </div>
      </div>
    )
  )
  return (
    <StyledProjects>
      <h2>Projects</h2>
      <div className="cards-container">{projectCards}</div>
      <Link to="/projects">
        <Button brValue={"4px"}>See More</Button>
      </Link>
    </StyledProjects>
  )
}

export default PrevProjects
