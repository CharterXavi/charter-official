const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("./src/templates/blogTemplate.js")
  const tagTemplate = path.resolve("./src/templates/tagsTemplate.js")
  const categoryTemplate = path.resolve("./src/templates/categoryTemplate.js")

  // allMarkdownRemark(
  //   sort: { order: DESC, fields: [frontmatter___date] }
  //   limit: 1000
  // ) {
  //   edges {
  //     node {
  //       frontmatter {
  //         slug
  //         tags
  //         category
  //       }
  //     }
  //   }
  // }

  const result = await graphql(`
    {
      allContentfulBlogPost(limit: 1000) {
        edges {
          node {
            slug
            tags
            category
          }
        }
      }
      tagsGroup: allContentfulBlogPost(limit: 2000) {
        group(field: tags) {
          fieldValue
        }
      }
      categoriesGroup: allContentfulBlogPost(limit: 2000) {
        group(field: category) {
          fieldValue
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract post  data from query & create post detail pages
  const posts = result.data.allContentfulBlogPost.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `/news/${_.kebabCase(node.slug)}/`,
      component: blogPostTemplate, //render blogTemplate.js
      context: {
        // additional data can be passed via context
        slug: node.slug,
      }
    })
  })

  // Extract tag data from query & make tags pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/news/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate, //render tagsTemplate.js
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Extract tag data from query & make tags pages
  const categories = result.data.categoriesGroup.group
  categories.forEach(cat => {
    createPage({
      path: `/news/categories/${_.kebabCase(cat.fieldValue)}/`,
      component: categoryTemplate, //render tagsTemplate.js
      context: {
        category: cat.fieldValue,
      },
    })
  })

  // // Programmaitcally create locations pages, help reference at: https://www.robinwieruch.de/gatsby-graphql
  // const locations = result.data.locations.edges[0].node.siteMetadata.locations;
  // locations.forEach(location => {

    
  //   createPage({
  //     path: `/locations/${_.kebabCase(location.city)}/`,
  //     component: locationTemplate, //render locationTemplate.js
  //     context: {
  //       location: location.name,
  //     },
  //   })
  // })
}