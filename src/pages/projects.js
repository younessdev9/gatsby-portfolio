import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import StyledProjects from "../pages-styles/projects"
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"
const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          demoLink
          githubLink
          title
          img {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          stuck
        }
      }
    }
  `)
  return (
    <Layout>
      <StyledProjects>
        <h2>All Projects</h2>
        {data.projects.nodes.map(element => (
          <div className="project-card">
            <h4 className="project-title">{element.title}</h4>
            <div className="img-wrapper">
              <Img fluid={element.img.fluid} className="project-img" />
              <a
                href={element.githubLink}
                target="_blank"
                rel="noreferrer"
                className="github-project-link"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href={element.demoLink}
                target="_blank"
                rel="noreferrer"
                className="demo-project-link"
              >
                <FaExternalLinkSquareAlt className="icon" />
              </a>
            </div>
            <ul className="stuck">
              {element.stuck.map(item => (
                <li className="project-stuck">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </StyledProjects>
    </Layout>
  )
}

export default Projects
