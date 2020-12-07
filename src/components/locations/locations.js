import React, {useState, useEffect} from 'react';
import './locations.css';
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
                            coordinates: { lat: 33.408025, lng: -111.919244 },
                            link: 'https://goo.gl/maps/TnXuzuwG1Ec5TuWk6'
                        }
                      ]
                    },
                    {
                      name: 'Tuscon',
                      locations: [
                        {
                            name: 'Amber Hospice',
                            address: '6400 E. Grant Rd., Suite 150 Tuscon, AZ 85715',
                            coordinates: { lat: 32.24938, lng: -110.855152 },
                            link: 'https://goo.gl/maps/bPJTJV3wBqTp2c8y7'
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
                                coordinates: { lat: 34.465386, lng: -117.248551 },
                                link: 'https://goo.gl/maps/ubdJLu7KBqoLm27t9'
                            }
                        ]
                    },
                    {
                        name: 'Colton',
                        locations: [
                            {
                                name: 'Charter Hospice of Colton',
                                address: '1007 E. Cooley Dr. Suite 100 Colton, CA 92324-3901',
                                coordinates: { lat: 34.05547, lng: -117.310526 },
                                link: 'https://goo.gl/maps/7pNfrqqzGiZFG5PK6'
                            }
                        ]
                    },
                    {
                        name: 'Covina',
                        locations: [
                            {
                                name: 'Charter Home Health',
                                address: '970 S. Village Oaks Dr. Suite 102, Covina, CA 91724',
                                coordinates: { lat: 34.071759, lng: -117.862599 },
                                link: 'https://goo.gl/maps/pgsmZruf97YpLHWM7'
                            },
                            {
                                name: 'Charter Hospice of the San Gabriel Valley',
                                address: '970 S. Village Oaks Dr. Suite 106, Covina, CA 91724',
                                coordinates: { lat: 34.071759, lng: -117.862599 },
                                link: 'https://goo.gl/maps/xXV8aS71NNM8oKP8A'
                            }
                        ]
                    },
                    {
                        name: 'Palm Desert',
                        locations: [
                            {
                                name: 'Charter Home Health of the Desert',
                                address: '72855 Fred Waring Dr. Suite A4, Palm Desert, CA 92260',
                                coordinates: { lat: 33.728698, lng: -116.394019 },
                                link: 'https://goo.gl/maps/J6c31pFG1oehbkCf6'
                            },
                            {
                                name: 'Charter Hospice of the Desert',
                                address: '72855 Fred Waring Dr. Suite A5, Palm Desert, CA 92260',
                                coordinates: { lat: 33.728114, lng: -116.394997 },
                                link: 'https://goo.gl/maps/3jKQiq6x6XzjokTX7'
                            }
                        ]
                    },
                    {
                        name: 'Rancho Cucamonga',
                        locations: [
                            {
                                name: 'Cambridge Hospice',
                                address: '9229 Utica Ave. Suite 100, Rancho Cucamonga, CA 91730',
                                coordinates: { lat: 34.085486, lng: -117.57063 },
                                link: 'https://goo.gl/maps/dteVihQGcRe4RYsA9'
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
                                link: 'https://goo.gl/maps/qrBbH7kDsYASQJMj8'
                            }
                        ]
                    },
                    {
                        name: 'San Diego',
                        locations: [
                            {
                                name: 'Charter Hospice of San Diego',
                                address: '16955 Via Del Campo Suite 100, San Diego, CA 92127-1719',
                                coordinates: { lat: 33.019872, lng: -117.092233 },
                                link: 'https://goo.gl/maps/V3rCjhb33ruM5m2S8'
                            }
                        ]
                    },
                    {
                        name: 'Simi Valley',
                        locations: [
                            {
                                name: 'Charter Hospice',
                                address: '5775 E Los Angeles Ave. Suite 226, Simi Valley, CA 93063-5215',
                                coordinates: { lat: 34.272140, lng: -118.679840 },
                                link: 'https://goo.gl/maps/pnM4ynGSvZMVSXAt9'
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
                                link: 'https://goo.gl/maps/TNcvBzkHQBNwSS4QA'
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
                              coordinates: { lat: 40.401090, lng: -105.054930 },
                              link: 'https://goo.gl/maps/EpZx2fVo8BXpkg1r8'
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
                              coordinates: { lat: 36.161930, lng: -115.171330 },
                              link: 'https://goo.gl/maps/WNZZRBXpuP2fSPKdA'
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
                              coordinates: { lat: 40.630240, lng: -111.938240 },
                              link: 'https://goo.gl/maps/y3aa8qjHYBQMzV83A'
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
    useEffect(() => {
        updatePins();
    }, locationsList)

    //Marker Hover functionality
    const [ isHovered, setIsHovered ] = useState('');
    const hoverReveal = (id) => {

        locationsList.map(location => {
            location.cities.map(city => {
                city.locations.map(business => {
                    if(business.name === id) {
                        setIsHovered(business.name);
                        console.log('IS HOVERED STATE: ', isHovered)
                    }
                })
            })
        })
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
            <svg xmlns="http://www.w3.org/2000/svg" width="39" viewBox="0 0 39 54" fill="none" className='icon'>
                <g filter="url(#pin)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7172 50C27.3545 50 33.5457 47.6323 33.5457 44.7115C33.5457 41.7908 27.3545 39.4231 19.7172 39.4231C12.0799 39.4231 5.88867 41.7908 5.88867 44.7115C5.88867 47.6323 12.0799 50 19.7172 50ZM19.5012 48.0769C25.0241 48.0769 29.5012 46.3647 29.5012 44.2526C29.5012 42.1405 25.0241 40.4283 19.5012 40.4283C13.9784 40.4283 9.50124 42.1405 9.50124 44.2526C9.50124 46.3647 13.9784 48.0769 19.5012 48.0769Z" fill="#363F55"/>
                    <mask id="pin1" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.9983 15.2996C36.9987 15.299 36.9992 15.2984 36.9996 15.2977C36.9999 15.2974 37 15.297 37 15.2966V15.2966C36.9996 6.84845 29.1647 0 19.5 0C9.83526 0 2.00039 6.84845 2 15.2966V15.2966C2 15.297 2.00016 15.2974 2.00046 15.2977C2.00051 15.2977 2.00056 15.2978 2.00061 15.2978C2.00075 15.2979 2.00086 15.2981 2.00096 15.2983L18.4544 44.0631C18.917 44.8717 20.083 44.8717 20.5456 44.0631L36.9983 15.2996Z"/>
                    </mask>
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.9983 15.2996C36.9987 15.299 36.9992 15.2984 36.9996 15.2977C36.9999 15.2974 37 15.297 37 15.2966V15.2966C36.9996 6.84845 29.1647 0 19.5 0C9.83526 0 2.00039 6.84845 2 15.2966V15.2966C2 15.297 2.00016 15.2974 2.00046 15.2977C2.00051 15.2977 2.00056 15.2978 2.00061 15.2978C2.00075 15.2979 2.00086 15.2981 2.00096 15.2983L18.4544 44.0631C18.917 44.8717 20.083 44.8717 20.5456 44.0631L36.9983 15.2996Z" fill="url(#pin2)"/>
                    <path d="M36.9983 15.2996L35.3768 14.1288L35.3148 14.2147L35.2622 14.3066L36.9983 15.2996ZM18.4544 44.0631L20.1905 43.0701L18.4544 44.0631ZM20.5456 44.0631L22.2816 45.0561L20.5456 44.0631ZM2.00061 15.2978L0.607394 16.7327L2.00061 15.2978ZM2.00096 15.2983L3.73702 14.3052L2.00096 15.2983ZM2.00046 15.2977L3.39366 13.8627L2.00046 15.2977ZM36.9996 15.2977L35.3788 14.1261L36.9996 15.2977ZM35.3788 14.1261C35.379 14.1257 35.3793 14.1254 35.3788 14.126C35.3785 14.1264 35.3777 14.1275 35.3768 14.1288L38.6197 16.4705C38.6192 16.4711 38.6189 16.4716 38.6191 16.4714C38.6191 16.4713 38.6198 16.4704 38.6205 16.4694L35.3788 14.1261ZM19.5 2C28.3214 2 34.9997 8.1973 35 15.2967L39 15.2965C38.9995 5.49961 30.0081 -2 19.5 -2V2ZM4 15.2967C4.00033 8.1973 10.6786 2 19.5 2V-2C8.9919 -2 0.000454686 5.49961 2.15399e-09 15.2965L4 15.2967ZM3.39383 13.8629C3.39377 13.8629 3.39372 13.8628 3.39366 13.8627L0.607246 16.7326C0.607295 16.7326 0.607344 16.7327 0.607394 16.7327L3.39383 13.8629ZM20.1905 43.0701L3.73702 14.3052L0.264899 16.2913L16.7184 45.0561L20.1905 43.0701ZM35.2622 14.3066L18.8095 43.0701L22.2816 45.0561L38.7343 16.2927L35.2622 14.3066ZM16.7184 45.0561C17.9489 47.2074 21.0511 47.2074 22.2816 45.0561L18.8095 43.0701C19.115 42.5361 19.885 42.5361 20.1905 43.0701L16.7184 45.0561ZM0.607394 16.7327C0.472457 16.6017 0.357367 16.4529 0.264899 16.2913L3.73702 14.3052C3.64436 14.1432 3.52904 13.9942 3.39383 13.8629L0.607394 16.7327ZM0 15.2966C0 15.8377 0.21907 16.3557 0.607246 16.7326L3.39366 13.8627C3.78126 14.2391 4 14.7563 4 15.2966H0ZM38.6205 16.4694C38.8678 16.1273 39 15.7167 39 15.2966H35C35 14.8773 35.1319 14.4675 35.3788 14.1261L38.6205 16.4694Z" fill="#363F55" mask="url(#pin1)"/>
                    <circle cx="19.3078" cy="13.4616" r="5.76923" fill="white"/>
                </g>
                <defs>
                    <filter id="pin" x="0" y="0" width="39" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="pin2" x1="3.875" y1="44.6696" x2="47.2103" y2="29.843" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109375" stopColor="#F14D70"/>
                        <stop offset="0.317708" stopColor="#FF008A"/>
                        <stop offset="0.520833" stopColor="#FF446C"/>
                        <stop offset="0.869792" stopColor="#FFB016"/>
                    </linearGradient>
                </defs>
            </svg>
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
                        updatePins={updatePins}
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