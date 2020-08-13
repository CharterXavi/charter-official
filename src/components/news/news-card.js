import React from "react";
import { Link } from "gatsby";
import './news-card.css';

const NewsCard = (props) => (
    <Link to={props.link} className='NewsCard'>
        <div className='image'>
            <img src={props.image} alt="Hero Image" />
        </div>
        <div className='info'>
            <h4>{props.title}</h4>
            <div className='metadata'>
                <p>Category: {props.category}</p>
                <p>{props.date}</p>
            </div>
        </div>
    </Link>
);

export default NewsCard;