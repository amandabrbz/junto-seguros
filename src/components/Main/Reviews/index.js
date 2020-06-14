import React, { Component } from "react"
import { graphql } from "gatsby"
import Posts from "../../Posts"
import { Title, Description } from "../../Global"

export default class Reviews extends Component {
  render() {
    const { data } = this.props
    return (
      <>
        <Title titlePage={"Review dos seus filmes favoritos"} />
        <Description
          descriptionPage={
            "Descubra o que os críticos estão dizendo sobre o seu filme."
          }
        />
        <Posts data={data} />
      </>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___prefix, fields___slug], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            prefix
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`
