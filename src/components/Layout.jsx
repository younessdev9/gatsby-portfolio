import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import Header from "./header/headre"
import Footer from "../components/footer/footer.component"
import { Globalstyles, lightTheme, darkTheme } from "../globalstyles"
import Main from "./main"
import useTheme from "./useTheme"

const Layout = ({ children }) => {
  const { toggleTheme, handleChecking, theme } = useTheme()
  const [open, setOpen] = useState(false)

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
