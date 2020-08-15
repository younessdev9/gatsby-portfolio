import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Header from "./header/headre"
import Footer from "../components/footer/footer.component"
import { Globalstyles, lightTheme, darkTheme } from "../globalstyles"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState()
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
    }
  }, [theme])
  const handleChecking = () => {
    if (theme === "dark") {
      return true
    } else {
      return false
    }
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Globalstyles />
      <Header toggle={toggleTheme} checked={handleChecking} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
export default Layout
