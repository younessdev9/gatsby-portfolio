import React from "react"
import { StyledSection } from "./styles.section"
import Icon from "../assets/myimage.svg"
import Button from "../button/button.component"
import Social from "../social-media/social-media.component"

const Section = () => {
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
          <a
            role="button"
            href="https://drive.google.com/file/d/1vzhyc0fS5virYS_2la3OLuYDp_gY11u8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button bgcolor={"#298880"} brvalue={"70px"} btcolor={"#ffffff"}>
              Resume
            </Button>
          </a>
          <Button to="/contact" className="contact-btn" brvalue={"70px"}>
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
