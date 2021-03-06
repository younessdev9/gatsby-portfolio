import React from "react"
import { StyledSocial } from "./social-media.styles"
import { data } from "../constant/social-links"

const links = data.map(({ id, icon, url }) => (
  <li key={id}>
    <a href={url} className="social-link" target="_blank" rel="noreferrer">
      {icon}
    </a>
  </li>
))
const Social = () => {
  return <StyledSocial>{links}</StyledSocial>
}

export default Social
