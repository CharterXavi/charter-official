import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutStrip from '../components/about/about';
import ServicesStrip from '../components/services/services';
import VideoStrip from '../components/video/video';
import TestimonialsStrip from '../components/testimonials/testimonials';
import OurTeamStrip from '../components/our-team/our-team';
import LocationsStrip from '../components/locations/locations';
import DataStrip from '../components/data/data';
import {graphql} from 'gatsby';
import HeroStrip3 from "../components/hero/hero-3";
import PostStrip from "../components/news/post-strip";
import './index.css';

const IndexPage = ({ data }) => {

  const recentPosts = data.recent.edges;
  
  return (
    <Layout>
      <SEO title="Home" />
      <HeroStrip3 />
      <AboutStrip />
      <ServicesStrip />
      <VideoStrip />
      <TestimonialsStrip />
      <DataStrip />
      <div className='news'>
        <PostStrip posts={recentPosts} title='The Latest' link='/news'/>
      </div>
      <OurTeamStrip />
      <LocationsStrip />
    </Layout>
  )
}

export default IndexPage

export const recentPostsQuery = graphql`
query {
  recent: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {}, limit: 3) {
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
}
`