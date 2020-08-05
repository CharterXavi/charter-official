module.exports = {
  siteMetadata: {
    title: `Charter Healthcare Group`,
    description: `Official website for Charter Healthcare Group.`,
    author: `Branon Eusebio`,
    image: `src/images/charter-logo-rework-3-white.png`,
    menuLinks: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Services',
        path: '/services'
      },
      {
        name: 'Our Team',
        path: '/our-team'
      },
      {
        name: 'News',
        path: '/news'
      },
      {
        name: 'Careers',
        path: '/careers'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
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
    `gatsby-transformer-remark`,
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
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: ['400', '700']
          },
          {
            family: `Quicksand`,
            variants: ['400', '700']
          }
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}