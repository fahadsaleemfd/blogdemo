require('dotenv').config()
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
      }
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   // options: {
    //   //   endpoint: process.env.MAILCHIMP_END_POINT
    //   // }
    // },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        // services: {
        //   mailchimp: true,
        // },
        sources: {
          local: true
        }
        // Add theme options here. Check documentation for available options.
        //siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'marketing | the hpl company',
    name: 'the hpl company blog',
    description: "at the hpl company, we are always looking for 'new,' and love to share the joy of discovery. ready to learn more about advertising, analytics, and data?",
    address: 'Denver, CO',
    email: 'hello@hplcompany.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
