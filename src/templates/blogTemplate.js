import React, {useEffect} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import './blogTemplate.css';
import archiveHeader from '../images/headers/archive.png';
import linkedinIcon from '../images/iconography/linkedin.png';
import twitterIcon from '../images/iconography/twitter.png';
import facebookIcon from '../images/iconography/facebook.png';
import ButtonPrimary from "../components/buttons/button-primary";
import AOS from "aos";
import "aos/dist/aos.css";

const Template = ({ data }) => {

  const postContent = data.markdownRemark.html;
  const imageSrc = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src; //capture this post's featured image
  const postTitle = data.markdownRemark.frontmatter.title; //capture the title of this post
  const postDate = data.markdownRemark.frontmatter.date; //capture the title of this post
  const postTags = data.markdownRemark.frontmatter.tags; //capture the tags of this post
  const allPosts = data.allMarkdownRemark.edges; //capture all posts in the site
  const recentPosts = [];
  const relatedPosts = [];

  console.log(allPosts)

  allPosts.map(post => {
    // create an array of posts with recent posts (related posts)
    if (recentPosts.length < 3) {
      recentPosts.push(post);
    }

    // create an array of posts with similar tags (related posts)
    if (post.node.frontmatter.title === postTitle) {
      return post;
    } else if (post.node.frontmatter.tags[0] === postTags[0]) {
      return relatedPosts.push(post);
    }

  });
  console.log(relatedPosts);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });


  //TO DO: add conditional logic that will look at post's frontmatter and based on the column-layout property, will render
  //all of the content wrapped in that layout
  //It's currently all wrapped in the same Layout Tag as always, but making a 2-col layout gives us another option
  return (
    <Layout>
      <HeaderStrip 
        title={postTitle} 
        image={archiveHeader}
      />
      <div className="blog-post-container">
        <div className="blog-post">
          <img src={imageSrc} alt={postTitle} class='featured-img' />
          <h1>{postTitle}</h1>
          <h2>{postDate}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
          <ButtonPrimary content='Return to News page' link='/news' animation='fade-right' animationTime='1000' />
          <p>Categories: </p>
          <p>Tags: 
            {postTags.map(tag => {
              return <Link to={`/tags/${tag}`} className='tag' >{tag}</Link> 
            })}
          </p>
        </div>
        <div className='sidebar'>
          <div className='recent'>
            <h5>Recent Posts</h5>
              {recentPosts.map(post => {
                return <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
              })}
          </div>
          <div className='related'>
            <h5>Related Posts</h5>
              {relatedPosts.map(post => {
                return <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
              })}
          </div>
          <div className='share'>
            <h5>Share this post:</h5>
            <ul>
              <li><img src={linkedinIcon} alt="LinkedIn Logo" /></li>
              <li><img src={twitterIcon} alt="Twitter Logo" /></li>
              <li><img src={facebookIcon} alt="Facebook Logo" /></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        title
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
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            slug
            tags
            title
          }
        }
      }
    }
  }
`