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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const imageSrc = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src; 
  const postTitle = data.markdownRemark.frontmatter.title;
  const postTags = data.markdownRemark.frontmatter.tags;
  const allPosts = data.allMarkdownRemark.edges;
  const recentPosts = [];
  const relatedPosts = [];

  //create an array of posts with similar tags (related posts)
  allPosts.map(post => {
    if(post.node.frontmatter.title === postTitle) {
      return;
    } else if (post.node.frontmatter.tags[0] === postTags[0]) {
      relatedPosts.push(post);
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
        title={frontmatter.title} 
        image={archiveHeader}
      />
      <div className="blog-post-container">
        <div className="blog-post">
          <img src={imageSrc} alt="Post Featured Image" class='featured-img' />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ButtonPrimary content='Return to News page' link='/news' animation='fade-right' animationTime='1000' />
          <p>Categories: </p>
          <p>Tags: 
            {postTags.map(tag => {
              return <Link to={`/tags/${tag}`} className='tag' >{tag}</Link> 
              {/* TODO: create TagLink component and import here instead of the Link component */}
            })}
          </p>
        </div>
        <div className='sidebar'>
          <div className='recent'>
            <h5>Recent Posts</h5>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
            </ul>
          </div>
          <div className='related'>
            <h5>Related Posts</h5>
              {relatedPosts.map(post => {
                return <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
                {/* TODO: create TagLink component and import here instead of the Link component */}
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
    allMarkdownRemark {
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