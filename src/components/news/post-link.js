import React from "react";
import { Link } from "gatsby";
import './post-link.css';

const PostLink = (props) => {
    
    let imageSrc = props.post.node.frontmatter.featuredImage.childImageSharp.fluid.src;
    
    return (
        <Link to={props.post.node.frontmatter.slug}>
            <div className='PostLink'>
                <div className='categories'>
                    <p className='category'>{props.post.node.frontmatter.category}</p>
                </div>
                <div className='content'>
                    {props.post.node.frontmatter.title}
                    <br />
                    {props.post.node.frontmatter.date}
                </div>
                <div className='overlay'></div>
                <img src={imageSrc} alt="Blog Post" />
            </div>
        </Link>
    )

};

export default PostLink;