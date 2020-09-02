import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import archiveHeader from '../images/headers/archive.png';
import RecentGrid from '../components/news/recent-grid';
import PostStrip from '../components/news/post-strip';
import './news.css';

const NewsPage = ({data}) => {

  const recentPosts = data.recent.edges;
  const oldestPosts = data.oldest.edges;
  const healthPosts = data.health.edges;
  const researchPosts = data.research.edges;

  return (
      <Layout>
        <HeaderStrip 
            title='News'
            headline='Stay up to date in our company and industry!'
            image={archiveHeader}
        />
        <div className='NewsArchive'>
            <div className='top-block'>
              <RecentGrid posts={recentPosts} />
            </div>
            
            <div className='bottom-block'>  
              <PostStrip posts={oldestPosts} title='Oldest Posts' link='/news/oldest' />
              <PostStrip posts={healthPosts} title='Health Posts' link='/news/health' />
              <PostStrip posts={researchPosts} title='Research Posts' link='/news/research' />
            </div>

        </div>
      </Layout>
  )
};

export default NewsPage;

//Query our post frontmatter to get relative paths for the images they may be referencing
export const pageQuery = graphql`
  query {
    recent: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {}, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            categories
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
    oldest: allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}, filter: {}, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            categories
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
    health: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {categories: {eq: "health"}}}, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            categories
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
    research: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {categories: {eq: "research"}}}, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            categories
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
