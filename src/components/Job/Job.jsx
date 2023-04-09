import React from 'react';
import './Job.css'

const Job = ({job}) => {
    const {title, img, posts_available} = job
    return (
        <div className='job-container'>
            <img src={img} alt="" />
            <div className='job-details mt-5'>
                <h5 className='job-title'>{title}</h5>
                <p>{posts_available}</p>
            </div>
        </div>
    );
};

export default Job;