import React from 'react';
import './Feature.css'
import { Link } from 'react-router-dom';
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, salary, fulltime_partTime} = feature
    return (
        <div className='feature'>
            <img src={logo} alt="" />
            <h4 className='job-title'>{job_title}</h4>
            <p className='company-name'>{company_name}</p>
            <div className='remote-time flex gap-4 mt-3'>
                <p cla>{remote_or_onsite}</p>
                <p>{fulltime_partTime}</p>
            </div>
            
            <div className='location-salary flex gap-4 mt-4'>
                <div className='flex items-center justify-center'>
                    <MapPinIcon className="h-6 w-6" />
                    <p className='ml-2'>{location}</p>
                </div>

                <div className='flex items-center justify-center'>
                     <CurrencyDollarIcon className="h-6 w-6" />
                     <p className='ml-2'>Salary : {salary}</p>
                </div>
            </div>
            <Link><button className='btn-details'>View Details</button></Link>
        </div>
    );
};

export default Feature;