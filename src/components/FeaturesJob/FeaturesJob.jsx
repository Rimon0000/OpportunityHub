import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FeaturesJob.css'
import Feature from '../Feature/Feature';

const FeaturesJob = () => {
    const features = useLoaderData()
    // console.log(features)
    return (
        <div className='features-container mt-24'>
            <h2 className='features-title text-center'>Featured Jobs</h2>
            <p className='features-des text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='sm:grid grid-cols-12 lg:grid-cols-2 mt-8 gap-5'>
                {
                    features.map(feature => <Feature 
                        feature = {feature} 
                        key = {feature.id}
                        ></Feature>)
                }
            </div>
        </div>
    );
};

export default FeaturesJob;