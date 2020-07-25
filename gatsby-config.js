module.exports = {
  siteMetadata: {
    title: `Justin W. Michaliga`,
    description: `Justin W. Michaliga is a Javscript Engineer and Interactive Designer in NYC.`,
    author: `@jmichaliga`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
    "Mdx.frontmatter.author": `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-6741593-1",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`100`, `400`, `700`]
          },
          {
            family: `IBM Plex Mono`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-tags",
      options: {
        templatePath: `${__dirname}/src/templates/tag.tsx`,
        prefix: "blog/tags",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
