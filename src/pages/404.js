import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../SEO"
import Erro404 from "../components/Main/404"

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="404" />
        <Erro404 />
      </Layout>
    )
  }
}

export default NotFoundPage
