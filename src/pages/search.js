import React, { Component } from "react"
import Layout from "../components/Layout"
import Find from "../components/Main/Search"
import SEO from "../SEO"

class Search extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Search | PickMovie APP" />
        <Find />
      </Layout>
    )
  }
}

export default Search
