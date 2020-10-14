import styled from "styled-components"
import { Link } from "gatsby"
export const StyledBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${props => props.bgcolor};
  color: ${props => props.btcolor};
  border-radius: ${props => props.brvalue};
  cursor: pointer;
  width: 18rem;
  height: 5rem;
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

  /* 1024px */
  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    width: 15rem;
    height: 4.4rem;
    margin: 1rem;
  }
  /* 796px */
  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    width: 17rem;
    margin-left: 0;
  }
  /* 500px */
  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    width: 12rem;
    height: 4rem;
    font-size: 1.7rem;
  }
`
