import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

// ...

const BlogPost = ({data, children}) => {
  return (
    <Layout>
      <p>{data.mdx.frontmatter.datePublished}</p>
      <h2>{data.mdx.frontmatter.name}</h2>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        datePublished(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.name} />

export default BlogPost