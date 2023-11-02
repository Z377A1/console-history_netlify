/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "History of Consoles",
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@ZettaiDao`,
    image: `./static/favicon.png`, // does not show
    siteUrl: `https://www.historyofconsoles.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
