import React from "react"
import StyledFooter from "./footer.styles"
import Social from "../social-media/social-media.component"
const Footer = () => (
  <StyledFooter>
    <Social className="social-media social-footer" />
    <h4>Copyright&copy;{new Date().getFullYear()} Youness</h4>
  </StyledFooter>
)
export default Footer
