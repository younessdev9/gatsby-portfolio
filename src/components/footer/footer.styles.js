import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 2px solid #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  *:not(.gatsby-logo) {
    margin: 0.6rem;
  }
  h4 {
    font-size: 1.4rem;
    min-width: 30rem;
    font-weight: normal;
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
  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    justify-content: center;

    h4 {
      margin: 1.3rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.laptop}) {
    flex-direction: column;
  }
`

export default StyledFooter
