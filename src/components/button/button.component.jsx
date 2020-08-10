import React from "react"
import { withTheme } from "styled-components"

import { StyledBtn } from "./button.style"
const Button = ({ children, ...props }) => {
  return <StyledBtn {...props}>{children}</StyledBtn>
}

export default withTheme(Button)
