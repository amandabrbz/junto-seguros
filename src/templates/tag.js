import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Title } from "../components/Global"
import Posts from "../components/Posts"
import SEO from "../SEO"

export default class Tag extends Component {
  render() {
    const { data, pathContext } = this.props
    const { tag } = pathContext
    return (
      <Layout>
        <SEO title="Tags | PickMovie APP" />
        <Title titlePage={"Todos os posts com a tag:"}>{tag}</Title>
        <Posts data={data} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`
