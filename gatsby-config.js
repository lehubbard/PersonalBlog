module.exports = {
    siteMetadata: {
      title: `Lucas Hubbard`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      "gatsby-plugin-react-helmet",
      `gatsby-transformer-sharp`,
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `page-content`,
          path: `${__dirname}/page-content`,
        }
      },
      'gatsby-plugin-mdx',
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          url:
            process.env.WPGRAPHQL_URL ||
            `https://lucashubbard.com/wordpress/graphql`,
        },
      },
    ]
}