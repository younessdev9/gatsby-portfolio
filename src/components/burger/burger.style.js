import styled from "styled-components"

export const StyledBurger = styled.button`
  display: none;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    position: absolute;
    top: 5%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 111;

    &:focus {
      outline: none;
    }

    div {
      width: 100%;
      height: 0.5rem;
      background: ${({ theme, open }) =>
        open ? theme.primaryDark : theme.primaryLight};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`
