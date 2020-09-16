import styled from "styled-components"

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 3.4rem;
    line-height: 4rem;
    border-bottom: 4px solid #2a9d8f;
    margin: 3rem auto;
  }
  .project-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90rem;
    height: 50rem;

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 3rem;
      line-height: 4rem;
      margin: 1rem;
    }
    .img-wrapper {
      width: 50rem;
      position: relative;
      background-color: Black;
      z-index: 10;

      .project-img {
        background-color: black;
        z-index: 7;
        transition: all 0.3s ease-in;
      }
      &:hover .project-img {
        z-index: 2;
        opacity: 0.3;
      }
      .github-project-link {
        position: absolute;
        bottom: 1rem;
        left: 2rem;
        z-index: 3000;
      }

      .demo-project-link {
        position: absolute;
        bottom: 1rem;
        right: 2rem;
        z-index: 3000;
      }

      .icon {
        width: 4rem;
        height: 4.3rem;
        fill: #fff;
        &:hover {
          transform: scale(1.1);
          fill: #2a9d8f;
        }
      }
    }

    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      list-style: none;
      margin: 1rem 1rem;
      li {
        border: 2px solid #2a9d8f;
        padding: 0.6rem;
        border-radius: 0.4rem;
      }
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    padding: 4rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
    /* background-color: red; */
    .project-card {
      height: auto;
      margin-bottom: 1rem;
      :last-child {
        margin-bottom: 6rem;
      }
      .img-wrapper {
        width: 36rem;
        .icon {
          width: 3.2rem;
          height: 3.3rem;
        }
      }
    }
  }
`

export default StyledProjects
