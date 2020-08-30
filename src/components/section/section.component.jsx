import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledSection } from "./styles.section"
import Icon from "../assets/myimage.svg"
import Button from "../button/button.component"
import Social from "../social-media/social-media.component"

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }) {
        publicURL
      }
    }
  `)
  return (
    <StyledSection>
      <div className="left-section">
        <h3>
          <span className="hi">Hi there!</span> <br />I<span>'</span>m{" "}
          <span>Y</span>ouness <span>H</span>
          assani
        </h3>
        <h4>
          A self-taught front-end developer and javaScript enthusiastic and fast
          learner
        </h4>
        <div className="btns">
          <a role="button" href={data.file.publicURL} download>
            <Button
              className="main-btn"
              bgColor={"#298880"}
              brValue={"70px"}
              btColor={"#ffffff"}
            >
              Resume
            </Button>
          </a>
          <Button
            to="/contact"
            className="main-btn"
            bgColor={"#ffffff"}
            brValue={"70px"}
            btColor={"#000000"}
          >
            Contact me
          </Button>
          <Social width={"4.6rem"} height={"4.6rem"} />
        </div>
      </div>
      <div className="right-section">
        <Icon className="myicon" />
      </div>
    </StyledSection>
  )
}

export default Section
