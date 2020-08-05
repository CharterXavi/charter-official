import React from "react";
import { Link } from "gatsby";
import './post-link.css';

const PostLink = ({ post }) => {
    
    let imageSrc = post.frontmatter.featuredImage.childImageSharp.fluid.src;
    console.log(imageSrc);
    
    return (
        <Link to={post.frontmatter.slug}>
            <div className='PostLink'>
                <div className='categories'>
                    {post.frontmatter.categories}
                </div>
                <div className='content'>
                    {post.frontmatter.title}
                    <br />
                    {post.frontmatter.date}
                </div>
                <div className='overlay'></div>
                <img src={imageSrc} alt="Flowers on a pink background" />
            </div>
        </Link>
    )

};

export default PostLink;