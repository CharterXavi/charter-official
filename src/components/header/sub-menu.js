import React from 'react'
import {Link} from 'gatsby'
import './sub-menu.css'


const SubMenu = (props) => {

  //render a menu that displays a link for each page in the config file
    return (
        <div className={`SubMenu ${props.isExpanded ? 'sub-expanded' : ''}`} >
            <ul>
            {props.subMenu.map(subLink => {
                return <li>
                <Link 
                    to={`${subLink.path}`} 
                    activeStyle={{background: 'black', outline: 'none', border: 'none'}}
                    key={subLink.name}
                >
                {subLink.name}
                </Link>
                </li>
            })}
            </ul>
        </div>
    );
};

export default SubMenu;
