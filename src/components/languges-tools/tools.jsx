import React from "react"
import StyledTools from "./tools.styles.js"

import Html from "../assets/html.svg"
import Css from "../assets/css.svg"
import Javacript from "../assets/javascript.svg"
import Sass from "../assets/sass.svg"
import Thereact from "../assets/thereact.svg"
import Gatsby from "../assets/gatsby.svg"
import Git from "../assets/git.svg"
import Github from "../assets/github.svg"
import Terminal from "../assets/terminal.svg"
import Ubuntu from "../assets/ubuntu.svg"
import Vscode from "../assets/vscode.svg"

const langugesAndTools = [
  <Ubuntu className="tool" />,
  <Vscode className="tool" />,
  <Html className="tool" />,
  <Css className="tool" />,
  <Sass className="tool" />,
  <Javacript className="tool" />,
  <Thereact className="tool tool-react" />,
  <Gatsby className="tool" />,
  <Git className="tool" />,
  <Github className="tool" />,
  <Terminal className="tool" />,
]
const Tools = () => (
  <StyledTools>
    {langugesAndTools.map(item => (
      <li className="tool-parent">{item}</li>
    ))}
  </StyledTools>
)

export default Tools
