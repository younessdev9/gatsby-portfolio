import React from "react"
import Layout from "../components/Layout"
import Section from "../components/section/section.component"
import Introduction from "../components/introduction/introduction"
import Social from "../components/social-media/social-media.component"
import Skills from "../components/skills/skills.component"
import PrevProjects from "../components/projects/projects.component"

const Home = () => (
  <Layout>
    <Section />
    <Social width={"4.6rem"} height={"4.6rem"} />
    <Skills />
    <PrevProjects />
  </Layout>
)
export default Home
