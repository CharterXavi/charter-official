import './blogTemplate.css';
import "aos/dist/aos.css";

import { Link, graphql } from "gatsby"
import React, {useEffect} from "react"

import AOS from "aos";
import ButtonPrimary from "../components/buttons/button-primary";
import ClockIcon from '../components/icons/clock';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import HeartIcon from '../components/icons/heart';
import Layout from '../components/layout';
import NetworkIcon from '../components/icons/network';
import SEO from '../components/seo';
import ShareButtons from '../components/social/share-buttons';
import _ from 'lodash';
import archiveHeader from '../images/headers/archive.png';

const BlogTemplate = (props) => {

  const imageSrc = props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src; //capture this post's featured image
  const postTitle = props.data.markdownRemark.frontmatter.title; //capture the title of this post
  const postDate = props.data.markdownRemark.frontmatter.date; //capture the title of this post
  const postCategory = props.data.markdownRemark.frontmatter.category; //capture the tags of this post
  const postTags = props.data.markdownRemark.frontmatter.tags; //capture the category of this post
  const postPath = props.location.href; //capture post path
  const twitterHandle = 'charterhcg';
  const facebookHandle = 'charterhcg';
  const linkedinHandle = 'charter-healthcare-group';
  const allPosts = props.data.allMarkdownRemark.edges; //capture all posts in the site
  const recentPosts = [];
  const relatedPosts = [];


  allPosts.map(post => {
    // create an array of posts with recent posts (related posts)
    if (recentPosts.length < 3) {
      recentPosts.push(post);
    }

    // create an array of posts with similar tags (related posts)
    if (post.node.frontmatter.title === postTitle) {
      return post;
    } else if ((post.node.frontmatter.category === postCategory) && (relatedPosts.length < 3)) {
      return relatedPosts.push(post);
    } else {
      return post;
    }
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title={postTitle} />
      <HeaderStrip2 
        title={postTitle} 
        image={archiveHeader}
      />
      <div className='blog-page'>
        <div className="blog-post-container">

          <div className="blog-post">
            <img src={imageSrc} alt={postTitle} className='featured-img' />
            <div className='post-info'>
              <h4>{postTitle}</h4>
              <p>{postDate}</p>
              <hr/>
            </div>
            <section
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
            />
            <div data-aos='fade-right' data-aos-duration='1000'>
              <ButtonPrimary content='← Back to News page' link='/news' />
            </div>
            <p className='category-wrapper'>Category: 
              <Link to={`/categories/${_.kebabCase(postCategory)}`} className='category' >{postCategory}</Link> 
            </p>
            <p className='tag-wrapper'>Tags: 
              {postTags.map(tag => {
                return <Link to={`/tags/${_.kebabCase(tag)}`} className='tag' key={tag} >{tag}</Link> 
              })}
            </p>
          </div>

          <div className='sidebar'>
            <div className='recent'>
              <ClockIcon />
              <h6 className='detail-title'>Recent Posts</h6>
                {recentPosts.map(post => {
                  return <p className='detail-text' key={post.node.frontmatter.title}><Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link></p>
                })}
            </div>
            <div className='related'>
              <HeartIcon />
              <h6 className='detail-title'>Related Posts</h6>
                {relatedPosts.map(post => {
                  return <p className='detail-text' key={post.node.frontmatter.title}><Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link></p>
                })}
            </div>
            <div className='share'>
              <NetworkIcon />
              <h6 className='detail-title'>Share this post:</h6>
              <ShareButtons 
                title={postTitle} 
                url={postPath}
                facebookHandle={facebookHandle} 
                linkedinHandle={linkedinHandle} 
                twitterHandle={twitterHandle} 
                tags={postTags} 
              />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        category
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
            category
            tags
            title
          }
        }
      }
    }
  }
`