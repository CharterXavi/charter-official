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
  const post = props.data.contentfulBlogPost;
  
  const { title, date, category, tags, slug } = post;
  const src = post.image.fluid.src;
  const twitterHandle = 'charterhcg';
  const facebookHandle = 'charterhcg';
  const linkedinHandle = 'charter-healthcare-group';
  const allPosts = props.data.allContentfulBlogPost.edges; //capture all posts in the site
  const recentPosts = [];
  const relatedPosts = [];

  allPosts.forEach(post => {
    // populate recent posts array
    if ((post.node.title !== title) && (recentPosts.length < 3)) {
      recentPosts.push(post);
    }
    // populate related posts array
    if (post.node.title === title) {
      return post;
    } else if ((post.node.category === category) && (relatedPosts.length < 3)) {
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
      <SEO title={title} />
      <HeaderStrip2 
        title={title} 
        image={archiveHeader}
      />
      <div className='blog-page'>
        <div className="blog-post-container">

          <div className="blog-post">
            <img src={src} alt={title} className='featured-img' />
            <div className='post-info'>
              <h4>{title}</h4>
              <p>{date}</p>
              <hr/>
            </div>
            <section className="blog-post-content">
              {}
            </section>
            <div data-aos='fade-right' data-aos-duration='1000'>
              <ButtonPrimary content='← Back to News page' link='/news' />
            </div>
            <p className='category-wrapper'>Category: 
              <Link to={`/news/categories/${_.kebabCase(category)}`} className='category' >{category}</Link> 
            </p>
            <p className='tag-wrapper'>Tags: 
              {tags.map(tag => {
                return <Link to={`/news/tags/${_.kebabCase(tag)}`} className='tag' key={tag} >{tag}</Link> 
              })}
            </p>
          </div>

          <div className='sidebar'>
            <div className='recent'>
              <ClockIcon />
              <h6 className='detail-title'>Recent Posts</h6>
                {recentPosts.map(post => {
                  return <p className='detail-text' key={post.node.title}><Link to={post.node.slug}>{post.node.title}</Link></p>
                })}
            </div>
            <div className='related'>
              <HeartIcon />
              <h6 className='detail-title'>Related Posts</h6>
                {relatedPosts.map(post => {
                  return <p className='detail-text' key={post.node.title}><Link to={post.node.slug}>{post.node.title}</Link></p>
                })}
            </div>
            
            <div className='share'>
              <NetworkIcon />
              <h6 className='detail-title'>Share this post:</h6>
              <ShareButtons 
                title={title} 
                url={`https://charterhcg.com/news/${slug}`}
                facebookHandle={facebookHandle} 
                linkedinHandle={linkedinHandle} 
                twitterHandle={twitterHandle} 
                tags={tags} 
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
    contentfulBlogPost(slug: {eq: $slug}) {
      category
      content {
        raw
      }
      slug
      title
      tags
      image {
        fluid {
          src
        }
      }
      date(formatString: "MMMM DD, YYYY")
    }
    allContentfulBlogPost(sort: {order: DESC, fields: [date]}) {
      edges {
        node {
          slug
          category
          tags
          title
        }
      }
    }
  }
`