import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const Posts = ({ data }) => {
  if (!data) return null
  const { edges } = data.allMarkdownRemark
  const posts = edges.map(({ node }) => (
    <div key={node.fields.slug} className="post">
      <Link to={node.fields.slug} className="post-title">
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p className="post-date">{node.frontmatter.date}</p>
      <p>{node.frontmatter.description}</p>
    </div>
  ))
  return <div className="posts">{posts}</div>
}

export default Posts

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
