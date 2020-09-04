import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import './categories.css';
import Layout from "../../components/layout"
import HeaderStrip from "../../components/header-strip/header-strip"
import archiveHeader from '../../images/headers/archive.png';


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
        <div className='CategoriesPage'>
            <HeaderStrip image={archiveHeader} title='All Categories' headline='See our all of our news articles by categories' />
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