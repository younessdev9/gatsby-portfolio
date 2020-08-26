import styled from "styled-components"

const StyledTools = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 70rem;
  height: fit-content;
  .tool-parent {
    .tool {
      height: 3.8rem;
      width: 3.8rem;
      margin: 0.5rem;
      transition: transform 0.3s ease-out;
      &:not(:nth-child(7)) {
        fill: ${({ theme }) => theme.buttonColor};
      }
      &:hover {
        transform: scale(1.07);
      }
    }
  }
`
export default StyledTools
