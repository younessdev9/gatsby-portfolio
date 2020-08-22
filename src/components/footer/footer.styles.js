import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 2px solid #333333;
  display: flex;
  padding: 0.5rem;
  *:not(.gatsby-logo) {
    margin: 0.6rem;
  }

  .social-media {
    height: 2rem;
  }
  h3,
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
  }
  h4 {
    .gatsby-logo {
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 0.7rem;
      font-style: normal;
      font-weight: normal;
      font-size: 1.3rem;
      transition: all 0.5s ease-out;
      transform: translateY(22%);
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
