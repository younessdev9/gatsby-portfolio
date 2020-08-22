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
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
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
          <div className="img-container">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="info-wrapper">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <div className="info">
              <div className="sub-info">
                <MdLocationOn className="icon" />
                <p>I'm from Ain Harrouda Mohammedia, Morocco.</p>
              </div>

              <div className="sub-info">
                <MdEmail className="icon" />
                <p>
                  <a href="mailto:hassani.youness1999@gmail.com">
                    hassani.youness1999@gmail.com
                  </a>
                </p>
              </div>

              <div className="sub-info">
                <MdPhone className="icon" />
                <p>
                  <a href="tel:+2120651070251">+2120651070251</a>
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

{
  /* <h3>About me</h3>
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


          </div>
        </div> */
}
