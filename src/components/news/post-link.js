import './post-link.css';

import { Link } from "gatsby";
import React from "react";

const PostLink = (props) => {
    
    let imageSrc = props.post.node.frontmatter.featuredImage.childImageSharp.fluid.src;
    
    return (
        // <Link to={props.post.node.frontmatter.slug}> Disabled until posts are available to render
        <Link>
            <div className='PostLink'>
                <div className='categories'>
                    <p className='category'>{props.post.node.frontmatter.category}</p>
                </div>
                {/* <div className='content'>
                    {props.post.node.frontmatter.title}
                    <br />
                    {props.post.node.frontmatter.date}
                </div> */}
                <div className='overlay'></div>
                <img src={imageSrc} alt="Blog Post" width='320' height='250'/>
            </div>
        </Link>
    )

};

export default PostLink;