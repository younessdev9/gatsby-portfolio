import React from "react"
import { Link } from "gatsby"

import DarkModeToggle from "react-dark-mode-toggle"
import { StyledHeader } from "./header"
import Logo from "../assets/thefinal.svg"
import Burger from "../burger/burger"
const Header = ({ toggle, checked, open, setOpen }) => (
  <StyledHeader>
    <div className="header-wrapper">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <Burger open={open} setOpen={setOpen} className="burger-menu" />
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
        <li className="list-item">
          <Link to="/contact" activeClassName="active">
            Contact
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
    </div>
  </StyledHeader>
)

export default Header
