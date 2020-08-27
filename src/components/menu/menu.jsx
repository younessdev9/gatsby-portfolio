import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "react-dark-mode-toggle"
import { StyledMenu } from "./menu.styled"
const Menu = ({ open, setOpen, toggle, checked }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <div className="head">
        <DarkModeToggle
          onChange={toggle}
          checked={checked()}
          size={60}
          speed={3}
        />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledMenu>
  )
}
export default Menu
