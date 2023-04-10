import React from 'react';
import './Banner.css'
import banner from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
           <section className='banner-container sm:grid grid-cols-12 lg:grid-cols-2 gap-16'>
            <div className='banner-details-container mt-24'>
                <h1>One Step <br /> Closer To Your <br /><span className='tagline'>Dream Job</span></h1>
                <p className='mt-4 banner-details'>Explore thousands of job opportunities with all the information you need. 
                    Its your future. Come find it. Manage all your job application from start 
                    to finish.</p>
                <button className='btn-started mt-5'>Get Started</button>
            </div>
            <div className='img-container'>
                <img className='banner-img' src={banner} alt="" />
            </div>
           </section>
        </div>
    );
};

export default Banner;