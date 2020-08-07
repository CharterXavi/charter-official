import React from "react";
import { Link } from "gatsby";
import PostLink from "../../components/news/post-link";
import './oldest-grid.css';

const OldestGrid = (props) => {

  return (
    <div className='oldest'>
        <div className='grid-header'>
        <h2>Oldest Articles</h2>
        <Link to='/news/oldest'>See All Oldest Articles</Link>
        </div>
        <div className='grid'>
        
        {
        //the posts from GraphQL Query are 'edges', but we'll call them posts
        props.posts
            .filter(post => !!post.node.frontmatter.date)
            .map(post => 
                <PostLink key={post.node.id} post={post.node} />
            )
        }
        
        </div>
    </div>
  )
};

export default OldestGrid;