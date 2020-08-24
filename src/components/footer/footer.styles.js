import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 2px solid #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryColor}
  *:not(.gatsby-logo) {
    margin: 0.6rem;
  }
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    .gatsby-logo {
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 0.7rem;
      margin-right: 0.3rem;
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
  .footer-social {
    width: 20%;
    justify-content: space-between;
    display: flex;
    p a {
      font-weight: 500;
      text-decoration: none;
      color: inherit;
    }
  }
`

export default StyledFooter
