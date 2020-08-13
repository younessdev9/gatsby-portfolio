import styled from "styled-components"

export const StyledSkills = styled.div`
  /* background-color: #c4c4c4; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 3rem auto;

  .cards {
    min-width: 80%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 6rem;
  }

  h2 {
    width: 16rem;
    height: 78px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 6rem;
    line-height: 7rem;

    border-bottom: 4px solid #2a9d8f;
    color: ${props => props.theme.lightColor};
  }
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    height: 35rem;
    border: 3px solid #2a9d8f;
    border-radius: 8px;
    transition: all 0.3s ease-out;
    margin: 0.8rem;
    padding: 0.4rem;
    &:hover {
      box-shadow: 4px 4px 10px -3px ${props => props.theme.blur},
        4px 4px 10px ${props => props.theme.blur},
        -4px 4px 10px -3px ${props => props.theme.blur};
      transform: scale(1.05);
    }
  }
  .skill-icon {
    width: 28rem;
    height: 30rem;
  }
  .skill-title {
    width: 28rem;
    height: 5.5rem;
    left: 40rem;
    top: 65rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2.6rem;
    line-height: 3.2rem;
    text-align: center;
  }
`
