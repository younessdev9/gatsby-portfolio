import React from "react"
import StyledFooter from "./footer.styles"
import Gatsby from "../assets/gatsby.svg"
import Social from "../social-media/social-media.component"
const Footer = () => (
  <StyledFooter>
    <Social />
    <h4>
      copyright&copy;{new Date().getFullYear()} Youness built with{" "}
      <Gatsby className="gatsby-logo" /> and Deployed to{" "}
      <Gatsby className="gatsby-logo" />
      <span>Cloud</span>{" "}
    </h4>
  </StyledFooter>
)
export default Footer
