import './tagsTemplate.css';

import React, {useEffect, useState} from "react";

import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import ButtonSecondary from '../components/buttons/button-secondary';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import Layout from '../components/layout';
import PostLink from '../components/news/post-link';
import PropTypes from "prop-types";
import SEO from '../components/seo';
import ShowMoreButton from '../components/buttons/show-more';
import archiveHeader from '../images/headers/archive.png';
// Components
import { graphql } from "gatsby";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`


  //Write small algorithm to take the Tag name dynamically and convert it to uppercase first letter
  //It can then be used for a nice SEO title
  let tagTitle = '';
  let tagArray = [];
  for(let i = 0; i < tag.length; i++) {
    if(i === 0) {
      let firstLetter = tag[0].toUpperCase();
      tagArray.push(firstLetter);
    } else {
      tagArray.push(tag[i]);
    }
  }
  tagTitle = tagArray.join('');
  
  

  const [posts, setPosts] = useState([]); //posts state begin as an empty array
  const [clickCount, setClickCount] = useState(1); //click count state begins as a 1
  const [isFinished, setIsFinished] = useState(false); //when posts are all shown, change state to setFinished:true
  const [hideShowMore, setHideShowMore] = useState(false); //when not enough posts, hide showMore button
  const allPosts = data.allMarkdownRemark.edges;
  const newPostList = [];

  // //defining your own mountEffect function using useEffect with empty array arg gets rid of ESLint error for missing dependencies
  // const useMountEffect = (func) => useEffect(func, [])
  // const renderInitialPosts = () => {
  //   for (let i = 0; i < 6; i++) {
  //     //if this post exists, push it to the new list - helps avoid pushing 'undefined' nodes to list
  //     if(allPosts[i]) {
  //       newPostList.push(allPosts[i]);
  //     }
  //     if(!allPosts[6]) {
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
    renderInitialPosts();
  }, []);

  //write a function that will update state to show 6 more posts
  const showMorePosts = (clickCount, isFinished) => {
      const newClickCount = clickCount++;
      
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
          for (let i = 0; i < clickCount * 6; i++) {
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
      <SEO title={`${tagTitle} Articles`} />
      <div className='tags-container'>
        <HeaderStrip2 
          title={`Tag: ${tag}`} 
          image={archiveHeader}
        />
        <div className='intro'>
          <h4>{tagHeader}</h4>
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
            <ButtonPrimaryAlt link="/news/tags" content='All tags →' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
Tags.propTypes = {
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

export default Tags;


export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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