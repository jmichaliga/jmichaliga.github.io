module.exports = {
  siteMetadata: {
    title: `Justin W. Michaliga`,
    description: `Justin W. Michaliga is a Javscript Engineer and Interactive Designer in Brooklyn, NYC.`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Michaliga`,
        short_name: `JMichaliga`,
        icon: `src/images/jm.svg`,
        background_color: `#FA1967`,
        theme_color: `#FA1967`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-6741593-1",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
