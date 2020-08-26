import styled from "styled-components"

const StyledContact = styled.div`
  max-width: 50%;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 3rem;

  p,
  label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2.2rem;
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

  form {
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    input {
      font-family: inherit;
      height: 4rem;
      padding: 1rem;
    }
    input,
    textarea {
      width: 100%;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 2.2rem;
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
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileX}) {
    max-width: 98%;
    padding: 0.9rem;
    align-items: center;
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
//submitBtnBgColor
