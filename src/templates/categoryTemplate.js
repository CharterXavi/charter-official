import './categoryTemplate.css';
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
// Components
import { graphql } from "gatsby";
import Layout from '../components/layout';
import HeaderStrip from '../components/header-strip/header-strip';
import archiveHeader from '../images/headers/archive.png';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import ButtonSecondary from '../components/buttons/button-secondary';
import PostLink from '../components/news/post-link';
import ShowMoreButton from '../components/buttons/show-more';


const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const catHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in the "${category}" category`

  const [posts, setPosts] = useState([]); //posts state begin as an empty array
  const [clickCount, setClickCount] = useState(1); //click count state begins as a 1
  const [isFinished, setIsFinished] = useState(false); //when posts are all shown, change state to setFinished:true
  const [hideShowMore, setHideShowMore] = useState(false); //when not enough posts, hide showMore button
  const allPosts = data.allMarkdownRemark.edges; //capture all posts from GraphQL query for showMore program
  const newPostList = [];


  //defining your own mountEffect function using useEffect with empty array arg gets rid of ESLint error for missing dependencies
  const useMountEffect = (func) => useEffect(func, [])
  const renderInitialPosts = () => {
    for (let i = 0; i < 6; i++) {
      //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
      if(allPosts[i]) {
        newPostList.push(allPosts[i]);
      }
      if(!allPosts[6]) {
        //if there aren't enough posts, hide show more button
        setHideShowMore(true);
      }
    }
    return setPosts(newPostList);
  }
  useMountEffect(renderInitialPosts);

  //write a function that will update state to show 6 more posts
  const showMorePosts = (clickCount, isFinished) => {
      const newClickCount = clickCount+1;
      
      //if isFinished = true, reset everything to show first 6 posts once again
      if(isFinished) {
          for (let i = 0; i < 6; i++) {
              //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
              if(allPosts[i]) {
                  newPostList.push(allPosts[i]);
              }
          }
          //reset state properties
          setPosts(newPostList);
          setClickCount(1);
          setIsFinished(false);
      //Otherwise, show 6 more posts by replacing what's on the page with itself + another 6
      } else {
          //take clickCount as an input, and loop over 6 times for each click
          //reset state to reflect new results
          for (let i = 0; i < newClickCount * 6; i++) {
              //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
              if (allPosts[i]) {
                  newPostList.push(allPosts[i]);
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
      <div className='category-container'>
        <HeaderStrip 
          title={`Category: ${category}`} 
          image={archiveHeader}
        />
        <div className='intro'>
          <h2>{catHeader}</h2>
          <div className='post-wrapper'>
            {posts.map(post => {
              return (
                <PostLink to={post.node.frontmatter.slug} key={post.node.frontmatter.title} post={post} />
              )
            })}
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
}
Category.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Category;


export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            category
            title
            featuredImage {
              relativePath
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