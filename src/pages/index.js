import React, { Component} from "react"
import Layout from "../components/Layout"
import SEO from "../SEO"
import Home from "../components/Main/Home"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Home />
      </Layout>
    )
  }
}

export default IndexPage
