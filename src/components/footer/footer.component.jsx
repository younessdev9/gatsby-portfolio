import React from "react"
import StyledFooter from "./footer.styles"
import Social from "../social-media/social-media.component"
import Gatsby from "../assets/gatsby.svg"
const Footer = () => (
  <StyledFooter>
    <h4>
      copyright&copy;{new Date().getFullYear()} Youness built with{" "}
      <Gatsby className="gatsby-logo" /> and Deployed to{" "}
      <Gatsby className="gatsby-logo" />
      <span>Cloud</span>{" "}
    </h4>
    <div className="footer-social">
      <p>
        <a href="https://twitter.com/younessdev">Twitter</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/younessdev/">Linkedin</a>
      </p>
      <p>
        <a href="https://www.instagram.com/unessdev/">Instagram</a>
      </p>
    </div>
  </StyledFooter>
)
export default Footer

{
  /* <h3>
      You can find me in{" "}
      <span role="img" aria-label="Pointing Down">
        👉
      </span>
    </h3>
    <div className="social-media">
      <Social />
    </div> */
}
