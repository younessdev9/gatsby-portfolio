import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBlog from "../pages-styles/blog"
const Blog = () => (
  <Layout>
    <SEO
      title="Blog"
      descrition="this is youness blog where you can find all my blog about development and personal articles"
    />
    <StyledBlog>
      <h3>comming soon!</h3>
    </StyledBlog>
  </Layout>
)

export default Blog
