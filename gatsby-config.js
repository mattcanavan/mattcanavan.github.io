/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    display: `minimal-ui`,
    icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
    },
  },
],
}
