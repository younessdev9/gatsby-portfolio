import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  max-width: 80%;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.8rem;

  .logo {
    width: 10rem;
    height: 10rem;

    path {
      fill: ${({ theme }) => theme.socialColor};
    }
  }

  .active {
    border-bottom: ${props => props.theme.borderBottom};
  }
  ul {
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 45%;
  }

  ul li {
    display: flex;
    align-items: center;
    & a {
      color: inherit;
      text-decoration: none;
      display: block;
      padding: 0.9rem;
    }
  }
`
