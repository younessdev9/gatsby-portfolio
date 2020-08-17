import styled from "styled-components"

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-size: 3.7rem;
    line-height: 4.5rem;
    border-bottom: 4px solid #2a9d8f;
    margin-bottom: 4rem;
  }

  .info-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .personal-img {
    width: 26%;
    border-radius: 5px;
    margin-left: 2rem;
    transition: all 0.3s ease-out;

    &:hover {
      outline: 1rem solid ${({ theme }) => theme.primaryColor};
      outline-offset: 2rem;
      transform: scale(1.06);
    }
  }
  .right-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 43rem;
    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 2.4rem;
      line-height: 3rem;
      letter-spacing: -0.025em;
      flex-grow: 1;
    }

    .langagues-tools {
      .tools-title {
        border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
        font-style: normal;
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 4rem;
        margin: 2rem;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export default StyledAbout
