import React, { Component } from "react"
import Layout from "../components/Layout"
import Reviews from "../components/Main/Reviews"
import SEO from "../SEO"

class Review extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Reviews | PickMovie APP" />
        <Reviews />
      </Layout>
    )
  }
}

export default Review
