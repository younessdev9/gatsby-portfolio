import styled from "styled-components"

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  padding: 3rem;
  margin: 3rem auto;

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.8rem;
    width: 17rem;
    border-bottom: 4px solid #2a9d8f;
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
    border: 3px solid #2a9d8f;
    border-radius: 8px;

    &:hover {
      box-shadow: 4px 4px 10px -3px ${props => props.theme.blur},
        4px 4px 10px ${props => props.theme.blur},
        -4px 4px 10px -3px ${props => props.theme.blur};
      transform: scale(1.05);
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
`
export default StyledProjects
