import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 2px solid #3333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  background: linear-gradient(45deg, #83eda5, #2a9d8f);
  /* background-color: #43464b; */
  color: #333333;

  *:not(.gatsby-logo) {
    margin: 0.6rem;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #f5f5f5;
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
    max-width: 96%;
    h4 {
      margin: 1.3rem;
    }
  }

  /* MobileM 387px and less */
  @media only screen and (max-width: ${({ theme }) => theme.mobileM}) {
    .social-media {
      display: none;
    }
  }
`

export default StyledFooter
