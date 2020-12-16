import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
 
const Map = (props) => {
  //Default map properties
  const center = {
      lat: 40.09024,
      lng: -114.712891
  };
  const zoom = 5;
  const mapStyles = () => 
    [
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#CED3DC"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#dfdfdf"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#F6F7FB"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#F6F7FB"
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#363f55"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "weight": 0.6
              },
              {
                  "color": "#dedede"
              }
          ]
      },
      {
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f4f4f4"
              }
          ]
      }
    ];


    //Code for map functionality
    const businesses = [];
    //Loop through the layers of the locations prop and push business info to the businesses array
    props.locations.map(state => {
        if (state) {
            return state.cities.map(city => {
                return city.locations.map(business => {
                    return businesses.push(business);
                });
            });
        };
        return state;
    });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA6t0P7DSYAcuYH0TpXni6dcbhhUH2UcbY' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          styles: mapStyles()
        }}
      >
        {
            businesses.map(business => {
                return <Marker
                  {...business.coordinates}
                  name={business.name}
                  link={business.link}
                  color="#f05f7e"
                  isHovered={props.isHovered}
                  key={business.name}
                />
            })
        }
      </GoogleMapReact>
    </div>
  );
}
 
export default Map;