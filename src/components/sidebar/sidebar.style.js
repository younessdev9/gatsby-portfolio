import styled from "styled-components"

const StyledSideBar = styled.aside`
  background-color: green;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  place-items: center;
  transition: var(--transition);
  opacity: 1;

  ${props =>
    props.isOpen
      ? `opacity: 1;
  transform: translateX(0); `
      : "opacity: 0; transform: translateX(-100%);"}

  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }
`
export default StyledSideBar
