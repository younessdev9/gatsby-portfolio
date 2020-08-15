import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 2px solid #333333;
  height: 15vh;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  *:not(.gatsby-logo) {
    margin: 0.6rem;
  }
  h3,
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2.3rem;
  }
  h4 {
    .gatsby-logo {
      width: 2rem;
      height: 2rem;
      margin-top: 0.7rem;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 2.3rem;
      transition: all 0.5s ease-out;
      &:hover {
        transform: scale(1.6) rotate(360deg);
      }
    }
    span {
      font-weight: bold;
    }
  }
`

export default StyledFooter
