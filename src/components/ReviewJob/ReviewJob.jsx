import React from 'react';
import './ReviewJob.css'

const ReviewJob = ({job}) => {
    console.log(job)
    return (
        <div>
            <h2>review job: {job.job_title}</h2>
        </div>
    );
};

export default ReviewJob;