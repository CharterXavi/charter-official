import React, {useState} from 'react'
import './news.css'
import heroImage from '../../images/hero-image.jpeg'

const NewsStrip = () => {
    const [postList, setPostlist] = useState(
        [
            {
                title: 'The Latest News',
                category: 'Healthcare',
                date: 'July 20, 2020'
            },
            {
                title: 'The Latest News',
                category: 'Healthcare',
                date: 'July 20, 2020'
            },
            {
                title: 'The Latest News',
                category: 'Healthcare',
                date: 'July 20, 2020'
            },
            {
                title: 'The Latest News',
                category: 'Healthcare',
                date: 'July 20, 2020'
            }
        ]
    );

    return (
        <div className='NewsStrip'>
            <h2>Recent News</h2>
            <div className='card-container'>
                {postList.map(post => {
                    return (
                        <div className='card'>
                            <div className='image'>
                                <img src={heroImage} alt="Hero Image" />
                            </div>
                            <div className='info'>
                                <h4>{post.title}</h4>
                                <div className='metadata'>
                                    <p>Category: {post.category}</p>
                                    <p>{post.date}</p>
                                </div>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsStrip;