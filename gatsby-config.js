module.exports = {
  siteMetadata: {
    title: `Charter Healthcare Group`,
    description: `Official website for Charter Healthcare Group.`,
    author: `Branon Eusebio`,
    url: 'https://charterhcg.com/',
    twitterHandle: '@charterhcg',
    facebookHandle: '@charterhcg',
    instagramHandle: '@charterhcg',
    linkedinHandle: '@charter-healthcare-group',
    locations: [
      {
        name: 'Charter Healthcare of Phoenix',
        path: '/locations/phoenix',
        region: 'Tempe, AZ',
        number: '909-644-4965',
      },
      {
        name: 'Charter Healthcare of Tuscon',
        path: '/locations/tuscon',
        region: 'Tuscon, AZ',
        number: '909-644-4965',
      },
      {
        name: 'Charter High Desert Healthcare Group',
        path: '/locations/high-desert',
        region: 'Apple Valley, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Hospice of Colton',
        path: '/locations/hospice-colton',
        region: 'Colton, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Home Health',
        path: '/locations/home-health',
        region: 'Covina, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Hospice of the San Gabriel Valley',
        path: '/locations/hospice-san-gabriel-valley',
        region: 'Covina, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Home Health of the Desert',
        path: '/locations/home-health-desert',
        region: 'Palm Desert, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Hospice of the Desert',
        path: '/locations/hospice-desert',
        region: 'Covina, CA',
        number: '909-644-4965',
      },
      {
        name: 'Cambridge Hospice',
        path: '/locations/cambridge-hospice',
        region: 'Rancho Cucamonga, CA',
        number: '909-644-4965',
      },
      {
        name: 'Cambridge Hospice of Riverside',
        path: '/locations/cambridge-hospice-riverside',
        region: 'Riverside, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Hospice of San Diego',
        path: '/locations/hospice-san-diego',
        region: 'San Diego, CA',
        number: '909-644-4965',
      },
      {
        name: 'Charter Hospice',
        path: '/locations/hospice',
        region: 'Simi Valley, CA',
        number: '909-644-4965',
      },
      {
        name: 'Cambridge Hospice of Orange County',
        path: '/locations/hospice-orange-county',
        region: 'Simi Valley, CA',
        number: '909-644-4965',
      },
      {
        name: 'Vitality Home Healthcare',
        path: '/locations/home-health-vitality',
        region: 'Loveland, CO',
        number: '909-644-4965',
      },
      {
        name: 'Charter Healthcare of Las Vegas',
        path: '/locations/las-vegas',
        region: 'Henderson, NV',
        number: '909-644-4965',
      },
      {
        name: 'Charter Healthcare of West Jordan',
        path: '/locations/west-jordan',
        region: 'West Jordan, Utah',
        number: '909-644-4965',
      },
    ]
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
              family: "Roboto",
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin']
              //text: 'Hello'
              fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
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
          "G-5VH1HRENRY", // Google Analytics / GA
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "G-5VH1HRENRY",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //   },
    // },
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}