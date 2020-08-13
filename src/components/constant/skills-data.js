import React from "react"

import HtmlImg from "../assets/htmlcss.svg"
import JavaScriptImg from "../assets/js.svg"
import Svgreact from "../assets/svgreact.svg"
import Gatsbyimg from "../assets/gatsbydeveloper.svg"
export const data = [
  {
    id: 1,
    img: <HtmlImg className="skill-icon" />,
    title: "HTML | CSS and SASS",
  },
  {
    id: 2,
    img: <JavaScriptImg className="skill-icon" />,
    title: "JavaScript",
  },
  {
    id: 3,
    img: <Svgreact className="skill-icon" />,
    title: "React",
  },
  {
    id: 4,
    img: <Gatsbyimg className="skill-icon" />,
    title: "Gatsby",
  },
]
