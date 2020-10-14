import styled from "styled-components"

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  min-height: 80vh;
  h2 {
    font-weight: 700;
    font-size: 3rem;
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2rem 1rem;
    padding: 2rem;
    .img-container {
      border-radius: 5px;
      transition: all 0.3s ease-out;
      margin: 2rem;
      width: 50%;
      &:hover {
        transform: scale(1.02);
        box-shadow: 4px 4px 8px #33333380;
      }
    }

    .info-wrapper {
      max-width: 79rem;
      min-width: 60rem;
      padding-left: 2rem;

      p {
        padding: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        letter-spacing: 0.1rem;
      }
      .info {
        padding: 1rem 0;
        margin: 2rem 0;
        width: 100%;
        .sub-info {
          width: 100%;
          margin: 2rem 0;
          display: flex;
          align-items: center;
          p a,
          .icon {
            color: inherit;
            text-decoration: none;
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
        align-items: center;

        .tools-title {
          margin-bottom: 1.8rem;
          font-size: 2rem;
          border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
        }

        .tools {
          width: 100%;
          flex-wrap: wrap;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    min-height: 88vh;
    .container {
      .info-wrapper {
        .langagues-tools {
          .tools-title {
            margin-bottom: 3rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    .container {
      margin: 0;
      padding: 1rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    .container {
      .info-wrapper {
        max-width: none;
        min-width: none;
        width: 69%;
        margin-bottom: 4rem;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    .container {
      width: 100%;
      padding: 0;
      .info-wrapper {
        min-width: auto;
        padding-left: 0;
      }
    }
    .img-container {
      width: 28.3rem;
      height: 32.7rem;
    }
  }
`

export default StyledAbout
