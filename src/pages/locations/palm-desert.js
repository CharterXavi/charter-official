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

const PalmDesertPage = ({ data }) => {

  //Get/organize all the data from the graphQL Queries for posts and correct location data from gatsby.config
  const recentPosts = data.recent.edges;
  const locations = data.locations.edges[0].node.siteMetadata.locations;
  const pageName = 'Charter Healthcare of Palm Desert';
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
      <SEO title="Palm Desert Home Health, Hospice, & Palliative Care" />
      <div className='location-page'>
        <HeaderStrip2
            image={headerImage}
            title={name}
            headline='The leading home health and hospice care provider in Palm Desert'
        />

        {/*-------------- TOP TEXT BLOCK -------------- */}
        <div className="two-column">
          <div className="title">
            <h4>Delivering the highest quality healthcare in the Palm Desert area.</h4>
            <hr/>
          </div>
          <div className="content">
            <div className="left">
              <h6>Compassionate and Experienced Healthcare</h6>
              <p>
                Charter Healthcare of Palm Desert is dedicated to providing you or your loved ones with the best
                healthcare available. Our caring and compassionate staff have years of experience in providing services
                that allow our patients to live their best lives every day. We treat each of our clients with the respect
                and compassion they deserve while administering expert care services in a professional manner at all
                times. Contact us today to learn how we can help.
              </p>
            </div>
            <div className="right">
              <h6>Quality Healthcare Services</h6>
              <p>
                Charter Healthcare of Palm Desert is a premier provider of a variety of healthcare services including
                skilled home health, hospice care, and palliative care. Our staff is adept in utilizing proven and modern
                techniques to best allow our clients to fully live their best lives. If you are searching for the perfect
                healthcare provider, look no further and contact us today.
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
                  We're committed to instilling compassion and sensitivity in our teams for our patients, families,
                  and peers. We believe in the power of genuinely being there for those that depend on us and our
                  services. Our commitment to our clients and their wellbeing is what separates us from our competitors
                  as we continue to enhance the lives of our clients every day.
                </p>
              </div> 
              <div className='right'>   
                <h6>Our Values</h6>
                <p>
                  At Charter Healthcare, we instill our values into each and every one of our caregivers. We believe
                  in integrity, respect, compassion, and service to others. We hold ourselves accountable to ethical
                  standards that are beyond reproach. We believe our clients and employees are to be treated with
                  dignity and courtesy at all times as we create a warm and caring environment.
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
                      <p>
                        Home Health: 
                        <a href={mapLink} target='_blank' rel='noopener noreferrer'>
                            {address.homeHealth}
                        </a>
                      </p>
                      <p>
                        Hospice: 
                        <a href={mapLink} target='_blank' rel='noopener noreferrer'>
                            {address.hospice}
                        </a>
                      </p>
                    </p>
                </div>
                <div className='card'>
                    <h6 className='detail-title'>Hours of Operation</h6>
                    <p className='detail-text'>
                      <ul>
                        <li>M-F: 8:00 am - 5:00 pm</li>
                      </ul>
                    </p>
                </div>
                <div className='card'>
                    <h6 className='detail-title'>Contact Information</h6>
                    <p className='detail-text'>
                      <ul>
                        Home Health
                        <li>Phone: <a href={`tel: ${phone.homeHealth}`}>{phone.homeHealth}</a></li>
                        <li>Fax: <a href={`fax: ${fax.homeHealth}`}>{fax.homeHealth}</a></li>
                        Hospice
                        <li>Phone: <a href={`tel: ${phone.hospice}`}>{phone.hospice}</a></li>
                        <li>Fax: <a href={`fax: ${fax.hospice}`}>{fax.hospice}</a></li>
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

export default PalmDesertPage

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
            address {
              general
              homeHealth
              hospice
            }
            city
            isClicked
            isExpanded
            phone {
              general
              homeHealth
              hospice
            }
            fax {
              general
              homeHealth
              hospice
            }
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