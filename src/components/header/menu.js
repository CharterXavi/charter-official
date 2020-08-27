import React, {useState} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import './menu.css'
import SubMenu from './sub-menu';


const Menu = (props) => {
    //use a staticQuery to get the pages names and paths from the gatsby-config.js file
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          menuLinks {
              name
              path
              subMenu {
                name
                path
              }
          }
        }
      }
    }
  `)
  
  const [isPlusClicked, setPlusClicked] = useState(false)

  const handleClick = () => {
    props.expandSubMenu();
    setPlusClicked(!isPlusClicked);
  }

  const menuLinks = data.site.siteMetadata.menuLinks
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Menu ${props.isExpanded ? 'expanded' : ''}`} >
            <ul>
                {menuLinks.map(link => {
                    return <li>
                      <Link 
                        to={`${link.path}`} 
                        activeStyle={{background: 'black', outline: 'none', border: 'none'}}
                        key={link.name}
                      >
                        {link.name}
                      </Link>
                      {link.subMenu[0].name.length > 0 && (
                          <svg className={`plus-sign ${isPlusClicked ? 'spin-clicker' : ''}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={handleClick}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17 0.895431 16.1046 0 15 0V0C13.8954 0 13 0.89543 13 2V10.5C13 11.8807 11.8807 13 10.5 13H2C0.895431 13 0 13.8954 0 15V15C0 16.1046 0.89543 17 2 17H10.5C11.8807 17 13 18.1193 13 19.5V28C13 29.1046 13.8954 30 15 30V30C16.1046 30 17 29.1046 17 28V19.5C17 18.1193 18.1193 17 19.5 17H28C29.1046 17 30 16.1046 30 15V15C30 13.8954 29.1046 13 28 13H19.5C18.1193 13 17 11.8807 17 10.5V2Z" fill="url(#paint10_linear)"/>
                            <defs>
                            <linearGradient id="paint10_linear" x1="1.60714" y1="30" x2="36.4552" y2="14.7833" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCE94"/>
                            <stop offset="1" stop-color="#F05F7E"/>
                            </linearGradient>
                            </defs>
                          </svg>
                        )}
                      {link.subMenu[0].name !== '' && (
                        <SubMenu subMenu={link.subMenu} isExpanded={props.isSubMenuExpanded} />
                      )}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Menu

