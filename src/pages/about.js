import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledAbout from "../pages-styles/about"
import Tools from "../components/languges-tools/tools"
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Myimage.png" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" description="about Youness React developer" />
      <StyledAbout>
        <h2>About me</h2>
        <div className="container">
          <Img
            fixed={data.file.childImageSharp.fixed}
            className="img-container"
          />
          <div className="info-wrapper">
            <p>
              I'm a Self-taught React developer with a strong sense of
              aesthetics and interaction. I'm 21 years old, and I'm in love with
              the new technologies like Reactjs and Gatsbyjs, and ambitious to
              make my place in the open-source world. I'm a person who improves
              his skills each and every day to stay up to date
            </p>
            <div className="info">
              <div className="sub-info">
                <MdLocationOn className="icon" />
                <p>I'm from Ain Harrouda Mohammedia, Morocco.</p>
              </div>

              <div className="sub-info">
                <MdEmail className="icon" />
                <p>
                  <a href="mailto:younessdev@yahoo.com">younessdev@yahoo.com</a>
                </p>
              </div>

              <div className="sub-info">
                <MdPhone className="icon" />
                <p>
                  <a href="tel:+212651070251">+212651070251</a>
                </p>
              </div>
            </div>
            <div className="langagues-tools">
              <h4 className="tools-title">Languages and Tools:</h4>
              <Tools className="tools" />
            </div>
          </div>
        </div>
      </StyledAbout>
    </Layout>
  )
}

export default About
