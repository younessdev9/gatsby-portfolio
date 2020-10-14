import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledAbout from "../pages-styles/about"
import Tools from "../components/languges-tools/tools"
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md"
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
              I’m a 21 years-old Self-taught JavaScript Developer that focuses
              on front-end frameworks and libraries such as Reactjs and
              Gatsbyjs. I'm very passionate about web development, Especially
              the new technologies and tools that make building fast and
              performant apps a lot more efficient and fast, therefore I’m a
              persistent learner who likes to stay up to date packed with the
              latest tools, also an ambitious developer looking to make my place
              in the tech world. I’m currently focusing on learning and getting
              good at Nodejs with Express and MongoDB with Mongoose and much
              more …
            </p>
            <div className="info">
              <div className="sub-info">
                <MdLocationOn className="icon" />
                <p>I'm from Ain Harrouda Mohammedia, Morocco.</p>
              </div>

              <div className="sub-info">
                <MdMail className="icon" />
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
