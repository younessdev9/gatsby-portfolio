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
    line-height: 2.9rem;
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
      width: 20rem;
      align-self: center;
      margin-top: 3rem;
      background-color: ${({ theme }) => theme.primaryColor};
      color: #f5f5f5;
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: 0 1rem 2rem #21212180;
        transform: translateY(-1px);
      }
    }
    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 10rem;
    }

    input:focus::placeholder label {
      transform: translateY(3rem);
    }
  }
`
export default StyledContact
//submitBtnBgColor
