import React, {Component} from "react"
import Layout from "../components/Layout"
import Aboutt from "../components/Main/About"
import SEO from "../SEO"

class About extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About | PickMovie APP" />
        <Aboutt/>
      </Layout>
    )
  }
}

export default About
