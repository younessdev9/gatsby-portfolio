import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import DarkModeToggle from "react-dark-mode-toggle"
import { StyledHeader } from "./header"
const Header = ({ toggle, checked }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <StyledHeader>
      <img src={data.file.publicURL} alt="img" />
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li className="list-item">
          <Link to="/projects" activeClassName="active">
            Projects
          </Link>
        </li>
        <li className="list-item">
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <DarkModeToggle
            onChange={toggle}
            checked={checked()}
            size={60}
            speed={3}
          />
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header
