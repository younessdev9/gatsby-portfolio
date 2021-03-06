import styled from "styled-components"
export const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem;

  .left-section {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 4rem;
      font-weight: 500;
      line-height: 5.4rem;
      font-style: normal;
      span {
        color: ${({ theme }) => theme.primaryColor};
        font-family: inherit;
      }
    }
    h4 {
      font-weight: normal;
      font-size: 2rem;
      line-height: 3rem;
      margin-top: 3rem;
      max-width: 57rem;
      color: ${({ theme }) => theme.lightgreyTextColor};
    }
    .btns {
      display: flex;
      justify-content: space-between;
      width: 40rem;
      flex-wrap: wrap;
      margin-top: 3rem;
    }
  }
  .right-section {
    display: flex;
    justify-content: flex-end;
    padding: 4rem;
    height: 100%;
    .myicon {
      max-width: 50rem;
      height: 50rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    padding: 2rem;
    .left-section {
      margin: 3rem 2rem;
      h3 {
        font-size: 3rem;
        line-height: 4rem;
      }
      h4 {
        margin-top: 3rem;
      }

      .btns {
        width: 40rem;
        margin-top: 2.6rem;
      }
    }

    .right-section {
      justify-content: center;
      padding: 1rem;
      height: 90%;
      .myicon {
        max-width: 50rem;
        height: 50rem;
      }
    }
  }
  /* 796px */
  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    .right-section {
      display: none;
    }
    .left-section {
      .btns {
        justify-content: center;
      }
      h3 {
        .hi {
          font-size: 1.8rem;
          font-weight: 400;
        }
      }
      h4 {
        text-align: left;
        margin-top: 2rem;
      }
    }
  }

  /* tablet max 768px and less */
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .left-section {
      h4 {
        text-align: left;
      }
      .btns {
        margin-top: 2rem;
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    padding: 0;
    margin: 1rem auto;
    width: 90%;
    .right-section {
      .myicon {
        max-width: 50%;
      }
    }

    .left-section {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0 auto 1rem auto;
      align-items: center;
      width: 100%;
      flex-basis: 400rem;
      padding: 0;
      margin: 4rem 0;

      .btns {
        width: 75%;
        margin-top: 2.6rem;
        justify-content: center;
      }
      h4 {
        text-align: center;
        margin-top: 1rem;
      }
      h3 {
        text-align: center;
        font-size: 3rem;
        font-weight: 500;
        font-style: normal;
        padding: 0 2rem;
        .hi {
          display: none;
        }
      }
    }
    .right-section {
      padding: 0;
      .myicon {
        max-width: 27rem;
        height: 30rem;
      }
    }
  }

  /* MobileM 387px and less */
  @media only screen and (max-width: ${({ theme }) => theme.mobileM}) {
    .left-section {
      display: flex;
      flex-direction: column;
      padding: 0;

      .btns {
        width: 90%;
        display: flex;
        justify-content: space-evenly;
      }
      h3 {
        font-size: 2rem;
      }
      h4 {
        width: 90%;
        text-align: center;
      }
    }
  }
`
