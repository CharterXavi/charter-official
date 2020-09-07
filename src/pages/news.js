import React, {useEffect} from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import archiveHeader from '../images/headers/archive.png';
import RecentGrid from '../components/news/recent-grid';
import PostStrip from '../components/news/post-strip';
import CategoryNav from '../components/news/category-nav';
import './news.css';
import AOS from "aos";
import "aos/dist/aos.css";

const NewsPage = ({data}) => {

  const recentPosts = data.recent.edges;
  const oldestPosts = data.oldest.edges;
  const healthPosts = data.health.edges;
  const researchPosts = data.research.edges;
  const categories = data.categories.group;

  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
      <Layout>
        <div className='NewsPage'>
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
                <CategoryNav categories={categories} />
                <PostStrip posts={healthPosts} title='Health' link='/categories/health' />
                <PostStrip posts={researchPosts} title='Research' link='/categories/research' />
                <PostStrip posts={oldestPosts} title='Oldest' link='/news/oldest' />
              </div>

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
    oldest: allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}, filter: {}, limit: 3) {
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
    health: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "Health"}}}, limit: 3) {
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
    research: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "Research"}}}, limit: 3) {
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
