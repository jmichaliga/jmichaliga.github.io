module.exports = {
  siteMetadata: {
    title: `Justin W. Michaliga`,
    description: `Justin W. Michaliga is a Javscript Engineer and Interactive Designer in NYC.`,
    author: `@jmichaliga`,
  },
  mapping: {
    "Mdx.frontmatter.author": `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-6741593-1`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`100`, `400`, `700`],
          },
          {
            family: `IBM Plex Mono`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-tags`,
      options: {
        templatePath: `${__dirname}/src/templates/tag.js`,
        prefix: `blog/tags`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
  ],
}
