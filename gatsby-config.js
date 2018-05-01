module.exports = {
  plugins: [
    `gatsby-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`
  ]
}
