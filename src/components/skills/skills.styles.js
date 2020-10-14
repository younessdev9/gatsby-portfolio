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
    width: 28rem;
    height: 35rem;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 8px;
    transition: all 0.3s ease-out;
    margin: 1.4rem;
    padding: 1rem;
    h3 {
      font-size: 2rem;
    }
    &:hover {
      box-shadow: 0 0 6px #33333380;
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
  /* 500px */
  @media (max-width: ${({ theme }) => theme.mobileL}) {
    width: 90%;
    margin: 2rem auto;
    padding: 0;
    h2 {
      font-weight: normal;
      font-size: 2rem;
      line-height: 3rem;
    }
    .skill-item {
      height: 32rem;
      width: 27rem;
      h3 {
        font-size: 2rem;
      }
    }
    .skill-icon {
      width: 23rem;
      height: 26rem;
    }
  }

  /* MobileM 387px and less */
  @media only screen and (max-width: ${({ theme }) => theme.mobileM}) {
    margin-top: 3rem;

    .cards {
      margin-top: 2rem;
    }
  }
`
