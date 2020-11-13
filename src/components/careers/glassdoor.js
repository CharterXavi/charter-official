import React, {useEffect, useState} from 'react';
import './glassdoor.css';

const GlassDoor = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className='GlassDoor'>
            <p>{data}</p>
            <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
        </div>
    );
}

export default GlassDoor;