import React, {useState, useEffect} from 'react';
import './locations.css';
import pinIcon from '../../images/iconography/locations/pin.png';
import Card from './card';
import Map from './map';

const LocationsStrip = (props) => {
    const [locationsList, setLocationsList] = useState(
        [
            {
                state: 'Arizona',
                animationTime: '800',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Tempe',
                      locations: [
                        {
                            name: 'Arizona Hospice Select',
                            address: '1232 E. Broadway St. Suite 210, Tempe, AZ 85282',
                            coordinates: { lat: 33.408025, lng: -111.919244 }
                        }
                      ]
                    },
                    {
                      name: 'Tuscon',
                      locations: [
                        {
                            name: 'Amber Hospice',
                            address: '6400 E. Grant Rd., Suite 150 Tuscon, AZ 85715',
                            coordinates: { lat: 32.24938, lng: -110.855152 }
                        }
                      ]
                    }
                  ]
            },
            {
                state: 'California',
                animationTime: '1000',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                        name: 'Apple Valley',
                        locations: [
                            {
                                name: 'Charter High Desert Health Care Group',
                                address: '19015 Town Center Dr. Suite 104, Apple Valley, CA 92308',
                                coordinates: { lat: 34.465386, lng: -117.248551 }
                            }
                        ]
                    },
                    {
                        name: 'Colton',
                        locations: [
                            {
                                name: 'Charter Hospice of Colton',
                                address: '1007 E. Cooley Dr. Suite 100 Colton, CA 92324-3901',
                                coordinates: { lat: 34.05547, lng: -117.310526 }
                            }
                        ]
                    },
                    {
                        name: 'Covina',
                        locations: [
                            {
                                name: 'Charter Home Health',
                                address: '970 S. Village Oaks Dr. Suite 102, Covina, CA 91724',
                                coordinates: { lat: 34.071759, lng: -117.862599 }
                            },
                            {
                                name: 'Charter Hospice of the San Gabriel Valley',
                                address: '970 S. Village Oaks Dr. Suite 106, Covina, CA 91724',
                                coordinates: { lat: 34.071759, lng: -117.862599 }
                            }
                        ]
                    },
                    {
                        name: 'Palm Desert',
                        locations: [
                            {
                                name: 'Charter Home Health of the Desert',
                                address: '72855 Fred Waring Dr. Suite A4, Palm Desert, CA 92260',
                                coordinates: { lat: 33.728698, lng: -116.394019 }
                            },
                            {
                                name: 'Charter Hospice of the Desert',
                                address: '72855 Fred Waring Dr. Suite A5, Palm Desert, CA 92260',
                                coordinates: { lat: 33.728114, lng: -116.394997 }
                            }
                        ]
                    },
                    {
                        name: 'Rancho Cucamonga',
                        locations: [
                            {
                                name: 'Cambridge Hospice',
                                address: '9229 Utica Ave. Suite 100, Rancho Cucamonga, CA 91730',
                                coordinates: { lat: 34.085486, lng: -117.57063 }
                            }
                        ]
                    },
                    {
                        name: 'Riverside',
                        locations: [
                            {
                                name: 'Cambridge Hospice of Riverside',
                                address: '6560 Van Buren Blvd. Suite G, Riverside, CA 92503-1542',
                                coordinates: { lat: 33.949954, lng: -117.454308 }
                            }
                        ]
                    },
                    {
                        name: 'San Diego',
                        locations: [
                            {
                                name: 'Charter Hospice of San Diego',
                                address: '16955 Via Del Campo Suite 100, San Diego, CA 92127-1719',
                                coordinates: { lat: 33.019872, lng: -117.092233 }
                            }
                        ]
                    },
                    {
                        name: 'Simi Valley',
                        locations: [
                            {
                                name: 'Charter Hospice',
                                address: '5775 E Los Angeles Ave. Suite 226, Simi Valley, CA 93063-5215',
                                coordinates: { lat: 34.272140, lng: -118.679840 }
                            }
                        ]
                    },
                    {
                        name: 'Stanton',
                        locations: [
                            {
                                name: 'Cambridge Hospice of Orange County',
                                address: '12235 Beach Blvd. Suite 200-B, Stanton, CA 90680-3939',
                                coordinates: { lat: 33.784430, lng: -117.993590 }
                            }
                        ]
                    }
                  ]
            },
            {
                state: 'Colorado',
                animationTime: '1300',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Loveland',
                      locations: [
                          {
                              name: 'Vitality Home Healthcare',
                              address: '1562 Taurus Ct., Loveland, CO 80537',
                              coordinates: { lat: 40.401090, lng: -105.054930 }
                          }
                      ]
                    }
                  ]
            },
            {
                state: 'Nevada',
                animationTime: '1600',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'Las Vegas',
                      locations: [
                          {
                              name: 'Charter Healthcare of Las Vegas',
                              address: '801 S. Rancho Drive Suite 6, Las Vegas, NV 89106-3812',
                              coordinates: { lat: 36.161930, lng: -115.171330 }
                          }
                      ]
                    }
                  ]
            },
            {
                state: 'Utah',
                animationTime: '2000',
                isClicked: false,
                isExpanded: false,
                cities: [
                    {
                      name: 'West Jordan',
                      locations: [
                          {
                              name: 'Heartwood Home Health & Hospice',
                              address: '6671 S. Redwood Rd. Suite 101, West Jordan, UT 84084',
                              coordinates: { lat: 40.630240, lng: -111.938240 }
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
    const [ activeLocation, setActiveLocation ] = useState(locationsList[1]);
    const updatePins = () => {
        locationsList.map(location => {
            if (location.isExpanded === true) {
                setActiveLocation(location);
            } 
        })
        console.log('LOCATION: ', activeLocation);
    }
    useEffect(() => {
        updatePins();
    })

  return (
    <div className='LocationsStrip'>
        {isSvg &&
            <svg className='locations-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="464" viewBox="0 0 1440 464" fill="none">
                <g filter="url(#filter8_d)">
                <path d="M1 1H1441V83.5C1441 83.5 1288 257.5 786.5 228.5C285 199.5 1 445 1 445V1Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter8_d" x="-9" y="0" width="1460" height="464" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
        <img src={pinIcon} alt='Home Icon' className='icon' />
            <h2>Our Locations</h2>
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
                        expandCard={expandCard} 
                        animationTime={state.animationTime}
                        key={state.state}
                        updatePins={updatePins}
                    />
                })}
            </div>
        </div>
        <div className='right'>
            <Map locations={activeLocation} />
        </div> 
    </div>
  )
}

export default LocationsStrip