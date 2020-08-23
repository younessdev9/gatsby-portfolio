import styled from "styled-components"

const StyledTools = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 70rem;
  height: fit-content;
  .tool {
    display: block;
    height: 3.8rem;
    width: 3.8rem;
    transition: transform 0.3s ease-out;
    &:hover {
      transform: scale(1.07);
    }
  }
`
export default StyledTools
