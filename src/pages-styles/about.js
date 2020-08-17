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
    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 2.4rem;
      line-height: 3rem;
      letter-spacing: -0.025em;
      flex-grow: 1;
    }
  }
`

export default StyledAbout
