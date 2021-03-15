import './index.css';

import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt'
import DataStrip from '../../components/data/data';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from "../../components/layout";
import LocationsStrip from '../../components/locations/locations';
// import RecentGrid from "../../components/news/recent-grid";
import PostStrip from '../../components/news/post-strip';
import React from "react";
import SEO from "../../components/seo";
import ServicesStrip2 from '../../components/services/services2';
import SmallMap from '../../components/locations/small-map';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import aboutImage from '../../images/covina-home-health-about.png'
// import businessImage from '../../images/hiring.png';
import {graphql} from 'gatsby';
import headerImage from '../../images/headers/covina-home-health.png';

const HospiceOrangeCountyPage = ({ data }) => {

  //Get/organize all the data from the graphQL Queries for posts and correct location data from gatsby.config
  const recentPosts = data.recent.edges;
  const locations = data.locations.edges[0].node.siteMetadata.locations;
  const pageName = 'Cambridge Hospice of Orange County';
  let pageLocation = {};
  for(let i = 0; i < locations.length; i++) {
    if(locations[i].name === pageName) {
      pageLocation = locations[i];
    }
  }
  //Destructure the various properties of this page's location object for ease of use in JSX
  const { name, address, city, phone, fax, state, coordinates, mapLink } = pageLocation;


  return (
    <Layout>
      <SEO title="Covina Home Health, Hospice, & Palliative Care" />
      <div className='HomeHealthPage location-page'>
        <HeaderStrip2
            image={headerImage}
            title={name}
            headline='High Desert Home Health & Hospice Care'
        />

        {/*-------------- TOP TEXT BLOCK -------------- */}
        <div className="two-column">
          <div className="title">
            <h4>Additional Text Block</h4>
            <hr/>
          </div>
          <div className="content">
            <div className="left">
              <h6>Information</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="right">
              <h6>Information</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/*-------------- ABOUT SECTION -------------- */}
        <div className='two-column about-block'>
          <div className='title'>
            <h4>{name}</h4>
            <hr/>
          </div>
          <img src={aboutImage} alt="people" className='about-image' />
          <div className='content'>
              <div className='left'>
                <h6>Our Commitment</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div> 
              <div className='right'>   
                <h6>Our Values</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
          </div>
          <ButtonPrimaryAlt content='Get to know Charter' link='/about' />
        </div>

        {/*-------------- BUSINESS INFO SECTION -------------- */}
        <div className="two-column business-info">
          <div className="title">
            <h5>Business Information</h5>
            <hr/>
          </div>
          <div className="content">
            <div className="left map-container">
              <SmallMap 
                name='Charter Home Health'
                coordinates={coordinates}
                lat={coordinates.lat}
                lng={coordinates.lng}
                link={mapLink}
              />
            </div>
            <div className="right">
              <div className='card-wrapper'>
                <div className='card'>  
                    <h6 className='detail-title'>Our Office</h6>
                    <p className='detail-text'>
                      {city}, {state}
                      <br/>
                      <a href={mapLink} target='_blank' rel='noopener noreferrer'>
                        {address}
                      </a>
                    </p>
                </div>
                <div className='card'>
                    <h6 className='detail-title'>Hours of Operation</h6>
                    <p className='detail-text'>
                      <ul>
                        <li>M: 8:00 am - 5:00 pm</li>
                        <li>Tu: 8:00 am - 5:00 pm</li>
                        <li>W: 8:00 am - 5:00 pm</li>
                        <li>Th: 8:00 am - 5:00 pm</li>
                        <li>F: 8:00 am - 5:00 pm</li>
                      </ul>
                    </p>
                </div>
                <div className='card'>
                    <h6 className='detail-title'>Contact Information</h6>
                    <p className='detail-text'>
                      <ul>
                        <li>Phone: <a href={`tel: ${phone}`}>{phone}</a></li>
                        <li>Fax: <a href={`fax: ${fax}`}>{fax}</a></li>
                      </ul>
                    </p> 
                </div>
              </div>
            </div>
          </div>
          <ButtonPrimaryAlt content='← See all charter locations' link='/locations' />
        </div>

        <ServicesStrip2 />
        <DataStrip />
        <TestimonialsStrip />

        <div className='news'>
          <PostStrip posts={recentPosts} title='The Latest at Charter' link='/news' linkContent='See our blog'/>
        </div>

        <LocationsStrip svg={true} />
      </div>
    </Layout>
  )
}

export default HospiceOrangeCountyPage;

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
  locations: allSite {
    edges {
      node {
        id
        siteMetadata {
          locations {
            name
            address
            city
            isClicked
            isExpanded
            phone
            fax
            path
            state
            coordinates {
              lat
              lng
            }
            mapLink
          }
        }
      }
    }
  }
}
`