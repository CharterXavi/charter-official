import React from 'react';
import './news.css';
import PostStrip from './post-strip'

const NewsStrip = (props) => {
    return (
        <div className='NewsStrip'>
            <PostStrip posts={props.posts} title='Recent News' link='/news' />
        </div>
    );
};

export default NewsStrip;