/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "The History of Consoles",
    description: `The History of vido gaming consoles by release. Home video game consoles only.`,
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
        name: `console`,
        path: `${__dirname}/consoles`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
