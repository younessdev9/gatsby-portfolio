import React from "react"

const Main = ({ children }) => {
  return (
    <main style={{ minHeight: "90vh", maxWidth: "200rem", margin: "0 auto" }}>
      {children}
    </main>
  )
}

export default Main
