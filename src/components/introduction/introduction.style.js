import styled from "styled-components"

export const StyledMain = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items:
  background-color: #c4c4c4;
  .title {
    h2 {
      margin: auto;
      border-bottom: 4px solid #2a9d8f;
      width: 41rem;
      height: 6.6rem;

      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 3.6rem;
      line-height: 6rem;
    }
  }
  .bottom-info {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    margin-top: 3rem;
    .intro {
    margin: 2rem;
    padding: 3rem;


    p {
      width: 88.5rem;
      height: 40rem;
      left: 11.1rem;

      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 3.6rem;
      line-height: 131.7%;
    }
    }
`
