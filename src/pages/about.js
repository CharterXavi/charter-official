import React, {useEffect} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import './about.css';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import Video2 from '../components/video/video2';
import aboutImage from '../images/headers/about.png';
import NewsStrip from '../components/news/news';
import OurTeamStrip from '../components/our-team/our-team'
import LocationsStrip from '../components/locations/locations';
import AboutCharter from '../components/about/about-charter';
import AOS from "aos";
import "aos/dist/aos.css";
import {graphql} from 'gatsby';

const AboutPage = ({data}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

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
        <NewsStrip posts={data.recent.edges} />
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