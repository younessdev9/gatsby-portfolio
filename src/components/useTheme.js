import { useState, useEffect } from "react"

function useTheme() {
  // const currentTheme = () => {
  //   if (typeof window !== `undefined`) {
  //     let currentTheme = window.localStorage.getItem("theme") || "light"
  //     if (currentTheme) {
  //       return currentTheme
  //     } else {
  //       window.localStorage.setItem("theme", "light")
  //     }
  //     return currentTheme
  //   }
  // }
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    if (theme === "light" && typeof window !== `undefined`) {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else if (typeof window !== `undefined`) {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const localTheme = window.localStorage.getItem("theme")
      if (localTheme) {
        setTheme(localTheme)
      } else {
        setTheme("light")
        window.localStorage.setItem("theme", "light")
      }
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
