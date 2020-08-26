import styled from "styled-components"

export const StyledHeader = styled.nav`
  width: 100%;
  font-size: 1.8rem;
  position: fixed;
  top: 0;

  border-bottom: 1px #333333 solid;
  background-color: ${({ theme }) => theme.buttonBg};
  z-index: 100;
  padding-top: 1rem;

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 5vh;
    margin: 0 auto;
    padding: 1rem;

    .menu-icon {
      display: none;
    }
  }
  .logo {
    width: 10rem;
    height: 8.7rem;
  }
  .burger-menu {

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
    width: 50rem;
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
  /* @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 200rem;
  } */

  @media only screen and (max-width: 900px) {
    .header-wrapper {
      margin: 0;
    }
    ul {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    ul {
      display: none;
    }

    .header-wrapper {
      .menu-icon {
        display: block;
        height: 6rem;
        width: 6rem;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    .header-wrapper {
      width: 93%;
    }
    .logo {
    width: 7rem;
    height: 7rem;
  }
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobileL}) {
    .header-wrapper {
      width: 93%;
    }
  }
  left
  :0;
`
// //    .header-wrapper {
//   width: 40rem;
// }
