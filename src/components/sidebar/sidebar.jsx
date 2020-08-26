import React from "react"
import StyledSideBar from "./sidebar.style"
import { FaTimes } from "react-icons/fa"
const SideBar = ({ toggleSidebar }) => {
  return (
    <StyledSideBar>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">this is side bar</div>
    </StyledSideBar>
  )
}

export default SideBar
