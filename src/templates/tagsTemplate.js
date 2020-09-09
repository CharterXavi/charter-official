import './tagsTemplate.css';
import React, {useState, useEffect} from "react";
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


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const [posts, setPosts] = useState([]); //posts state begin as an empty array
  const [clickCount, setClickCount] = useState(1); //click count state begins as a 1
  const [isFinished, setIsFinished] = useState(false); //when posts are all shown, change state to setFinished:true
  const [hideShowMore, setHideShowMore] = useState(false); //when not enough posts, hide showMore button
  const allPosts = data.allMarkdownRemark.edges;
  const newPostList = [];

  //push first 6 posts to state upon mounting so the user gets the first posts upon loading the page
  useEffect(() => {
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
      setPosts(newPostList);
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
      <div className='tags-container'>
        <HeaderStrip 
          title={`Tag: ${tag}`} 
          image={archiveHeader}
        />
        <div className='intro'>
          <h2>{tagHeader}</h2>
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