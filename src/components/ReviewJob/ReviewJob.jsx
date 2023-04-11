import React from 'react';
import './ReviewJob.css'
import { Link } from 'react-router-dom';
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'


const ReviewJob = ({job}) => {
    // console.log(job)
    const {id,job_title, logo, company_name, location, salary, remote_or_onsite, fulltime_partTime} = job
    return (
            <div className='review'>
                <div className='review-item  sm:grid grid-cols-12 lg:grid-cols-4 gap-8 mt-10'>
                <div className='logo-img'>
                <img src={logo} alt="" />
                </div>
                <div className='review-details lg:text-start sm:text-end'>
                    <p className='job-title'>{job_title}</p>
                    <p className='company-name'>{company_name}</p>
                    <div className='remote-time flex mt-3'>
                     <p>{remote_or_onsite}</p>
                     <p>{fulltime_partTime}</p>
                    </div>
                    <div className='location-salary flex mt-4'>
                         <div className='flex items-center justify-center'>
                             <MapPinIcon className="h-6 w-6" />
                             <p className='ml-2'>{location}</p>
                         </div>
         
                         <div className='flex items-center justify-center'>
                              <CurrencyDollarIcon className="h-6 w-6" />
                              <p className='ml-2'>Salary : {salary}</p>
                         </div>
                    </div>
                </div>
                
                <div className='text-end col-span-2'>
                <Link to={`/feature/${id}`}><button className='btn-details'>View Details</button></Link>
                </div>
                </div>
            </div>
    );
};

export default ReviewJob;