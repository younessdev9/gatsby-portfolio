import styled from "styled-components"

export const StyledSocial = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 55rem;
  height: 4rem;
  margin: 0 1rem;
  list-style: none;
  width: 90%;
  margin-top: 2rem;
  .social-icon {
    fill: ${({ theme }) => theme.socialColor};
    width: 2.7rem;
    height: 2.7rem;

    transition: all 0.3s ease-out;
    &:hover {
      fill: ${({ theme }) => theme.primaryColor};
      transform: scale(1.2);
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    width: 70%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    width: 60%;
  }
`
