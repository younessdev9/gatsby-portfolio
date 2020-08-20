import styled from "styled-components"
import img from "../assets/bg.svg"
export const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 3rem;
  height: 90vh;

  background-image: url(${img});
  .icons {
    height: 4rem;
    width: 4rem;
  }
  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 2rem;
    h3 {
      font-family: inherit;
      font-size: 5rem;
      font-weight: 500;
      line-height: 5.4rem;
      font-style: normal;
      span {
        color: #2a9d8f;
        font-family: inherit;
      }
    }
    h4 {
      font-family: inherit;
      font-style: normal;
      font-weight: normal;
      font-size: 3rem;
      line-height: 4rem;
      text-align: center;
      margin-top: 5rem;
      max-width: 57rem;
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
    .myicon {
      max-width: 50rem;
      height: 50rem;
    }
  }
`
