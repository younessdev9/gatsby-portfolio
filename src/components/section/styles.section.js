import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 3rem;

  .icons {
    height: 4rem;
    width: 4rem;
  }
  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 6rem 2rem;
    h3 {
      font-family: inherit;
      font-size: 7.2rem;
      font-weight: 500;
      line-height: 8.4rem;
      font-style: normal;
      span {
        color: #2a9d8f;
        font-family: inherit;
      }
    }
    h4 {
      width: 68rem;
      height: 8.8rem;

      font-family: inherit;
      font-style: normal;
      font-weight: normal;
      font-size: 3.6rem;
      line-height: 4.4rem;
      text-align: center;

      margin-top: 5rem;
    }
    .btns {
      width: 52rem;
      display: flex;
      justify-content: space-between;
      margin-top: 7rem;
      .main-btn:hover {
        background-color: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.buttonColor};
      }
    }
  }
  .right-section {
    display: flex;
    justify-content: flex-end;
    /* <background-color: #c4c4c4; */
    flex: 1;
    padding: 4rem;
  }
  .myicon {
    margin: 6rem 3rem 0 0;
    max-width: 60rem;
    height: 50rem;
  }
`
