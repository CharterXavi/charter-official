import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import './categories.css';
import Layout from "../../components/layout"
import HeaderStrip2 from "../../components/header-strip/header-strip2"
import archiveHeader from '../../images/headers/archive.png';
import ButtonSecondary from '../../components/buttons/button-secondary';
import SEO from "../../components/seo"


const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        <Helmet title={title} />
        <SEO title='Categories' />
        <div className='CategoriesPage'>
            <HeaderStrip2 image={archiveHeader} title='All Categories' headline='See our all of our news articles by categories' />
            <div className='intro'>
            <h2>All Categories</h2>
            <ul>
                {group.map(category => (
                <li key={category.fieldValue}>
                    <Link to={`/categories/${kebabCase(category.fieldValue)}/`} className='category'>
                    {category.fieldValue} ({category.totalCount})
                    </Link>
                </li>
                ))}
            </ul>
            </div>
            <ButtonSecondary content='← News page' link='/news' animation='fade-right' animationTime='1000' />
        </div>
    </Layout>
)

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoriesPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`