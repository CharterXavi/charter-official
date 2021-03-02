import './about.css';
import "aos/dist/aos.css";

import React, {useEffect} from "react";

import AOS from "aos";
import AboutCharter from '../components/about/about-charter';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import Layout from "../components/layout";
import LocationsStrip from '../components/locations/locations';
import OurTeamStrip from '../components/our-team/our-team'
import PostStrip from '../components/news/post-strip';
import SEO from "../components/seo";
import Video2 from '../components/video/video2';
import aboutImage from '../images/headers/about.png';
import { graphql } from "gatsby"

const AboutPage = ({data}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const recentPosts = data.recent.edges;

  return (
    <Layout>
      <SEO title="About Us" />
      <div className='AboutPage'>
        <HeaderStrip2 
          image={aboutImage}
          title='About Charter'
          headline='A truly patient-centered healthcare company'
        />
        <AboutCharter />
        <Video2 />
        {/* ---- Disabled on home page until more blog posts are available for formatting purposes ---- */}
        {/* <RecentGrid posts={recentPosts} title='The Latest at Charter' link='/' linkContent='Coming Soon! 🎉'/> */}
        <PostStrip posts={recentPosts} title='The Latest at Charter' link='/news' linkContent='Visit our news archive'/>
        <OurTeamStrip />
        <LocationsStrip svg={true} />
      </div>
    </Layout>
    )
  }

export default AboutPage;

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