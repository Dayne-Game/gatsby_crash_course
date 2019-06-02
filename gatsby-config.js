module.exports = {
  siteMetadata: {
    title: `Gatsby Crash Course`,
    description: `this is a sample website for the gatsby crash course`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'
  ],
}
