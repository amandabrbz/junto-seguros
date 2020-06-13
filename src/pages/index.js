import React from "react"
import Layout from "../components/Layout"
import SEO from "../SEO"
import Home from "../components/Main/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | PickMovie APP" />
    <Home />
  </Layout>
)

export default IndexPage
