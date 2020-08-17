import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import StyledAbout from "../pages-styles/about"
import Tools from "../components/languges-tools/tools"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Myimage.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <StyledAbout>
        <h3>About me</h3>
        <div className="info-container">
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="personal-img"
          />
          <div className="right-info">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="langagues-tools">
              <h4 className="tools-title">Languages and Tools:</h4>
              <Tools />
            </div>
          </div>
        </div>
      </StyledAbout>
    </Layout>
  )
}

export default About
