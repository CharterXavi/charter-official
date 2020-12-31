module.exports = {
  siteMetadata: {
    title: `Charter Healthcare Group`,
    description: `Official website for Charter Healthcare Group.`,
    author: `Branon Eusebio`,
    url: 'https://charter-official-prototype.netlify.app/',
    twitterHandle: '@charterhcg',
    facebookHandle: '@charterhcg',
    instagramHandle: '@charterhcg',
    linkedinHandle: '@charter-healthcare-group'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    'gatsby-transformer-remark',
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
        icon: 'src/images/charter-compass-v6-white.webp'
      }
    },
    {
      // resolve: `gatsby-plugin-google-fonts-v2`,
      // options: {
      //   fonts: [
      //     {
      //       family: 'Nunito',
      //       weights: ['300', '400', '600', '700', '800']
      //     }
      //   ],
      //   display: 'swap'
      // }
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito",
              variants: ['300', '400', '600', '700', '800'],
              //subsets: ['latin']
              //text: 'Hello'
              fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            }
          ]
        }
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-KFB9PYV6G2", // Google Analytics / GA
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}