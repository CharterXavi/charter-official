import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import './menu.css'


const Menu = (props) => {
    //use a staticQuery to get the pages names and paths from the gatsby-config.js file
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          menuLinks {
              name
              path
          }
        }
      }
    }
  `)
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Menu ${props.isExpanded ? 'expanded' : ''}`}>
            <ul>
                {data.site.siteMetadata.menuLinks.map(page => {
                    return <li>
                      <Link 
                        to={`${page.path}`} 
                        activeStyle={{background: 'linear-gradient(90deg, #F493AA 0%, #F2D1C9 100%)', outline: 'none', border: 'none'}}
                      >
                        {page.name}
                      </Link>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Menu

