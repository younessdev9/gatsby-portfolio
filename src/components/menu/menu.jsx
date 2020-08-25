import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "react-dark-mode-toggle"
import Burger from "../burger/burger"
import { StyledMenu } from "./menu.styled"
import Logo from "../assets/thefinal.svg"
const Menu = ({ open, setOpen, toggle, checked }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" className="logo" onClick={() => setOpen(!open)}>
        <Logo />
      </Link>
      <Burger open={open} setOpen={setOpen} className="burger-menu" />
      <ul>
        <li>
          <Link to="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(!open)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setOpen(!open)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setOpen(!open)}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(!open)}>
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
    </StyledMenu>
  )
}
export default Menu
