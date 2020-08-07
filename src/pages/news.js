import React from "react";
import { graphql, Link } from "gatsby";
import PostLink from "../components/news/post-link";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import newsImage from '../images/news.png';
import RecentGrid from '../components/news/recent-grid';
import OldestGrid from '../components/news/oldest-grid';
import './news.css';

const NewsPage = ({data}) => {

  const recentPosts = data.recent.edges;

  const oldestPosts = data.oldest.edges;

  return (
      <Layout>
        <HeaderStrip 
            title='News'
            headline='Stay up to date in our company and industry!'
            image={newsImage}
        />
        <div className='NewsArchive'>

            <RecentGrid posts={recentPosts} />

            <OldestGrid posts={oldestPosts} />

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
    oldest: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {}, limit: 5) {
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
