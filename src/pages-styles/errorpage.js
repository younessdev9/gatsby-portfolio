import styled from "styled-components"

const StyledError = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h4 {
    width: 80%;
    max-height: 24rem;
    font-weight: normal;
    font-size: 3rem;
    line-height: 4.4rem;
    text-align: center;
  }
  .error-illistration {
    margin: 0.6rem;
    max-width: 60rem;
    max-height: 40rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    h4 {
      font-size: 2rem;
    }
    .error-illistration {
      max-height: 22rem;
    }
  }
`

export default StyledError
