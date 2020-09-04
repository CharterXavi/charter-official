import React from 'react';
import {Link} from 'gatsby';
import './category-nav.css';
import _ from 'lodash';

const CategoryNav = (props) => {
    return (
        <div className='CategoryNav'>
            <h5>Categories:</h5>
            {
                props.categories.map(category => {
                return <Link key={category.fieldValue} to={`/categories/${_.kebabCase(category.fieldValue)}`} className='category-link' >{category.fieldValue}</Link>
                })
            }
        </div>
    );
};

export default CategoryNav;