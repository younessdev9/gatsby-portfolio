import styled from "styled-components"

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    flex-wrap: wrap;

  .personal-img {

    width: 26%;
    border-radius: 5px;
    margin-left: 2rem;
    transition: all 0.3s ease-out;
    flex-basis: 50%;
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
      font-size: 2rem;
      line-height: 3rem;
      letter-spacing: -0.025em;
      flex-grow: 1;
      color: {({theme}) => theme.anchortagColor}
    }

    .info {
      margin-top: 3rem;
      .sub-info {
        display flex;
        justify-content: space-between;
        margin: 1.4rem 0;
        align-items: center;
        width: 100%;
        p a {
          color: inherit;
        }
        .icon {
          height: 2.8rem;
          width: 2.8rem;
          margin-right: 2rem;
        }
      }
    }
    .langagues-tools {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: wrap;
      .tools-title {
        border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
        font-style: normal;
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 4rem;
        margin: 2rem 0;
      }
      .tools {
        width: 100%;
      }
    }
  }
  }
`

export default StyledAbout
