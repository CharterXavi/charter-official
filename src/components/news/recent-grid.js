import './recent-grid.css';

import { Link } from "gatsby";
import PostLink from "../../components/news/post-link";
import React from "react";

const RecentGrid = (props) => {

  return (
    <div className='RecentGrid'>
        <div className='grid-header'>
          <h5>{props.title}</h5>
          {/* ----  Linking to nothing until posts are available to render  ---- */}
          {props.link && <Link>{props.linkContent}</Link>}
        </div>
        <hr/>
        <div className='grid'>
        
        {
          //the posts from GraphQL Query are 'edges', but we'll call them posts
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

export default RecentGrid;