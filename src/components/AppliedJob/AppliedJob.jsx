import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';


const AppliedJob = () => {
    const {cart} = useLoaderData()

    // option-1 
    // const [selectItem, setSelectItem] = useState(cart)
    // useEffect(() =>{
    //     const storedJobs = getShoppingCart()
    //     let saveJobs = [];
    //     for(const id in storedJobs){
    //         const addedJobs = cart.find((data) => data.id === id)
    //         if(addedJobs){
    //             saveJobs.push(addedJobs)
    //         }
    //         setSelectItem(saveJobs)
    //     }

    // }, [cart])

    // const handleRemote = () =>{
    //     const remote = selectItem.filter(cart => cart.remote_or_onsite === 'Remote')
    //     setSelectItem(remote)
    //     console.log(remote)

    // }
    // const handleOnside = () =>{
    //     const onside = selectItem.filter(cart => cart.remote_or_onsite === 'Onsite')
    //     setSelectItem(onside)
    //     console.log(onside)
    // }
  

    // option-2 
    const [selectItem, setSelectItem] = useState('')
    const handleChange = (event) =>{
        // console.log(event.target.value)
        setSelectItem(event.target.value)
    }
    const filterAppliedItem = cart.filter(jobItem => jobItem.remote_or_onsite === selectItem || selectItem === '')
    console.log(filterAppliedItem)

    return (
        <div>
            {/* <button onClick={handleRemote}>remote</button>
            <button onClick={handleOnside}>onside</button> */}

            <h2 className='text-2xl font-bold text-center mt-10'>Applied Jobs</h2>
    
                <div className='text-end my-10'>
                  <select value={selectItem} onChange={handleChange}>
                    <option value="" className='bg-slate-300 px-8 py-2'>Filter By</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                  </select>
               </div>

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