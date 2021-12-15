module.exports = {
  siteMetadata: {
    title: `Sosnowianka`,
    subtitle: `Stanisław Dolny`,
    description: `Oficjalna strona internetowa drużyny KS Sonwowianka Stanisław Dolny. Najważniejsze informacje na temat naszego klubu.`,
    author: `dw`,
    siteUrl: `https://sosnowianka.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/_posts/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featuredGames`,
        path: `${__dirname}/content/featuredGames`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `schedule`,
        path: `${__dirname}/content/schedule`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `juniorTeams`,
        path: `${__dirname}/content/juniorTeams`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `players`,
        path: `${__dirname}/content/players`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sponsor`,
        path: `${__dirname}/content/sponsor`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sosnowiankaLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
