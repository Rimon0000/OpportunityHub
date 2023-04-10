import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';

const AppliedJob = () => {
    const {cart} = useLoaderData()
    // console.log(cart)

    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-10'>Applied Job</h2>
            {
                cart.map(job => <ReviewJob 
                    job = {job}
                    key = {job.id}
                    ></ReviewJob>)
            }
        </div>
    );
};

export default AppliedJob;