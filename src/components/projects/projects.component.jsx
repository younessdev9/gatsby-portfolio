import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
          img {
            fluid(maxWidth: 500, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
    <StyledProjects>
      {data.projects.nodes.map(
        ({ title, demoLink, githubLink, img: { fluid } }, i) => (
          <div key={i} className="project-card">
            <Img fluid={fluid} alt="project one image" />
            <h4 className="project-card-title">{title}</h4>
            <div className="project-links">
              <a href={githubLink} target="_blank" rel="noreferrer">
                github
              </a>
              <a href={demoLink} target="_blank" rel="noreferrer">
                demo
              </a>
            </div>
          </div>
        )
      )}
    </StyledProjects>
  )
}

export default PrevProjects
