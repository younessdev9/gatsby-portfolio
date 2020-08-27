// const activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// console.log(`Using environment config: '${activeEnv}'`)

// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// })

import React, { useState } from "react"
import { useFormik } from "formik"
import axios from "axios"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import StyledContact from "../pages-styles/contact"
import Spiner from "../components/assets/spinner.svg"
const Contact = () => {
  const validate = values => {
    const errors = {}
    if (!values.message) {
      errors.message = "Message is required"
    }

    if (!values.fullName) {
      errors.fullName = "Full name is required"
    }

    if (!values.email) {
      errors.email = "Email is required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    return errors
  }

  const [serverState, setServerState] = useState()

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg })
  }
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      fullName: "",
      message: "",
      email: "",
    },
    validate,
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: process.env.GATSBY_FORMS_ENDPOINT,
        data: values,
      })
        .then(response => {
          setLoading(false)
          actions.setSubmitting(false)
          actions.resetForm()
          handleServerResponse(true, "Thank you for submiting !")
          navigate("/thank-you")
        })
        .catch(error => {
          setLoading(false)
          actions.setSubmitting(false)
          handleServerResponse(false, error.response.data.error)
        })
    },
  })
  const handleSubmit = e => {
    e.preventDefault()
    formik.handleSubmit()
    setLoading(true)
  }
  return (
    <Layout>
      <StyledContact>
        {loading && (
          <div className="loading">
            <Spiner className="spinner" />
          </div>
        )}
        <p>
          You can send me email to: &nbsp;
          <a href="mailto:younessdev@yahoo.com">
            younessdev@yahoo.com
          </a> <br /> or fill the form below:
        </p>
        <form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="full-name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            required
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <span className="error">{formik.errors.fullName}</span>
          ) : null}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}

          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            required
          />
          {formik.touched.message && formik.errors.message ? (
            <span className="error">{formik.errors.message}</span>
          ) : null}
          <input type="submit" value="Send" />
          {serverState && (
            <span className={!serverState.ok ? "error" : "succes"}>
              {serverState.msg}
            </span>
          )}
        </form>
      </StyledContact>
    </Layout>
  )
}
export default Contact
