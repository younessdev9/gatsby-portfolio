import styled from "styled-components"
import { Link } from "gatsby"
export const StyledBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: ${props => props.brValue};
  cursor: pointer;
  width: 20rem;
  height: 5rem;
  color: ${({ theme }) => theme.buttonColor};
  border: 2px solid #2a9d8f;
  font-weight: normal;
  font-size: 2rem;
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

  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    width: 15rem;
    height: 4.4rem;
    margin: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    width: 11rem;
    height: 4rem;
    font-size: 1.6rem;
  }
  /* 796px */
  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    font-size: 1.7rem;
  }
`
