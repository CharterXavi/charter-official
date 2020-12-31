import './category-nav.css';

import {Link} from 'gatsby';
import React from 'react';
import _ from 'lodash';

const CategoryNav = (props) => {
    return (
        <div className='CategoryNav'>
            <h6>Categories:</h6>
            {
                props.categories.map(category => {
                return <Link key={category.fieldValue} to={`/categories/${_.kebabCase(category.fieldValue)}`} className='category-link' >{category.fieldValue}</Link>
                })
            }
        </div>
    );
};

export default CategoryNav;