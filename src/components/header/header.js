import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem;
  font-size: 2.4rem;
  /* border-bottom: 1px solid #333; */
  /* div {
    display: flex;
    align-items: center;
  } */
  .active {
    border-bottom: ${props => props.theme.borderBottom};
  }
  img {
    width: 6rem;
    height: 5rem;
    margin-left: 4rem;
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
`
