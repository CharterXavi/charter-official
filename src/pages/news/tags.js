import './tags.css';

import { Link, graphql } from "gatsby"

import ButtonSecondary from '../../components/buttons/button-secondary';
import HeaderStrip2 from "../../components/header-strip/header-strip2"
// Components
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import PropTypes from "prop-types"
import React from "react"
import SEO from '../../components/seo';
import archiveHeader from '../../images/headers/archive.png';
// Utilities
import kebabCase from "lodash/kebabCase"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        <Helmet title={title} />
        <SEO title='Tags' />
        <div className='TagsPage'>
            <HeaderStrip2 image={archiveHeader} title='All Tags' headline='See our all of our news articles by tags' />
            <div className='intro'>
            <h4>All Tags</h4>
            <ul>
                {group.map(tag => (
                <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className='tag'>
                    {tag.fieldValue} ({tag.totalCount})
                    </Link>
                </li>
                ))}
            </ul>
            </div>
            <ButtonSecondary content='← News page' link='/news' animation='fade-right' animationTime='1000' />
        </div>
    </Layout>
)

TagsPage.propTypes = {
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

export default TagsPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`