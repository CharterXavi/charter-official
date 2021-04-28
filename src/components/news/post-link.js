import './post-link.css';

import { Link } from "gatsby";
import React from "react";

const PostLink = (props) => {
    
    let imageSrc = props.post.node.image.fluid.src;
    
    return (
        <Link to={props.post.node.slug}>
            <div className='PostLink'>
                <div className='categories'>
                    <p className='category'>{props.post.node.category}</p>
                </div>
                <div className='content'>
                    {props.post.node.title}
                    <br />
                    {props.post.node.date}
                </div>
                <div className='overlay'></div>
                <img src={imageSrc} alt="Blog Post" width='320' height='250'/>
            </div>
        </Link>
    )

};

export default PostLink;