import React from "react";
import { Link } from "gatsby";
import './news-card.css';
import heroImage from '../../images/hero-image.jpeg';

const NewsCard = (props) => (
    <Link to={props.link} className='NewsCard'>
        <div className='image'>
            <img src={heroImage} alt="Hero Image" />
        </div>
        <div className='info'>
            <h4>{props.title}</h4>
            <div className='metadata'>
                <p>Category: *coming soon*</p>
                <p>{props.date}</p>
            </div>
        </div>
    </Link>
);

export default NewsCard;