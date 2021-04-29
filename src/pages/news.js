import './news.css';
import "aos/dist/aos.css";

import React, {useEffect} from "react";

import AOS from "aos";
import CategoryNav from '../components/news/category-nav';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import Layout from '../components/layout';
import PostStrip from '../components/news/post-strip';
import RecentGrid from '../components/news/recent-grid';
import SEO from '../components/seo';
import archiveHeader from '../images/headers/archive.png';
import { graphql } from "gatsby";

const NewsPage = ({data}) => {

  const recentPosts = data.recent.edges;
  const charterNews = data.charterNews.edges;
  const healthcarePosts = data.healthcare.edges;
  // const researchPosts = data.research.edges;
  const categories = data.categories.group;


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
      <Layout>
        <SEO title='News' />
        <div className='NewsPage'>
          <HeaderStrip2
              title='News Archive'
              headline='Stay up to date with our company and industry!'
              image={archiveHeader}
          />
          <div className='two-column'>
            <div className="title">
              <h4>Welcome to our News Archive at Charter!</h4>
              <hr/>
              <p>From the latest developments in our healthcare services to the industry as a whole, you've come to the right place to stay up to date. Enjoy our articles, and if you'd like to submit a story to us for publication contact us by completing the form at the bottom of the page.</p>
            </div>
            <div className="content">
              <div className="left">
              </div>
              <div className="right"></div>
            </div>
          </div>
          <div className='NewsArchive'>
              <div className='top-block'>
                <RecentGrid posts={recentPosts} />
              </div>

              <div className='bottom-block'>
                <CategoryNav categories={categories} />
                <PostStrip posts={charterNews} title='Charter News' link='/categories/charter-news' />
                <PostStrip posts={healthcarePosts} title='Healthcare' link='/categories/healthcare' />
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
    recent: allContentfulBlogPost(sort: {order: DESC, fields: [date]}, filter: {}, limit: 5) {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          category
          image {
            fluid {
              src
            }
          }
        }
      }
    }
    healthcare: allContentfulBlogPost(sort: {order: DESC, fields: [date]}, filter: {category: {eq: "Healthcare"}}, limit: 3) {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          category
          image {
            fluid {
              src
            }
          }
        }
      }
    }
    charterNews: allContentfulBlogPost(sort: {order: DESC, fields: [date]}, filter: {category: {eq: "Charter News"}}, limit: 3) {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          category
          image {
            fluid {
              src
            }
          }
        }
      }
    }
    categories: allContentfulBlogPost(limit: 2000) {
      group(field: category) {
        fieldValue
        totalCount
      }
    }
  }
`
