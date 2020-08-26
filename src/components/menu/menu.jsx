import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "react-dark-mode-toggle"
import Burger from "../burger/burger"
import { StyledMenu } from "./menu.styled"
import Logo from "../assets/thefinal.svg"
const Menu = ({ open, setOpen, toggle, checked }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <div className="head">
        <Link to="/" className="logo" onClick={() => setOpen(!open)}>
          <Logo />
        </Link>
        <Burger
          open={open}
          setOpen={setOpen}
          className="burger-menu"
          id="close-btn"
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
