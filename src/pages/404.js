import React from "react"
import Layout from "../components/Layout"
import StyledError from "../components/page-styles/errorpage.js"
import PageError from "../components/assets/errorpage.svg"

const ErrorPage = () => {
  return (
    <Layout>
      <StyledError>
        <h4>
          Sorry No such page ! <br /> try another page or make sure you're in
          right Route
        </h4>
        <PageError className="error-illistration" />
      </StyledError>
    </Layout>
  )
}

export default ErrorPage
