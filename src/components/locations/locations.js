import React, {useState} from 'react';
import './locations.css';
import pinIcon from '../../images/iconography/locations/pin.png';
import Card from './card';
import Map from './map';

const LocationsStrip = (props) => {
    const [locationsList, setLocationsList] = useState(
        [
            {
                name: 'Inland Empire',
                address: '1012 East Cooley Drive, Suite G, Colton CA 92324',
                phone: 'P: 909-825-2969',
                fax: 'F: 909-825-8751',
                animationTime: '800',
                isClicked: false,
                isExpanded: false
            },
            {
                name: 'High Desert',
                address: '19015 Town Center Drive, Suite 104, Apple Valley CA 92308',
                phone: 'P: 760-247-1161',
                fax: 'F: 760-247-5502',
                animationTime: '1000',
                isClicked: false,
                isExpanded: false
            },
            {
                name: 'San Gabriel Valley',
                address: '970 S. Village Oaks Drive, Suite 106, Covina CA 91724',
                phone: 'P: 626-331-8001',
                fax: 'F: 855-647-6360',
                animationTime: '1300',
                isClicked: false,
                isExpanded: false
            },
            {
                name: 'Low Desert',
                address: '72855 Fred Waring Drive, Suite A5, Palm Desert CA 92260',
                phone: 'P: 760-568-2002',
                fax: 'F: 760-568-2040',
                animationTime: '1600',
                isClicked: false,
                isExpanded: false
            },
            {
                name: 'Simi Valley',
                address: '5775 E Los Angeles Avenue, Suite 226, Simi Valley CA 93003',
                phone: 'P: 805-582-0033',
                fax: 'F: 805-583-9455',
                animationTime: '2000',
                isClicked: false,
                isExpanded: false
            }
        ]
    )
    
    const isSvg = props.svg;
    //Method that will be passed down as a prop to handle state management and expand cards / animate clickers
    //ID passed down as a prop to child button - which invokes this function and passes its ID when clicked
    const expandCard = (id) => {
        //create a new list from old list, but update whichever child was clicked on
        const newList = locationsList.map((location) => {
            if(location.name === id) {
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
                {locationsList.map((location) => {
                    return <Card 
                        name={location.name} 
                        id={location.name}
                        address={location.address}
                        phone={location.phone}
                        fax={location.fax} 
                        isClicked={location.isClicked} 
                        isExpanded={location.isExpanded} 
                        expandCard={expandCard} 
                        animationTime={location.animationTime}
                        key={location.name}
                    />
                })}
            </div>
        </div>
        <div className='right'>
            <Map />
        </div> 
    </div>
  )
}

export default LocationsStrip