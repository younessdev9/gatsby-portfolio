import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  mode: "light",
  primaryColor: "#2a9d8f", //#63b6ff
  darkColor: "#202124",
  socialColor: "#000000",
  borderBottom: ".4rem solid #2a9d8f",
  buttonBg: "#FFFFFF",
  buttonColor: "#000000",
  btnHoverColor: "#F5F5F5",
  submitBtnBgColor: "#f5f5f5",
  anchortagColor: "red",
  //text color
  lightgreyTextColor: "#6C757D",
  mobileL: "500px",
  mobileXL: "450px",
  mobileX: "500px",
  tablet: "768px",
  tabletL: "796px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",

  //BURGER MENU
  primaryDark: "#0D0C1D",
  primaryLight: "#F5F5F5",
  mobile: "576px",
}

export const darkTheme = {
  mode: "dark",
  blur: "#C4C4C4",
  lightColor: "#F5F5F5", //   buttonColor
  socialColor: "#F5F5F5",
  primaryColor: "#2a9d8f",
  darkColor: "#202124", //buttonColor
  borderBottom: ".6rem solid #2a9d8f",
  buttonBg: "#202124",
  buttonColor: "#F5F5F5",
  //text color
  lightgreyTextColor: "#6c757d",
  boxShadow: "0 7px 10px #F5F5F5",
  btnColor: "#202124",
  btnHoverColor: "#F5F5F5",
  submitBtnBgColor: "#2a9d8f",
  anchortagColor: "#F5F5F5",
  mobileL: "500px",
  mobileXL: "450px",
  mobileX: "500px",
  tablet: "768px",
  tabletL: "796px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",

  //  BURGER MENU THEME

  primaryDark: "#FFFFFF",
  primaryLight: "#333333",
  mobile: "576px",
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
    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      margin: 0 auto;
    }
  }
  body {
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    background-color: ${props =>
      props.theme.mode === "dark" ? props.theme.darkColor : "#FFFFFF"};
    color: ${props => (props.theme.mode === "dark" ? "#F5F5F5" : "#202124")};
    padding: 7rem 1rem 1rem 1rem; */
    overflow-x: hidden;
    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    padding: 7rem 0 1rem 4rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.mobileL}) {
      padding: 7rem 0 0 0;
    }
  }
`
