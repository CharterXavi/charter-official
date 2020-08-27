import { Link } from "gatsby"
import React, {useState} from 'react'
import './header.css'
import Logo from '../../images/charter-logo-3-white.png'; //uses webpack to store data about the image in an import
import Hamburger from './hamburger'
import ButtonPrimary from '../buttons/button-primary'
import Menu from './menu'
import phoneIcon from '../../images/iconography/phone-outline.png'; //uses webpack to store data about the image in an import

const Header = () => {
  //initial states: menu is not expanded and the button hasn't been clicked
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const [isMenuExpanded, setMenuExpanded] = useState(false);
  const [isSubMenuExpanded, setSubMenuExpanded] = useState(false);

  //onClick function that will update this components state
  const handleHamburgerClick = () => {
    setHamburgerClicked(!isHamburgerClicked);
    setMenuExpanded(!isMenuExpanded);
  }
  const expandSubMenu = () => {
    setSubMenuExpanded(!isSubMenuExpanded);
  }

  return (
    <header className='Header'>
      <div className='header-boundary'>
        <div className='main-bar'>
          <Link to="/">
            <img src={Logo} alt='Charter Logo' /> {/* data about Logo from webpack used as src for image */}
          </Link>
          {/* pass handleClick function to child so that when it's invoked it will change state in parent */}
          {/* that way we can pass info about whether or not the button's been clicked to expand the menu here accordingly */}
          <div className='header-right'>
            <ButtonPrimary icon={phoneIcon} link='tel:+11234567890' content='123-456-7890' />
            {isMenuExpanded ? 
              <small>CLOSE</small> /* margin included since 'close' is longer word than 'menu', causing neighboring elements to move around */
              :
              <small>MENU</small>
            }
            <Hamburger onClick={handleHamburgerClick} />
          </div>
        </div>
    </div>
        <Menu isExpanded={isMenuExpanded} isSubMenuExpanded={isSubMenuExpanded} expandSubMenu={expandSubMenu} />
    </header>
  )
}

export default Header
