import './locations.css';

import AllLocations from '../components/locations/all-locations';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import LargeMap from '../components/locations/large-map';
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import {graphql} from 'gatsby';
import locationsImage from '../images/headers/locations.png';

const LocationsPage = ({ data }) => {

  const locations = data.allSite.edges[0].node.siteMetadata.locations;
  
  return (
    <Layout>
      <SEO title="Locations Near You" />
      <div className='LocationsPage'>
        <HeaderStrip2
          title='Locations'
          headline='Find your nearest location'
          image={locationsImage}
        />
        <LargeMap locations={locations} />
        <AllLocations 
          pages={locations}
        />
      </div>
    </Layout>
  )
}

export default LocationsPage

export const pagesQuery = graphql`
query {
  allSite(filter: {siteMetadata: {locations: {}}}) {
    edges {
      node {
        id
        siteMetadata {
          locations {
            name
            path
            city
            state
            phone {
              general
              homeHealth
              hospice
            }
            address {
              general
              homeHealth
              hospice
            }
            coordinates {
              lat
              lng
            }
            isClicked
            isExpanded
          }
        }
      }
    }
  }
}
`