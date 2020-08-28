import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
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
      <StyledAbout>
        <h2>About me</h2>
        <div className="container">
          <Img
            fixed={data.file.childImageSharp.fixed}
            className="img-container"
          />
          <div className="info-wrapper">
            <p>
              I'm a Self-taught front end developer with a strong sense for
              aesthetics and interaction. i'm 21 years old and i'm in love with
              new technologies and ambitious to make my place in the open source
              world .I am not just satisfied by just what is does and does it
              works i always ask my self how it does it
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
