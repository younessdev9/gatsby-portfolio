import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: none;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    width: 100%;
    text-align: center;
    overflow: hidden;
    padding: 2rem;
    position: fixed;
    place-items: center;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    ul  {
      display: flex;
      flex-direction: column;
      height: 50%;
      li {
      margin: 3rem;
      list-style: none;
      }
    }
    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
      transition: color 0.3s linear;
      margin: 3rem;
/*
      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      } */

    }

    .logo {
      position: absolute;
      top: 0rem;
      left: 0rem;
    }

    .burger-menu {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`
