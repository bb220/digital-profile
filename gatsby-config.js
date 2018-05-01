module.exports = {
  plugins: [
    'gatsby-link',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    }
  ]
}
