import { useState, useEffect } from "react"

function useTheme() {
  const currentTheme = () => {
    let currentTheme = window.localStorage.getItem("theme") || "light"
    if (currentTheme) {
      return currentTheme
    } else {
      window.localStorage.setItem("theme", "light")
    }
    return currentTheme
  }
  const [theme, setTheme] = useState(currentTheme)
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
  return { toggleTheme, handleChecking, theme }
}

export default useTheme
