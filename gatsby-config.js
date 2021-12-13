const dotenv = require('dotenv');

if(process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: `Charter Healthcare Group`,
    description: `Official website for Charter Healthcare Group.`,
    author: `Branon Eusebio`,
    url: 'https://charterhcg.com/',
    siteUrl: 'https://charterhcg.com/',
    twitterHandle: '@charterhcg',
    facebookHandle: '@charterhcg',
    instagramHandle: '@charterhcg',
    linkedinHandle: '@charter-healthcare-group',
    locations: [
      {
        name: 'Charter Healthcare of Phoenix',
        path: '/locations/phoenix',
        mapLink: 'https://goo.gl/maps/TnXuzuwG1Ec5TuWk6',
        city: 'Phoenix',
        state: 'Arizona',
        phone: {
          general: '480-750-4008',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '480-498-5245',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '1232 E. Broadway St. Ste. 210, Tempe, AZ 85282',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 33.408025, lng: -111.919244 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Silver Linings Hospice Care',
        path: '/locations/albuquerque',
        mapLink: 'https://goo.gl/maps/iMe4rCuJxmFexZWY6',
        city: 'Albuquerque',
        state: 'New Mexico',
        phone: {
          general: '505-286-4219',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '505-286-7735',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '12126 N. Hwy 14 Suite A, Cedar Crest, NM 87008',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 35.117780, lng: -106.371374 },
        isClicked: false,
        isExpanded: false,
      }, 
      {
        name: 'Charter Healthcare of Tucson',
        path: '/locations/tucson',
        mapLink: 'https://goo.gl/maps/bPJTJV3wBqTp2c8y7',
        city: 'Tucson',
        state: 'Arizona',
        phone: {
          general: '520-476-3611',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '520.476.3633',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '6400 E. Grant Rd., Ste. 150 Tucson, AZ 85715',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 32.24938, lng: -110.855152 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of High Desert',
        path: '/locations/high-desert',
        mapLink: 'https://goo.gl/maps/ubdJLu7KBqoLm27t9',
        city: 'High Desert',
        state: 'California',
        phone: {
          general: '760-247-1161',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '760-247-5502',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '19015 Town Center Dr. Ste. 104, Apple Valley, CA 92308',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 34.465386, lng: -117.248551 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Generations Hospice Care',
        path: '/locations/generations-care',
        mapLink: 'https://goo.gl/maps/L4PqQMKN4xRXWMAL8',
        city: 'San Antonio',
        state: 'Texas',
        phone: {
          general: '210-979-9933',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '760-247-5502',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '2819 Northwest Loop 410, San Antonio, TX  78230',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 29.51126243720625,  lng: -98.53946842998343 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of San Bernardino',
        path: '/locations/san-bernardino',
        mapLink: 'https://goo.gl/maps/7pNfrqqzGiZFG5PK6',
        city: 'San Bernardino',
        state: 'California',
        phone: {
          general: '909-825-2969',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '909-825-8751',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '1007 E. Cooley Dr. Ste. 100 Colton, CA 92324',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 34.05547, lng: -117.310526 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Home Health of San Gabriel Valley',
        path: '/locations/san-gabriel-valley',
        mapLink: 'https://goo.gl/maps/pgsmZruf97YpLHWM7',
        city: 'San Gabriel Valley',
        state: 'California',
        phone: {
          general: '',
          homeHealth: '626-915-7490',
          hospice: '626-331-8001'
        },
        fax: {
          general: '',
          homeHealth: '626-915-6050',
          hospice: '855-647-6360'
        },
        address: {
          general: '',
          homeHealth: '970 S. Village Oaks Dr. Ste. 102, Covina, CA 91724',
          hospice: '970 S. Village Oaks Dr. Ste. 106, Covina, CA 91724'
        },
        coordinates: { lat: 34.071759, lng: -117.862599 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Genesis Hospice Care',
        path: '/locations/athens-care',
        mapLink: 'https://goo.gl/maps/7bCtTnd6C4aGRbgi7',
        city: 'Athens',
        state: 'Texas',
        phone: {
          general: '',
          homeHealth: '903-675-4730',
          hospice: '903-675-4730'
        },
        fax: {
          general: '',
          homeHealth: '903-675-4730',
          hospice: '903-675-4730'
        },
        address: {
          general: '',
          homeHealth: '1317 S Palestine St, Athens, TX 75751',
          hospice: '1317 S Palestine St, Athens, TX 75751'
        },
        coordinates: { lat: 32.176430, lng: -95.846774 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Palm Desert',
        path: '/locations/palm-desert',
        mapLink: 'https://goo.gl/maps/J6c31pFG1oehbkCf6',
        city: 'Palm Desert',
        state: 'California',
        phone: {
          general: '',
          homeHealth: '760-568-2002',
          hospice: '760-568-2002'
        },
        fax: {
          general: '',
          homeHealth: '760-568-2439',
          hospice: '760-568-2043'
        },
        address: {
          general: '',
          homeHealth: '72855 Fred Waring Dr. Ste. A4, Palm Desert, CA 92260',
          hospice: '72855 Fred Waring Dr. Ste. A5, Palm Desert, CA 92260'
        },
        coordinates: { lat: 33.728698, lng: -116.394019 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Rancho Cucamonga',
        path: '/locations/rancho-cucamonga',
        mapLink: 'https://goo.gl/maps/dteVihQGcRe4RYsA9',
        city: 'Rancho Cucamonga',
        state: 'California',
        phone: {
          general: '866-669-1686',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '909-532-8685',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '9229 Utica Ave. Ste. 100, Rancho Cucamonga, CA 91730',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 34.085486, lng: -117.57063 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Riverside',
        path: '/locations/riverside',
        mapLink: 'https://goo.gl/maps/qrBbH7kDsYASQJMj8',
        city: 'Riverside',
        state: 'California',
        phone: {
          general: '951-509-9474',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '951-509-9471',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '6560 Van Buren Blvd. Ste. G, Riverside, CA 92503',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 33.949954, lng: -117.454308 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of San Diego',
        path: '/locations/san-diego',
        mapLink: 'https://goo.gl/maps/V3rCjhb33ruM5m2S8',
        city: 'San Diego',
        state: 'California',
        phone: {
          general: '760-414-9717',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '760-414-9717',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '16955 Via Del Campo Ste. 100, San Diego, CA 92127',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 33.019872, lng: -117.092233 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Orange County',
        path: '/locations/orange-county',
        mapLink: 'https://goo.gl/maps/TNcvBzkHQBNwSS4QA',
        city: 'Orange County',
        state: 'California',
        phone: {
          general: '714-332-6052',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '714-332-6038',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '12235 Beach Blvd. Suites 100 & 200E, Stanton, CA 90680',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 33.784430, lng: -117.993590 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Northern Colorado',
        path: '/locations/noco',
        mapLink: 'https://goo.gl/maps/EpZx2fVo8BXpkg1r8',
        city: 'Fort Collins',
        state: 'Colorado',
        phone: {
          general: '970-667-2273',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '888-891-0585',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '1562 Taurus Ct., Loveland, CO 80537',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 40.401090, lng: -105.054930 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'PhysMed Home Health of Omaha',
        path: '/locations/physmed',
        mapLink: 'https://goo.gl/maps/Ws4XjgwtM2r4ymU78',
        city: 'Omaha',
        state: 'Nebraska',
        phone: {
          general: '402-926-4088',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '402-926-4197',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '4905 S 107th Ave, Omaha, NE 68127',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 41.210443, lng: -96.0788 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'PhysMed Home Health of Lincoln',
        path: '/locations/phymed-Lincoln',
        mapLink: 'https://goo.gl/maps/Ws4XjgwtM2r4ymU78',
        city: 'Lincoln',
        state: 'Nebraska',
        phone: {
          general: '402-926-4088',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '402-926-4197',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '4905 S 107th Ave, Lincoln, NE 68127',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 41.210443, lng: -96.0788 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'SereneCare Hospice of Omaha',
        path: '/locations/serene-care',
        mapLink: 'https://goo.gl/maps/Ws4XjgwtM2r4ymU78',
        city: 'Omaha',
        state: 'Nebraska',
        phone: {
          general: '402-597-2585',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '402-597-2644',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '10707 O Street, Omaha Nebraska 68127',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 41.210443, lng: -96.0788 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Las Vegas',
        path: '/locations/las-vegas',
        mapLink: 'https://goo.gl/maps/FgQoN7QNy7xuFJhu5',
        city: 'Las Vegas',
        state: 'Nevada',
        phone: {
          general: '702-818-3178',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '702-818-5227',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '2739 Sunridge Heights Parkway, Ste. 110, Henderson, NV 89052',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 36.161930, lng: -115.171330 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Houston',
        path: '/locations/houston',
        mapLink: 'https://goo.gl/maps/238cHwf1KN613AK5A', 
        city: 'Houston',
        state: 'Texas',
        phone: {
          general: '832-532-7538',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '832-532-7540',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '11420 Dairy Ashford Rd. Suite 108 Sugar Land, TX 77478',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 29.65467157248156, lng: -95.59837821522869 },
        isClicked: false,
        isExpanded: false,
      },
      {
        name: 'Charter Healthcare of Salt Lake City',
        path: '/locations/salt-lake-city',
        mapLink: 'https://goo.gl/maps/y3aa8qjHYBQMzV83A', 
        city: 'Salt Lake City',
        state: 'Utah',
        phone: {
          general: '801-261-9490',
          homeHealth: '',
          hospice: ''
        },
        fax: {
          general: '801-261-5856',
          homeHealth: '',
          hospice: ''
        },
        address: {
          general: '6671 S. Redwood Rd. Ste. 101, West Jordan, UT 84084',
          homeHealth: '',
          hospice: ''
        },
        coordinates: { lat: 40.630240, lng: -111.938240 },
        isClicked: false,
        isExpanded: false,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
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
          "UA-193978129-1"
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'i5qxlyyjmn13',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
}