import './post-strip.css';

import { Link } from "gatsby";
import PostLink from "./post-link";
import React from "react";

const PostStrip = (props) => {

  return (
    <div className='PostStrip'>
        <div className='grid-header'>
          <h5>{props.title}</h5>
          <Link to={props.link}>{props.linkContent}</Link>
        </div>
        <hr/>
        <div className='grid'>
        {
          props.posts
              .filter(post => !!post.node.date)
              .map(post => 
                  <PostLink key={post.node.id} post={post} />
              )
        }
        </div>
    </div>
  )
};

export default PostStrip;