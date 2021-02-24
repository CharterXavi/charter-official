import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import React from 'react';

const SmallMap = (props) => {
  //Default map properties
  const center = {
      lat: props.lat,
      lng: props.lng
  };
  const zoom = 10;
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

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }} className='SmallMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA6t0P7DSYAcuYH0TpXni6dcbhhUH2UcbY' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          styles: mapStyles()
        }}
      >
        <Marker
                  {...props.coordinates}
                  name={props.name}
                  link={props.link}
                  color="#f05f7e"
                //   isHovered={props.isHovered}
                  key={props.name}
        />
      </GoogleMapReact>
    </div>
  );
}
 
export default SmallMap;