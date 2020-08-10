import React, {useState, useEffect} from "react";
import { graphql, Link } from "gatsby";
import PostLink from "../../components/news/post-link";
import Layout from '../../components/layout';
import HeaderStrip from '../../components/header-strip/header-strip';
import ShowMoreButton from '../../components/buttons/show-more';
import newsImage from '../../images/news.png';
import './recent.css';

const RecentPage = ({
  data: {
    allMarkdownRemark: { edges },
  }
}) => {
    const allRecentPosts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    
    const [posts, setPosts] = useState([]); //posts state begin as an empty array
    const [clickCount, setClickCount] = useState(1); //click count state begins as a 1
    const [isFinished, setIsFinished] = useState(false); //when posts are all shown, change state to setFinished:true
    const [hideShowMore, setHideShowMore] = useState(false); //when not enough posts, hide showMore button
    const newPostList = [];

    //push first 6 posts to state upon mounting so the user gets the first posts upon loading the page
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
          //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
          if(allRecentPosts[i]) {
              newPostList.push(allRecentPosts[i]);
          } else {
              setHideShowMore(true);
          }
        }
        setPosts(newPostList);
      }, []);

    //write a function that will update state to show 6 more posts
    const showMorePosts = (clickCount, isFinished) => {
        const newClickCount = clickCount++;
        
        //if isFinished = true, reset everything to show first 6 posts once again
        if(isFinished) {
            for (let i = 0; i < 6; i++) {
              //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
              if(allRecentPosts[i]) {
                newPostList.push(allRecentPosts[i]);
              }
            }
            //reset state properties
            setPosts(newPostList);
            setClickCount(1);
            setIsFinished(false);
            console.log('POSTS: ', newPostList);
            console.log('CLICKS: ', clickCount);
        //Otherwise, show 6 more posts by replacing what's on the page with itself + another 6
        } else {
            //take clickCount as an input, and loop over 6 times for each click
            //update state to reflect new results
            for (let i = 0; i < clickCount * 6; i++) {
              //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
                if (allRecentPosts[i]) {
                    newPostList.push(allRecentPosts[i]);
                } else {
                    setIsFinished(true);
                }      
            }
            //update state properties
            setPosts(newPostList);
            setClickCount(newClickCount);
            console.log('POSTS: ', newPostList);
            console.log('CLICKS: ', clickCount);
        }
    }

  return (
      <Layout>
        <HeaderStrip 
            title='Recent Articles'
            headline='Stay up to date in our company and industry!'
            image={newsImage}
        />
        <div className='AllPosts'>
            <div className='grid-wrapper'>
                <div className='grid-header'>
                  <h2>All Recent Articles</h2>
                </div>
                <div className='grid'>
                    
                    {/* Loop over posts in state and show PostLinks for each */}
                    {posts.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
                
                </div>
                {hideShowMore ? '' : <ShowMoreButton content='Show more' clickCount={clickCount} isFinished={isFinished} showMorePosts={showMorePosts} />}
            </div>
        </div>
      </Layout>
  )
};

export default RecentPage;

//Query our post frontmatter to get relative paths for the images they may be referencing
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            categories
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
