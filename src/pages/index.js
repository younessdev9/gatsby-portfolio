import React from "react"
import Layout from "../components/Layout"
import Section from "../components/section/section.component"
import Introduction from "../components/introduction/introduction"
import Social from "../components/social-media/social-media.component"
import Skills from "../components/skills/skills.component"
const Home = () => (
  <Layout>
    <Section />
    <Introduction />
    <Social />
    <Skills />
  </Layout>
)
export default Home
