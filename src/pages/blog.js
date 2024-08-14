import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.name}</h2>
            <p>Posted: {node.frontmatter.datePublished}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      
    </Layout>
  )
}
export const query = graphql`
  query MyQuery { 
   allMdx(sort: {frontmatter: {datePublished: DESC}}) {
    nodes {
      frontmatter {
        datePublished(formatString: "MMMM D, YYYY")
        name
      }
      id
      excerpt
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage