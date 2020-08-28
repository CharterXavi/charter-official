import React from 'react'
import {Link} from 'gatsby'
import './sub-menu.css'


const SubMenu = (props) => {
    const heightFactor = (props.subMenu.length * 75).toString();
    const heightStr = heightFactor.concat('px');
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`SubMenu ${props.isSubMenuExpanded ? 'sub-expanded' : ''}`} style={{height: `${props.isSubMenuExpanded ? heightStr : '0px'}`}}>
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
