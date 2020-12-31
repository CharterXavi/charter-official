import './categories.css';

import { Link, graphql } from "gatsby"

import ButtonSecondary from '../../components/buttons/button-secondary';
import HeaderStrip2 from "../../components/header-strip/header-strip2"
// Components
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import PropTypes from "prop-types"
import React from "react"
import SEO from "../../components/seo"
import archiveHeader from '../../images/headers/archive.png';
// Utilities
import kebabCase from "lodash/kebabCase"

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
            <h4>All Categories</h4>
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