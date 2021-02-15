import './index.css';

import HeaderStrip2 from '../components/header-strip/header-strip2';
import Layout from "../components/layout";
import LocationsList from '../components/locations/locations-list'
import React from "react";
import SEO from "../components/seo";
import {graphql} from 'gatsby';
import locationsImage from '../images/headers/locations.png'

const LocationsPage = ({ data }) => {

  const locations = data.edges;
  
  return (
    <Layout>
      <SEO title="Home" />
      <div className='LocationsPage'>
        <HeaderStrip2
          title='Locations'
          headline='See all of our locations'
          image={locationsImage}
        />

        <LocationsList 
          pages={locations}
        />
      </div>
    </Layout>
  )
}

export default LocationsPage

export const recentPostsQuery = graphql`
query {
  allSitePage(filter: {path: {regex: "/locations/", ne: "/locations/"}}) {
    edges {
      node {
        id
        path
      }
    }
  }
}
`