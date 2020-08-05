import React from 'react';
import './news.css';
import heroImage from '../../images/hero-image.jpeg';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import NewsCard from '../../components/news/news-card';

const NewsStrip = () => {
    return (
        <div className='NewsStrip'>
            <h2>Recent News</h2>
            <div className='card-container'>
                <NewsCard link='/news' title='News Article' date='8/1/2020' />
                <NewsCard link='/news' title='News Article' date='8/1/2020' />
                <NewsCard link='/news' title='News Article' date='8/1/2020' />
                <NewsCard link='/news' title='News Article' date='8/1/2020' />
            </div>
            <ButtonPrimaryAlt content='Visit our news page' link='/news' animation='fade-up' animationTime='900' />
        </div>
    );
};

export default NewsStrip;