import styled from "styled-components"

export const StyledSocial = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  height: 4rem;
  margin: 0 auto;
  list-style: none;

  .social-icon {
    fill: ${props => props.theme.socialColor};
    width: 2.7rem;
    height: 2.7rem;

    transition: all 0.3s ease-out;
    &:hover {
      fill: ${({ theme }) => theme.primaryColor};
      transform: scale(1.2);
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    width: 42rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    width: 72%;
  }
`
