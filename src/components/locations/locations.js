import './locations.css';

import React, {useEffect, useState} from 'react';

import Card from './card';
import Map from './map';
import PinIcon from '../icons/pin';

const LocationsStrip = (props) => {
    const [locationsList, setLocationsList] = useState(
        [
            {
                state: 'Arizona',
                animationTime: '600',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Tempe',
                      locations: [
                        {
                            name: 'Charter Healthcare of Phoenix',
                            address: '1232 E. Broadway St. Suite 210, Tempe, AZ 85282',
                            coordinates: { lat: 33.408025, lng: -111.919244 },
                            link: '/locations/phoenix'
                        }
                      ]
                    },
                    {
                      name: 'Tucson',
                      locations: [
                        {
                            name: 'Charter Healthcare of Tucson',
                            address: '6400 E. Grant Rd., Suite 150 Tuscon, AZ 85715',
                            coordinates: { lat: 32.24938, lng: -110.855152 },
                            link: '/locations/tucson'
                        }
                      ]
                    }
                  ]
            },
            {
                state: 'California',
                animationTime: '700',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                        name: 'Apple Valley',
                        locations: [
                            {
                                name: 'Charter Healthcare of High Desert',
                                address: '19015 Town Center Dr. Suite 104, Apple Valley, CA 92308',
                                coordinates: { lat: 34.465386, lng: -117.248551 },
                                link: '/locations/high-desert'
                            }
                        ]
                    },
                    {
                        name: 'Colton',
                        locations: [
                            {
                                name: 'Charter Healthcare of San Bernadino',
                                address: '1007 E. Cooley Dr. Suite 100 Colton, CA 92324-3901',
                                coordinates: { lat: 34.05547, lng: -117.310526 },
                                link: '/locations/san-bernardino'
                            }
                        ]
                    },
                    {
                        name: 'Covina',
                        locations: [
                            {
                                name: 'Charter Healthcare of San Gabriel Valley',
                                address: '970 S. Village Oaks Dr. Suite 102, Covina, CA 91724',
                                coordinates: { lat: 34.071759, lng: -117.862599 },
                                link: '/locations/san-gabriel-valley'
                            }
                        ]
                    },
                    {
                        name: 'Palm Desert',
                        locations: [
                            {
                                name: 'Charter Healthcare of Palm Desert',
                                address: '72855 Fred Waring Dr. Suite A4, Palm Desert, CA 92260',
                                coordinates: { lat: 33.728698, lng: -116.394019 },
                                link: '/locations/palm-desert'
                            }
                        ]
                    },
                    {
                        name: 'Rancho Cucamonga of Rancho Cucamonga',
                        locations: [
                            {
                                name: 'Cambridge Hospice of Rancho Cucamonga',
                                address: '9229 Utica Ave. Suite 100, Rancho Cucamonga, CA 91730',
                                coordinates: { lat: 34.085486, lng: -117.57063 },
                                link: '/locations/rancho-cucamonga'
                            }
                        ]
                    },
                    {
                        name: 'Riverside',
                        locations: [
                            {
                                name: 'Cambridge Hospice of Riverside',
                                address: '6560 Van Buren Blvd. Suite G, Riverside, CA 92503-1542',
                                coordinates: { lat: 33.949954, lng: -117.454308 },
                                link: '/locations/riverside'
                            }
                        ]
                    },
                    {
                        name: 'San Diego',
                        locations: [
                            {
                                name: 'Charter Healthcare of San Diego',
                                address: '16955 Via Del Campo Suite 100, San Diego, CA 92127-1719',
                                coordinates: { lat: 33.019872, lng: -117.092233 },
                                link: '/locations/san-diego'
                            }
                        ]
                    },
                    {
                        name: 'Stanton',
                        locations: [
                            {
                                name: 'Cambridge Hospice of Orange County',
                                address: '12235 Beach Blvd. Suite 200-B, Stanton, CA 90680-3939',
                                coordinates: { lat: 33.784430, lng: -117.993590 },
                                link: '/locations/orange-county'
                            }
                        ]
                    }
                  ]
            },
            {
                state: 'Colorado',
                animationTime: '800',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Loveland',
                      locations: [
                          {
                              name: 'Charter Healthcare of Fort Collins',
                              address: '1562 Taurus Ct., Loveland, CO 80537',
                              coordinates: { lat: 40.401090, lng: -105.054930 },
                              link: '/locations/fort-collins'
                          }
                      ]
                    }
                  ]
            },
            {
                state: 'Nebraska',
                animationTime: '900',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Omaha',
                      locations: [
                          {
                              name: 'PhysMed Home Health of Omaha',
                              address: '4905 S 107th Ave, Omaha, NE 68127',
                              coordinates: { lat: 41.210443, lng: -96.0788 },
                              link: '/locations/physmed'
                          },
                      ]
                    },
                    {
                        name: 'Omaha',
                        locations: [
                            {
                              name: 'SereneCare Hospice of Omaha',
                              address: '4905 S 107th Ave, Omaha, NE 68127',
                              coordinates: { lat: 41.210443, lng: -96.0788 },
                              link: '/locations/serene-care'
                          },
                        ]
                    }
                  ]
            },
            {
                state: 'Nevada',
                animationTime: '1000',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Las Vegas',
                      locations: [
                          {
                              name: 'Charter Healthcare of Las Vegas',
                              address: '2739 Sunridge Heights Parkway, Suite 110, Henderson, NV 89044',
                              coordinates: { lat: 36.161930, lng: -115.171330 },
                              link: '/locations/las-vegas'
                          }
                      ]
                    }
                  ]
            },
            {
                state: 'Texas',
                animationTime: '1100',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Sugar Land',
                      locations: [
                          {
                              name: 'Providence Home Health and Hospice',
                              address: '11420 Dairy Ashford Rd. Suite 108 Sugar Land, TX 77478',
                              coordinates: { lat: 29.65467157248156, lng: -95.59837821522869 },
                              link: '/locations/sugar-land'
                          }
                      ]
                    }
                  ]
            },
            {
                state: 'Utah',
                animationTime: '1200',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'West Jordan',
                      locations: [
                          {
                              name: 'Charter Healthcare of Salt Lake City',
                              address: '6671 S. Redwood Rd. Suite 101, West Jordan, UT 84084',
                              coordinates: { lat: 40.630240, lng: -111.938240 },
                              link: '/locations/salt-lake-city'
                          }
                      ]
                    }
                  ]
            }
        ]
    )
    
    const isSvg = props.svg;
    //Method that will be passed down as a prop to handle state management and expand cards / animate clickers
    //ID passed down as a prop to child button - which invokes this function and passes its ID when clicked
    const expandCard = (id) => {
        //create a new list from old list, but update whichever child was clicked on
        const newList = locationsList.map((location) => {
            if(location.state === id) {
                const newLocation = {
                    //state is updated, component rerenders, and new props are passed down to children
                    ...location,
                    isClicked: !location.isClicked,
                    isExpanded: !location.isExpanded
                }
                //must return so .map can enter it into new array list
                return newLocation;
            };
            //must return so .map can enter it into new array list
            return location;
        });
        //use setState method to update state
        setLocationsList(newList);
    }

    //Whichever state has been clicked on is the active Location to be sent to the map for rendering pins
    const [ activeLocations, setActiveLocations ] = useState(locationsList);

    useEffect(() => {
        const updatePins = () => {
            //create a new list from old list, but update whichever child was clicked on
            const newList = locationsList.map((location) => {
               if(location.isExpanded === true) {
                   const newLocation = location;
                   //must return so .map can enter it into new array list
                   return newLocation;
               };
               //for any items not expanded, return false so the map component knows not to render
               return false;
           });
           //update list of active pins
           setActiveLocations(newList);
       }

        updatePins();
    }, [locationsList])

    //Marker Hover functionality
    const [ isHovered, setIsHovered ] = useState('');
    const hoverReveal = (id) => {

        locationsList.map(location => {
            location.cities.map(city => {
                city.locations.map(business => {
                    if(business.name === id) {
                        return setIsHovered(business.name);
                    }
                    return business;
                });
                return city;
            });
            return location;
        });

    }


  return (
    <div className='LocationsStrip'>
        {isSvg &&
            <svg className='locations-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="474" viewBox="0 0 1440 474" fill="none">
                <g filter="url(#filter8_d)">
                <path d="M1 10H1441V92.5C1441 92.5 1288 266.5 786.5 237.5C285 208.5 1 454 1 454V10Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter8_d" x="-14" y="0" width="1470" height="474" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
        }
        {isSvg &&
            <svg className='locations-wave-mobile' xmlns="http://www.w3.org/2000/svg" width="375" height="463" viewBox="0 0 375 463" fill="none">
                <g filter="url(#filter9_d)">
                <path d="M0 0H375V381.5C375 381.5 335.099 437.158 204.5 396.223C73.901 355.288 0 444 0 444V0Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter9_d" x="-10" y="-1" width="395" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="9"/>
                <feGaussianBlur stdDeviation="5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
        }
        <div className='left'> 
            <PinIcon />
            <h4>Our Locations</h4>
            <p>See our locations by state</p>
            <div className='card-container'>
                {/* Map through each location, create a card component and pass state values and methods in as props */}
                {locationsList.map((state) => {
                    return <Card 
                        state={state.state} 
                        id={state.state}
                        cities={state.cities}
                        isClicked={state.isClicked} 
                        isExpanded={state.isExpanded}
                        animationTime={state.animationTime}
                        key={state.state}

                        expandCard={expandCard} 
                        hoverReveal={hoverReveal}
                    />
                })}
            </div>
        </div>
        <div className='right'>
            <Map locations={activeLocations} isHovered={isHovered} />
        </div> 
    </div>
  )
}

export default LocationsStrip;