import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledThank from "../pages-styles/thank"
import Success from "../components/assets/complete.svg"
const ThanksPage = () => {
  return (
    <Layout>
      <StyledThank>
        <Success className="success-logo" />
        <h3>
          Thanks for being awesome! I have received your message and would like
          to thank you for writing to me. If your message is urgent, please use
          the telephone number you can find it <Link to="/about">here</Link> to
          talk to me . Otherwise, I will reply by email as soon as possible.
          Talk to you soon, [Your Company]
        </h3>
      </StyledThank>
    </Layout>
  )
}

export default ThanksPage
