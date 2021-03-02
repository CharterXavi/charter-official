import './oldest.css';

import React, {useEffect, useState} from "react";

import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import ButtonSecondary from '../../components/buttons/button-secondary';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from '../../components/layout';
import PostLink from "../../components/news/post-link";
import SEO from '../../components/seo';
import ShowMoreButton from '../../components/buttons/show-more';
import archiveHeader from '../../images/headers/archive.png';
import { graphql } from "gatsby";

const OldestPage = ({
  data: {
    allMarkdownRemark: { edges },
  }
}) => {
    
    const [posts, setPosts] = useState([]); //posts state begin as an empty array
    const [clickCount, setClickCount] = useState(1); //click count state begins as a 1
    const [isFinished, setIsFinished] = useState(false); //when posts are all shown, change state to setFinished:true
    const [hideShowMore, setHideShowMore] = useState(false); //when not enough posts, hide showMore button
    const allOldestPosts = edges.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    const newPostList = [];

    // //defining your own mountEffect function using useEffect with empty array arg gets rid of ESLint error for missing dependencies
    // const useMountEffect = (func) => useEffect(func, [])
    // const renderInitialPosts = () => {
    //   for (let i = 0; i < 6; i++) {
    //     //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
    //     if(allOldestPosts[i]) {
    //         newPostList.push(allOldestPosts[i]);
    //     }
    //     if(!allOldestPosts[6]) {
    //       //if there aren't enough posts, hide show more button
    //       setHideShowMore(true);
    //     }
    //   }
    //   return setPosts(newPostList);
    // }
    // useMountEffect(renderInitialPosts);
    
    useEffect(() => {
      const renderInitialPosts = () => {
        for (let i = 0; i < 6; i++) {
          //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
          if(allOldestPosts[i]) {
            newPostList.push(allOldestPosts[i]);
          }
          if(!allOldestPosts[6]) {
            //if there aren't enough posts, hide show more button
            setHideShowMore(true);
          }
        }
        return setPosts(newPostList);
      }
      renderInitialPosts();
    }, [allOldestPosts, newPostList]);

    //write a function that will update state to show 6 more posts
    const showMorePosts = (clickCount, isFinished) => {
        const newClickCount = clickCount+1;
        
        //if isFinished = true, reset everything to show first 6 posts once again
        if(isFinished) {
            for (let i = 0; i < 6; i++) {
              //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
              if(allOldestPosts[i]) {
                newPostList.push(allOldestPosts[i]);
              }
            }
            setPosts(newPostList);
            setClickCount(1);
            setIsFinished(false);
        //Otherwise, show 6 more posts by replacing what's on the page with itself + another 6
        } else {
            //take clickCount as an input, and loop over 6 times for each click
            //reset state to reflect new results
            for (let i = 0; i < newClickCount * 6; i++) {
              //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
              if (allOldestPosts[i]) {
                newPostList.push(allOldestPosts[i]);
              } else {
                  setIsFinished(true);
              }         
            }
            //update state properties
            setPosts(newPostList);
            setClickCount(newClickCount);
        }
    }

  return (
      <Layout>
        <SEO title='Oldest Articles' />
        <HeaderStrip2 
            title='Oldest Articles'
            headline='See all of the older posts in our archive'
            image={archiveHeader}
        />
        <div className='OldestPosts'>
            <div className='grid-wrapper'>
                <div className='grid-header'>
                  <h4>All Oldest Articles</h4>
                </div>
                <div className='grid'>
                    
                    {/* Loop over posts in state and show PostLinks for each */}
                    {posts.map(edge => <PostLink key={edge.node.id} post={edge} />)}
                
                </div>
                <div className='btn-container'>
                  <ButtonSecondary link='/news' content ='← News Page' />
                  {hideShowMore ? '' : <ShowMoreButton content='Show more' clickCount={clickCount} isFinished={isFinished} showMorePosts={showMorePosts} />}
                  <ButtonPrimaryAlt link="/news/categories" content='All Categories →' />
                </div>
            </div>
        </div>
      </Layout>
  )
};

export default OldestPage;

//Query our post frontmatter to get relative paths for the images they may be referencing
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}, filter: {}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
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