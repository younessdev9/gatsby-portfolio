import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "react-dark-mode-toggle"
import Burger from "../burger/burger"
import { StyledMenu } from "./menu.styled"
import Logo from "../assets/thefinal.svg"
const Menu = ({ open, setOpen, toggle, checked }) => {
  return (
    <StyledMenu open={open}>
      <div className="header-wrapper">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <Burger open={open} setOpen={setOpen} className="burger-menu" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="list-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="list-item">
            <Link to="/blog">Blog</Link>
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
    </StyledMenu>
  )
}
export default Menu
