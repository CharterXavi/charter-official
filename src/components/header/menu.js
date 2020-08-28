import React, {useState} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import './menu.css'
import SubMenu from './sub-menu';
import MenuClicker from './menu-clicker';


const Menu = (props) => {
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Menu ${props.isExpanded ? 'expanded' : ''}`} >
            <ul>
                {/* map through all of the links from gatsbyconfig.js */}
                {props.menuLinks.map(link => {
                    return <li>
                      <Link 
                        to={`${link.path}`} 
                        activeStyle={{background: 'black', outline: 'none', border: 'none'}}
                        key={link.name}
                      >
                        {link.name}
                      </Link>
                      {/* If the first submenu object, as a sample, is populated, render a clickable plus sign to expand submenu */}
                      {link.subMenu[0].name !== '' && (
                        <MenuClicker expandSubMenu={props.expandSubMenu} id={link.name} />
                      )}

                      {/* If the first submenu object, as a sample, is populated, render a submenu component with the submenu links */}
                      {link.subMenu[0].name !== '' && (
                        <SubMenu 
                          subMenu={link.subMenu} 
                          isExpanded={link.isSubMenuExpanded} 
                          id={link.name} 
                          isSubMenuExpanded={link.isSubMenuExpanded}
                        />
                      )}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Menu

