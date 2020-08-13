import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  padding: 3rem;
  height: 90vh;
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
      text-align: center;
      span {
        color: #2a9d8f;
        font-family: inherit;
      }
    }
    h4 {
      font-family: inherit;
      font-style: normal;
      font-weight: normal;
      font-size: 3.6rem;
      line-height: 4.4rem;
      text-align: center;

      margin-top: 5rem;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      width: 50rem;
      flex-wrap: wrap;
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
    flex: 1;
    padding: 4rem;
  }
  .myicon {
    margin: 6rem 3rem 0 0;
    max-width: 60rem;
    height: 50rem;
  }
`
