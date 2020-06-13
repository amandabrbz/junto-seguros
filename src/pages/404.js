import React from "react"

import Layout from "../components/Layout"
import SEO from "../SEO"

import Erro404 from "../components/Main/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 | MovieSearch" />
    <Erro404/>
  </Layout>
)

export default NotFoundPage
