/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,    
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
  ],
}
