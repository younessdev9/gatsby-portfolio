import styled from "styled-components"

export const StyledBtn = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: ${props => props.brValue};
  cursor: pointer;
  width: 20rem;
  height: 5rem;
  color: ${({ theme }) => theme.buttonColor};
  border: 2px solid #2a9d8f;

  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3rem;

  transition: all 0.3s ease-out;

  :focus {
    outline: none;
  }
  :active {
    transform: translateY(-3px);
  }
  :hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.btnHoverColor};
  }
`
