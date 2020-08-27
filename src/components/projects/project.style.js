import styled from "styled-components"

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  padding: 3rem;
  margin: 3rem auto 10rem auto;

  h2 {
    font-weight: normal;
    font-size: 3.5rem;
    line-height: 4rem;

    border-bottom: 3px solid ${({ theme }) => theme.primaryColor};
    color: ${props => props.theme.lightColor};
  }

  .project-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    width: 30rem;
    height: 37rem;
    margin: 1rem;
    transition: all 0.3s ease-out;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 8px;

    &:hover {
      box-shadow: box-shadow: 0 0 2px grey;
      /* box-shadow: 4px 4px 10px -3px ${props => props.theme.blur},
        4px 4px 10px ${props => props.theme.blur},
        -4px 4px 10px -3px ${props => props.theme.blur}; */
      transform: scale(1.03);
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin-top: 0.8rem;
      li {
        border: 1px solid #2a9d8f;
        border-radius: 2px;
        padding: 0.3rem;
        transition: all 0.3s ease-out;
        &:hover {
          color: #f5f5f5;
          background-color: ${({ theme }) => theme.primaryColor};
          cursor: pointer;
        }
        &:active {
          transform: translateY(-2px);
        }
      }
    }
  }
  .project-card-title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    width: 100%;
    margin-top: 1rem;
  }
  .cards-container {
    min-width: 80%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 6rem 2rem;
  }
  .project-links {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
    a {
      .icon {
        width: 3rem;
        height: 3rem;
        fill: ${({ theme }) => theme.socialColor};
        transition: all 0.3s ease-out;
        &:hover {
          transform: scale(1.4);
          fill: ${({ theme }) => theme.primaryColor};
        }
      }
    }
    height: 3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tabletL}) {
    padding: 0;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileX}) {
    margin: 2 auto;
    padding: 0;
    width: 90%;
    height: grid-auto-columns;
    h2 {
      font-size: 2rem;
      line-height: 3rem;
    }
    .cards-container {
      margin: 2rem 0;
      width: 90%;
      .project-card {
        width: 69%;
        margin: 1rem 0;
      }
    }

    .project-card-title {
      font-weight: normal;
      font-size: 1.9rem;
      width: 100%;
      margin-top: 1rem;
    }

    .project-links {
    margin: .5rem;
    a {
      .icon {
        width: 2rem;
        height: 2rem;
        fill: ${({ theme }) => theme.socialColor};
        transition: all 0.3s ease-out;
        &:hover {
          transform: scale(1.4);
          fill: ${({ theme }) => theme.primaryColor};
        }
      }
    }
    height: 3rem;
  }
  }
  /* MobileM 387px and less */
  @media only screen and (max-width: ${({ theme }) => theme.mobileM}) {
    padding: 0;
    width: 100%;
    .cards-container {
      .project-card {
        width: 88%;
        height: 70%;
        .stuck {
          li {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`
export default StyledProjects
