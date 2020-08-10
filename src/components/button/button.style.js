import styled from "styled-components"

export const StyledBtn = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: ${props => props.brValue};
  cursor: pointer;
  width: 22rem;
  height: 5.6rem;
  color: ${({ theme }) => theme.buttonColor};
  border: 4px solid #2a9d8f;

  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 3.3rem;
  line-height: 4.2rem;

  transition: all 0.3s ease-out;

  :focus {
    outline: none;
  }
  :active {
    transform: translateY(-3px);
  }
`
//bgColor //${props => props.bgColor};
