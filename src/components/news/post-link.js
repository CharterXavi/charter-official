import React from "react";
import { Link } from "gatsby";
import './post-link.css';

const PostLink = ({ post }) => {
    
    let imageSrc = post.frontmatter.featuredImage.childImageSharp.fluid.src;
    
    return (
        <Link to={post.frontmatter.slug}>
            <div className='PostLink'>
                <div className='categories'>
                    <Link to={`/news/${post.frontmatter.category}`} className='category'>{post.frontmatter.category}</Link>
                </div>
                <div className='content'>
                    {post.frontmatter.title}
                    <br />
                    {post.frontmatter.date}
                </div>
                <div className='overlay'></div>
                <img src={imageSrc} alt="Blog Post" />
            </div>
        </Link>
    )

};

export default PostLink;