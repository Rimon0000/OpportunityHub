import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './FeaturesJob.css'
import Feature from '../Feature/Feature';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const FeaturesJob = () => {
    const features = useLoaderData()
    // console.log(features)

    const [four, setFour] =useState([])
    useEffect(() =>{
        fetch('../features.json')
        .then(res => res.json())
        .then(data => setFour(data.slice(0, 4)))
    },[])
    console.log(four)

    const seeAllHandler = () =>{
        setFour(features)
    }
    
    return (
        <div>
            <Banner></Banner>
            <Category></Category>

            <div className='features-container mt-24'>
                 <h2 className='features-title text-center'>Featured Jobs</h2>
                 <p className='features-des text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                 <div className='sm:grid grid-cols-12 lg:grid-cols-2 mt-8 gap-5'>
                     {
                         four.map(feature => <Feature 
                             feature = {feature} 
                             key = {feature.id}
                             ></Feature>)
                     }
                 </div>
                 <div className='text-center'>
                 <button onClick={()=>seeAllHandler()} className='btn-see-all'>See All Jobs</button>
                 </div>
            </div>
        </div>
        
    );
};

export default FeaturesJob;