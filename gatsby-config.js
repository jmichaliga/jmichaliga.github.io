module.exports = {
  siteMetadata: {
    title: `Justin W. Michaliga`,
    description: `Justin W. Michaliga is a Javascript Engineer and Interactive Designer in Brooklyn, NYC.`,
    author: `@jmichaliga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-6741593-1",
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
