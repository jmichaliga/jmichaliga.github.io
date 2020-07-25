import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Tag from "../../components/tag"

const tags = ["React", "JavaScript", "Node", "App", "Ad"];

export const query = graphql`
  query {
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            thumbnail
            tags
            author {
              id
              bio
              name
              twitter
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

const WorkPage = () => (
  <Layout>
    <SEO title="Work: Not found" />
    <h1>Work</h1>

    <div>
      {tags.map((tag, idx) => (
        <span key={`tag-${idx}`} style={{ marginRight: 8 }}>
          <Tag label={tag} />
        </span>
      ))}
    </div>
  </Layout>
)

export default WorkPage
