import React from "react"
import Icon from "../assets/developer-img.svg"
import { StyledMain } from "./introduction.style"
import Button from "../button/button.component"
const Introduction = () => (
  <StyledMain>
    <div className="title">
      <h2>Breif intro about me</h2>
    </div>
    <div className="bottom-info">
      <div className="intro">
        <p>
          Hi there! <br /> i'm Youness Hassani a Self-taugh React developer and
          javaScript enthusiastic i love new technologies having fun building
          projects with high quality code and uwing modern tools and
          technologies like gatsbyjs and more...
        </p>
        <Button className="about-btn" brValue={"20px"}>
          About
        </Button>
      </div>
      <Icon className="developer" />
    </div>
  </StyledMain>
)

export default Introduction
