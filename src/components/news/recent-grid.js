import React from "react";
import { Link } from "gatsby";
import PostLink from "../../components/news/post-link";
import './recent-grid.css';

const RecentGrid = (props) => {

  return (
    <div className='RecentGrid'>
        <div className='grid-header'>
        <h2>Recent Articles</h2>
        <Link to='/news/recent'>See All Recent Articles</Link>
        </div>
        <div className='grid'>
        
        {
        //the posts from GraphQL Query are 'edges', but we'll call them posts
        props.posts
            .filter(post => !!post.node.frontmatter.date)
            .map(post => 
                <PostLink key={post.node.id} post={post} />
            )
        }
        
        </div>
    </div>
  )
};

export default RecentGrid;