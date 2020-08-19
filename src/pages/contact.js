import React from "react"
import Layout from "../components/Layout"
import StyledContact from "../pages-styles/contact"

const Contact = () => (
  <Layout>
    <StyledContact>
      <p>
        You can send me email to:
        <a href="mailto:hassani.youness1999@gmail.com">
          hassani.youness1999@gmail.com
        </a>{" "}
        <br /> or fill the form below:
      </p>
      <form>
        <label for="full-name">Full Name:</label>
        <input type="text" name="name" id="full-name" placeholder="Full Name" />

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label for="message">Message:</label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        />
        <input type="submit" value="Send" />
      </form>
    </StyledContact>
  </Layout>
)

export default Contact
