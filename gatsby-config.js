module.exports = {
  siteMetadata: {
    title: 'e. crowder | web developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylus',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-115921525-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
