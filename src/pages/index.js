import './index.css';

import AboutStrip from '../components/about/about';
import DataStrip from '../components/data/data';
import HeroStrip7 from "../components/hero/hero7";
import Layout from "../components/layout";
import LocationsStrip from '../components/locations/locations';
import OurTeamStrip from '../components/our-team/our-team';
import React from "react";
import RecentGrid from "../components/news/recent-grid";
import SEO from "../components/seo";
import ServicesStrip2 from '../components/services/services2';
import TestimonialsStrip from '../components/testimonials/testimonials';
import {graphql} from 'gatsby';

const IndexPage = ({ data }) => {

  const recentPosts = data.recent.edges;
  
  return (
    <Layout>
      <SEO title="Home" />
      <div className='HomePage'>
        <HeroStrip7 />
        <AboutStrip />
        <ServicesStrip2 />
        <DataStrip />
        <TestimonialsStrip />
        <div className='news'>
          <RecentGrid posts={recentPosts} title='The Latest at Charter' link='/news' linkContent='See our blog'/>
        </div>
        <OurTeamStrip />
        <LocationsStrip svg={true} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const recentPostsQuery = graphql`
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