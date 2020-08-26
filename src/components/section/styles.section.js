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
      text-align: center;
      margin-top: 5rem;
      max-width: 57rem;
      color: ${({ theme }) => theme.lightgreyTextColor};
    }
    .btns {
      display: flex;
      justify-content: space-between;
      width: 50rem;
      flex-wrap: wrap;
      margin-top: 7rem;
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
      padding: 3rem 2rem;
      h3 {
        font-size: 3rem;
        line-height: 4rem;
      }
      h4 {
        margin-top: 3rem;
      }

      .btns {
        width: 40rem;
        margin-top: 5rem;
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

  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    .right-section {
      .myicon {
        max-width: 44rem;
        height: 39rem;
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    .left-section {
      align-items: center;
      width: 100%;
      flex-basis: 400rem;
      padding: 0;
    margin: 4rem 0;
      h3 {
        padding: 0 2rem;
      }

      .btns {
        width: 75%;
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

  @media only screen and (max-width: ${({ theme }) => theme.mobileX}) {
    padding: 0;
    .right-section {
      .myicon {
        max-width: 50%;
      }
    }

    .left-section {
    display: flex;
    flex-direction: column;
    padding:0;

    .btns {
      width: 70%;
    }
    h3 {
      font-size: 3rem;
      font-weight: 500;
      font-style: normal;
      .hi {
         display: none;
      }
    }
  }

`
