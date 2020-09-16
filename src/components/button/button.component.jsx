import React from "react"

import { StyledBtn } from "./button.style"
const Button = ({ children, ...props }) => {
  return <StyledBtn {...props}>{children}</StyledBtn>
}

export default Button
