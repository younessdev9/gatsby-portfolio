import React from "react"
import { Link } from "gatsby"
import { StyledSection } from "./styles.section"
import Icon from "../assets/myimage.svg"
import Button from "../button/button.component"

const Section = () => {
  return (
    <StyledSection>
      <div className="left-section">
        <h3>
          Hi there! <br />I<span>'</span>m <span>Y</span>ouness <span>H</span>
          assani
        </h3>
        <h4>
          A self-taugh front-end developer and javaScript enthusiastic and fast
          learner
        </h4>
        <div className="btns">
          <Button className="main-btn" bgColor={"#FFFFFF"} brValue={"70px"}>
            Resume
          </Button>
          <Link to="/contact">
            <Button className="main-btn" bgColor={"#FFFFFF"} brValue={"70px"}>
              Contact me
            </Button>
          </Link>
        </div>
      </div>
      <div className="right-section">
        <Icon className="myicon" />
      </div>
    </StyledSection>
  )
}

export default Section
