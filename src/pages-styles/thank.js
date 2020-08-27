import styled from "styled-components"

const StyledThank = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .success-logo {
    max-width: 15rem;
    max-height: 15rem;
  }

  h3 {
    font-weight: normal;
    color: #00b7c2;
    font-size: 2rem;
    max-width: 90%;
    text-align: center;
    a {
      color: #2a9d8f;
      font-weight: 500;
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

export default StyledThank
