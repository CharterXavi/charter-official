import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import './blogTemplate.css';
import newsImage from '../images/news.png';
import linkedinIcon from '../images/iconography/linkedin.png';
import twitterIcon from '../images/iconography/twitter.png';
import facebookIcon from '../images/iconography/facebook.png';
import ButtonPrimary from "../components/buttons/button-primary";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const imageSrc = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src; 
  //get frontmatter image for headerstrip design 
  //eventually, program this to pull a certain header depending on the category, for now hard-code



  //TO DO: add conditional logic that will look at post's frontmatter and based on the column-layout property, will render
  //all of the content wrapped in that layout
  //It's currently all wrapped in the same Layout Tag as always, but making a 2-col layout gives us another option
  return (
    <Layout>
      <HeaderStrip 
        title={frontmatter.title} 
        image={newsImage}
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
          <ButtonPrimary content='Return to News page' link='/news' />
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
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
            </ul>
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
  }
`