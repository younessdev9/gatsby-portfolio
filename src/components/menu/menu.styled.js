import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: none;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    width: 100vw;
    text-align: center;
    overflow: hidden;
    position: fixed;
    place-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(140%)")};

    .head {
      position: absolute;
      top: 2.5rem;
      left: 3rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      width: auto;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        margin: 0.5rem;
        list-style: none;
      }
    }
    a {
      font-size: 1.8rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.2rem;
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
      transition: color 0.3s linear;
    }
  }
`
