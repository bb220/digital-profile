module.exports = {
  plugins: [
    `gatsby-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-content`,
        path: `${__dirname}/src/content/about/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-content`,
        path: `${__dirname}/src/content/home/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work-content`,
        path: `${__dirname}/src/content/work/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`
  ]
}
