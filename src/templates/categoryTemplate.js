import './categoryTemplate.css';
import React from "react";
import PropTypes from "prop-types";
// Components
import { graphql } from "gatsby";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import archiveHeader from '../images/headers/archive.png';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import ButtonSecondary from '../components/buttons/button-secondary';
import PostLink from '../components/news/post-link';


const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const catHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  return (
    <Layout>
      <div className='category-container'>
        <HeaderStrip 
          title={`News Articles by Category: ${category}`} 
          image={archiveHeader}
        />
        <div className='intro'>
          <h2>{catHeader}</h2>
          <div className='post-wrapper'>
            {edges.map(post => {
              return (
                <PostLink to={post.node.frontmatter.slug} key={post.node.frontmatter.id} post={post} />
              )
            })}
          </div>
          <div className='btn-container'>
            <ButtonPrimaryAlt link="/news/categories" content='View all categories' />
            <ButtonSecondary link='/news' content ='Back to News Page' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
Category.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Category;


export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            category
            title
            featuredImage {
              relativePath
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`