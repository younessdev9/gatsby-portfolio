import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/section/section.component"
import Skills from "../components/skills/skills.component"
import PrevProjects from "../components/projects/projects.component"

const Home = () => (
  <Layout>
    <SEO
      title="Home"
      description="Hi there! I'm Youness Hassani a front-end developer and JavaScript geek"
    />
    <Section />
    <Skills />
    <PrevProjects />
  </Layout>
)
export default Home
