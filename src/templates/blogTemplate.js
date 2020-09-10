import React, {useEffect} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import './blogTemplate.css';
import archiveHeader from '../images/headers/archive.png';
import clockIcon from '../images/iconography/clock.png';
import groupIcon from '../images/iconography/group.png';
import heartIcon from '../images/iconography/heart-icon.png';
import ButtonPrimary from "../components/buttons/button-primary";
import ShareButtons from '../components/social/share-buttons';
import _ from 'lodash';
import AOS from "aos";
import "aos/dist/aos.css";

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
      <HeaderStrip 
        title={postTitle} 
        image={archiveHeader}
      />
      <div className="blog-post-container">
        <div className="blog-post">
          <img src={imageSrc} alt={postTitle} className='featured-img' />
          <div className='post-info'>
            <h2>{postTitle}</h2>
            <p>{postDate}</p>
          </div>
          <section
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
          <ButtonPrimary content='← Back to News page' link='/news' animation='fade-right' animationTime='1000' />
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
            <img src={clockIcon} alt="Clock" />
            <h5>Recent Posts</h5>
              {recentPosts.map(post => {
                return <Link to={post.node.frontmatter.slug} key={post.node.frontmatter.title} >{post.node.frontmatter.title}</Link>
              })}
          </div>
          <div className='related'>
          <img src={heartIcon} alt="Heart" />
            <h5>Related Posts</h5>
              {relatedPosts.map(post => {
                return <Link to={post.node.frontmatter.slug} key={post.node.frontmatter.title}>{post.node.frontmatter.title}</Link>
              })}
          </div>
          <div className='share'>
            <img src={groupIcon} alt="Group" />
            <h5>Share this post:</h5>
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