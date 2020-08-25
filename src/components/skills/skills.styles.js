import styled from "styled-components"

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 3rem auto;

  .cards {
    min-width: 80%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 6rem;
  }

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 3.5rem;
    line-height: 4rem;

    border-bottom: 3px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.lightColor};
  }
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    height: 35rem;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 8px;
    transition: all 0.3s ease-out;
    margin: 1.4rem;
    padding: 0.4rem;
    &:hover {
      box-shadow: 4px 4px 10px -3px ${props => props.theme.blur},
        4px 4px 10px ${props => props.theme.blur},
        -4px 4px 10px -3px ${props => props.theme.blur};
      transform: scale(1.03);
    }
  }
  .skill-icon {
    width: 28rem;
    height: 30rem;
  }
  .skill-title {
    width: 28rem;
    height: 5.5rem;
    left: 40rem;
    top: 65rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2.6rem;
    line-height: 3.2rem;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    .cards {
      justify-content: space-evenly;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    .cards {
      display: flex;
      justify-content: center;
    }
  }
`
