import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import './Category.css'

const Category = () => {
const [category, setCategory] = useState([])

useEffect( () =>{
    fetch('category.json')
    .then(res => res.json())
    .then(data => setCategory(data))
}, [])

    return (
        <div className='category-container mt-24'>
            <h2 className='category-title text-center'>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='sm:grid grid-cols-12 lg:grid-cols-4 mt-8 gap-5'>
                {
                    category.map(job => <Job 
                        job = {job}
                        key = {job.id}
                        ></Job>)
                }
             </div>
        </div>
    );
};

export default Category;