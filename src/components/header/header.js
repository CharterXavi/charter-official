import './header.css'

import React, {useState} from 'react'

import ButtonPrimary from '../buttons/button-primary'
import Hamburger from './hamburger'
import { Link } from "gatsby"
import Logo from '../icons/logo'
import Menu from './menu'
import phoneIcon from '../../images/iconography/phone.png'; //uses webpack to store data about the image in an import

//uses webpack to store data about the image in an import

const Header = () => {
  //initial states: menu is not expanded and the button hasn't been clicked
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const [isMenuExpanded, setMenuExpanded] = useState(false);
  const [menuLinks, setMenuLinks] = useState(
    [
      {
        name: 'Home',
        path: '/',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'About',
        path: '/about',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: 'Testimonials',
            path: '/about/testimonials'
          },
          {
            name: 'Partnerships',
            path: '/about/partnerships'
          }
        ]
      },
      {
        name: 'Services',
        path: '/services',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name:'Private Duty Home Care',
            path:'/services/private-duty',
          },
          {
          name:'Skilled Home Health',
          path:'/services/home-health',
          },
          {
            name:'Palliative Care',
            path:'/services/palliative-care',
          },
          {
            name:'Complex Care Management',
            path:'/services/ccm',
          },
          {
            name:'Hospice',
            path:'/services/hospice',
          },
          {
            name:'Acute/Hospital-Based Care',
            path:'/services/acute-care',
          }
        ]
      },
      {
        name: 'Our Team',
        path: '/our-team',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'News',
        path: '/news',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: 'Recent',
            path: '/news/recent'
          },
          {
            name: 'Categories',
            path: '/news/categories'
          },
          {
            name: 'Tags',
            path: '/news/tags'
          }
        ]
      },
      {
        name: 'Careers',
        path: '/careers',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: 'Volunteering & Interning',
            path: '/careers/volunteering'
          }
        ]
      },
      {
        name: 'Contact Us',
        path: '/contact',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      }
    ]
  )
  //onClick function that will update this components state
  const handleHamburgerClick = () => {
    setHamburgerClicked(!isHamburgerClicked);
    setMenuExpanded(!isMenuExpanded);
  }

  const expandSubMenu = (id) => {
    //create a new list from old list, but update whichever child was clicked on
    const newList = menuLinks.map((mainLink) => {
        if(mainLink.name === id) {
            const newLink = {
                //state is updated, component rerenders, and new props are passed down to children
                ...mainLink,
                isSubMenuExpanded: !mainLink.isSubMenuExpanded
            }
            //must return so .map can enter it into new array list
            return newLink;
        };
        //must return so .map can enter it into new array list
        return mainLink;
    });
    //use setState method to update state
    setMenuLinks(newList);
  }

  return (
    <header className='Header'>
      <div className='header-boundary'>
        <div className='main-bar'>
          <Link to="/" aria-label='Visit the home page'>
            <Logo />
          </Link>
          {/* pass handleClick function to child so that when it's invoked it will change state in parent */}
          {/* that way we can pass info about whether or not the button's been clicked to expand the menu here accordingly */}
          <div className='header-right'>
            <ButtonPrimary icon={phoneIcon} link='tel:+19096444965' content='909-644-4965' />
            {isMenuExpanded ? 
              <small>CLOSE</small> /* margin included since 'close' is longer word than 'menu', causing neighboring elements to move around */
              :
              <small>MENU</small>
            }
            <Hamburger onClick={handleHamburgerClick} />
          </div>
        </div>
    </div>
        <Menu isExpanded={isMenuExpanded} menuLinks={menuLinks} expandSubMenu={expandSubMenu} />
    </header>
  )
}

export default Header
