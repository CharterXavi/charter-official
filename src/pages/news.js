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
            title='News Archive'
            headline='Stay up to date with our company and industry!'
            image={archiveHeader}
        />
        <div className='intro'>
          <h2>Welcome to our News Archive at Charter!</h2>
          <p className='introduction-text'>From the latest developments in our healthcare services to the industry as a whole, you've come to the right place to stay up to date. Enjoy our articles, and if you'd like to submit a story to us for publication contact us by completing the form at the bottom of the page.</p>
        </div>
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
            category
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
            category
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
    health: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "health"}}}, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
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
    research: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "research"}}}, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
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
