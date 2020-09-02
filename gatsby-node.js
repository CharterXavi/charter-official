const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const tagTemplate = require.resolve(`./src/templates/tagsTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
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
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate, //render blogTemplate.js
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      }
    })
  })

  // Extract tag data from query & make tags pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate, //render tagsTemplate.js
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}