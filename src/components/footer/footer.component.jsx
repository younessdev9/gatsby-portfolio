import React from "react"
import StyledFooter from "./footer.styles"
import Social from "../social-media/social-media.component"
const Footer = () => (
  <StyledFooter>
    <h3>You can find me in </h3>
    <Social />
    <h4>copyright&copy;{new Date().getFullYear()}</h4>
  </StyledFooter>
)
export default Footer
