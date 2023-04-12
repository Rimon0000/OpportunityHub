import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';
import './AppliedJob.css'


const AppliedJob = () => {
    const {cart} = useLoaderData()

  
    const [selectItem, setSelectItem] = useState('')
    const handleChange = (event) =>{
        setSelectItem(event.target.value)
    }
    const filterAppliedItem = cart.filter(jobItem => jobItem.remote_or_onsite === selectItem || selectItem === '')
    // console.log(filterAppliedItem)
    
    return (
        <div className='applied-container'>
            <div className='applied-jobs' >
            <h2 className='title text-2xl font-bold text-center mt-10'
            style={{backgroundImage: `url("https://i.ibb.co/GFq27Qk/Vector.png")`}}
            >Applied Jobs</h2>
            </div>
              <div className='applied-details'>
                    <div className='text-end my-10'>
                        <select value={selectItem} onChange={handleChange}>
                          <option value="" className='bg-slate-300 px-8 py-2'>Filter By</option>
                          <option value="Remote">Remote</option>
                          <option  value="Onsite">Onsite</option>
                        </select>
                     </div>
      
                  {
                      filterAppliedItem.map(job => <ReviewJob 
                          job = {job}
                          key = {job.id}
                          ></ReviewJob>)
                  }
              </div>
        </div>
    );
};

export default AppliedJob;