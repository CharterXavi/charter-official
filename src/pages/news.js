import React from "react";
import { graphql, Link } from "gatsby";
import PostLink from "../components/news/post-link";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import newsImage from '../images/news.png';
import './news.css';

const NewsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const recentPosts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
      <Layout>
        <HeaderStrip 
            title='News'
            headline='Stay up to date in our company and industry!'
            image={newsImage}
        />
        <div className='NewsArchive'>
            <div className='recent'>
                <div className='grid-header'>
                  <h2>Recent Articles</h2>
                  <Link to='/news/recent'>See Recent Articles</Link>
                </div>
                <div className='grid'>
                    {recentPosts}
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
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {}, limit: 5) {
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
