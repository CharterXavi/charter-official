import './tagsTemplate.css';
import React from "react";
import PropTypes from "prop-types";
// Components
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import archiveHeader from '../images/headers/archive.png';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import ButtonSecondary from '../components/buttons/button-secondary';


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <HeaderStrip 
        title={`Tag: ${tag}`} 
        image={archiveHeader}
      />
      <div className='intro'>
        <h2>{tagHeader}</h2>
        <ul>
          {edges.map(({ node }) => {
            const { title, slug } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
              */}
        <ButtonPrimaryAlt link="/news/tags" content='View all tags' />
        <ButtonSecondary link='/news' content ='Back to News Page' />
      </div>
    </Layout>
  )
}
Tags.propTypes = {
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

export default Tags;


export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`