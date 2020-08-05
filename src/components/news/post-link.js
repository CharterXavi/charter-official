import React from "react";
import { Link } from "gatsby";
import './post-link.css';
import heroImage from '../../images/hero-image.jpeg';

const PostLink = ({ post }) => (
    <Link to={post.frontmatter.slug}>
        <div className='PostLink'>
            <div className='content'>
                {post.frontmatter.title}
                <br />
                {post.frontmatter.date}
            </div>
            <img src={heroImage} alt="Flowers on a pink background" />
        </div>
    </Link>
);

export default PostLink;