import './sub-menu.css';

import {Link} from 'gatsby';
import React from 'react';

const SubMenu = (props) => {
    const heightFactor = (props.subMenu.length * 76).toString(); //76 used instead of 75px due to 1 px border in between each
    const heightStr = heightFactor.concat('px');
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`SubMenu ${props.isSubMenuExpanded ? 'sub-expanded' : ''}`} style={{height: `${props.isSubMenuExpanded ? heightStr : '0px'}`}}>
            <ul>
            {props.subMenu.map(subLink => {
                return <li key={subLink.name}>
                    <Link 
                        to={`${subLink.path}`} 
                        activeStyle={{background: 'black', outline: 'none', border: 'none'}}
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
