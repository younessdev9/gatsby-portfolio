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
    line-height: 4.7rem;
    width: 15rem;
    border-bottom: 4px solid #2a9d8f;
    color: ${props => props.theme.lightColor};
  }

  .cards-container {
    min-width: 80%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 6rem;
  }

  .project-card {
    background-color: #c4c4c4;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30rem;
    height: 100%;
    margin: 1rem;
  }
`
export default StyledProjects
