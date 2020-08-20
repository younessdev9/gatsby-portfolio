import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  font-size: 1.8rem;
  position: fixed;
  top: 0;
  border-bottom: 1px #333333 solid;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 5vh;
    margin: 0 auto;
    padding: 1rem;
  }

  background-color: ${({ theme }) => theme.buttonBg};
  z-index: 100;
  .logo {
    width: 10rem;
    height: 10rem;
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
