import './index.css';

import AboutStrip from '../components/about/about';
import DataStrip from '../components/data/data';
import HeroStrip7 from "../components/hero/hero7";
import Layout from "../components/layout";
import LocationsStrip from '../components/locations/locations';
import OurTeamStrip from '../components/our-team/our-team';
import PostStrip from '../components/news/post-strip';
import React from "react";
// import RecentGrid from "../components/news/recent-grid";
import SEO from "../components/seo";
import ServicesStrip2 from '../components/services/services2';
import TestimonialsStrip from '../components/testimonials/testimonials';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {

  const recentPosts = data.recent.edges;
  console.log(document);
  
  return (
    <Layout>
      <SEO title="Total Home & Post Acute Care" />
      <div className='HomePage'>
        <HeroStrip7 />
        <AboutStrip />
        <ServicesStrip2 />
        <DataStrip />
        <TestimonialsStrip />
        <div className='news'>
          {/* ---- Disabled on home page until more blog posts are available for formatting purposes ---- */}
          {/* <RecentGrid posts={recentPosts} title='The Latest at Charter' link='/' linkContent='Coming Soon! 🎉'/> */}
          <PostStrip posts={recentPosts} title='The Latest at Charter' link='/news' linkContent='Visit our news archive'/>
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
  recent: allContentfulBlogPost(sort: {order: DESC, fields: [date]}, filter: {}, limit: 3) {
    edges {
      node {
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
}
`