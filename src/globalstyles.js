import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  mode: "light",
  primaryColor: "#2a9d8f",
  darkColor: "#202124",
  borderBottom: ".6rem solid #2a9d8f",
  buttonBg: "#F5F5F5",
}

export const darkTheme = {
  mode: "dark",
  primaryColor: "#2a9d8f",
  darkColor: "#202124",
  borderBottom: ".6rem solid #2a9d8f",
  buttonBg: "#202124",
  buttonColor: "#F5F5F5",
  boxShadow: "0 7px 10px #F5F5F5",
  btnColor: "#202124",
}

export const Globalstyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.7rem;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${props =>
      props.theme.mode === "dark" ? props.theme.darkColor : "#FFFFFF"};
    color: ${props => (props.theme.mode === "dark" ? "#FFFFFF" : "#202124")};
    padding: 2rem 3.4rem;

  }
`

// ${props =>
//   props.theme.mode === "dark" ? "#202124" : "#FFFFFF"},
// color:${props => (props.theme.mode === "dark" ? "#FFFFFF" : "#202124")},
