/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    display: `minimal-ui`,
    icon: `src/images/favicon-192x192.png`,
    },
  },
],
}
