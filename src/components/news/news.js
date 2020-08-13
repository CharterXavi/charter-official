import React from 'react';
import './news.css';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import NewsCard from '../../components/news/news-card';

const NewsStrip = (props) => {
    return (
        <div className='NewsStrip'>
            <h2>Recent News</h2>
            <div className='card-container'>
                {
                    props.posts.map(post => {
                        return <NewsCard 
                            link={post.node.frontmatter.slug} 
                            title={post.node.frontmatter.title} 
                            date={post.node.frontmatter.date} 
                            image={post.node.frontmatter.featuredImage.childImageSharp.fluid.src}
                            category={post.node.frontmatter.categories}
                        />
                    })
                }
            </div>
            <ButtonPrimaryAlt content='Visit our news page' link='/news' animation='fade-up' animationTime='900' />
        </div>
    );
};

export default NewsStrip;