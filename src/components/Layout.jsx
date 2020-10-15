import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Header from "./header/headre"
import Footer from "../components/footer/footer.component"
import { Globalstyles, lightTheme, darkTheme } from "../globalstyles"
import Main from "./main"
const Layout = ({ children }) => {
  const currentTheme =
    typeof window !== undefined ? window.localStorage.getItem("theme") : "light"
  const [theme, setTheme] = useState(currentTheme)
  const [open, setOpen] = useState(false)

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
      <Header
        toggle={toggleTheme}
        checked={handleChecking}
        open={open}
        setOpen={setOpen}
      />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}
export default Layout
