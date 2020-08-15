import styled from "styled-components"

export const StyledSocial = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  height: 4rem;
  margin: 0 auto;
  list-style: none;

  .social-icon {
    fill: ${props => props.theme.socialColor};
    width: 4rem;
    height: 4rem;

    transition: all 0.3s ease-out;
    &:hover {
      fill: ${({ theme }) => theme.primaryColor};
      transform: scale(1.2);
    }
  }
`
