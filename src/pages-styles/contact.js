import styled from "styled-components"

const StyledContact = styled.div`
  max-width: 50%;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    height: 100vh;
    width: 100vw;
    background-color: #3333;

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  p,
  label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 3rem;
  }
  p a {
    font-weight: bold;
    color: #00bbf9;
  }
  label {
    margin: 2rem 0 0.8rem 0;
    font-size: 1.9rem;
  }
  span {
    max-width: 100%;
    color: red;
    font-weight: 500;
    margin-top: 1rem;
  }
  .succes {
    color: #4bb453;
    text-align: center;
    font-size: 2rem;
  }
  form {
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    input {
      font-family: inherit;
      height: 4rem;
      padding: 0.5rem 1rem;
    }
    input,
    textarea {
      width: 100%;
      font-family: inherit;
      font-style: normal;
      font-weight: normal;
      font-size: 1.7rem;
      line-height: 2rem;
      border: 1px solid #212121;
      border-radius: 4px;
      padding: 1rem;

      &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.primaryColor};
      }
    }
    input[type="submit"] {
      width: 19rem;
      height: 3.2rem;
      align-self: center;
      margin-top: 3rem;
      background-color: ${({ theme }) => theme.primaryColor};
      color: #ffffff;
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: 0 1rem 2rem #21212180;
        transform: translateY(-1px);
      }
    }
    textarea {
      resize: vertical;
      min-height: 10rem;
    }

    input:focus::placeholder label {
      transform: translateY(3rem);
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    padding: 8rem;
    height: auto;
  }

  @media only screen and (max-width: ${({ theme }) => theme.desktop}) {
    padding: 8rem;
    height: auto;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileX}) {
    max-width: 98%;
    padding: 0.4rem;
    align-items: center;
    height: auto;
    form {
      input,
      textarea {
        width: 96%;
      }
      textarea {
        min-height: 8rem;
      }

      input[type="submit"] {
        height: 3rem;
        width: 16rem;
      }
    }

    p,
    label {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
    }
    p {
      text-align: center;
      margin-top: 3rem;
    }
    p a {
      letter-spacing: 1px;
      font-size: 2.4;
      color: #00bbf9;
    }
  }
`
export default StyledContact
