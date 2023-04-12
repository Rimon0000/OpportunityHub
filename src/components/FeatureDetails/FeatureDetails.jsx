import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Details from '../Details/Details';
import './FeatureDetails.css'
import {CalendarDaysIcon, CurrencyDollarIcon, PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';

const FeatureDetails = () => {
    const features = useLoaderData()
    const id = useParams()
    
    // console.log(features)
    // console.log(id.featureId)

    const job = features.find(ft => ft.id === id.featureId)
    const {job_title, salary, job_description, job_responsibility, educational_requirements, years_of_experience, contact_info} = job
   
    //
    const handleAddToCart = (id) =>{
        // console.log(id)
        addToDb(id)
    }

    return (
        <div className='details-container'>
            <div className='details-jobs' >
            <h2 className='title text-2xl font-bold text-center mt-10'
            style={{backgroundImage: `url("https://i.ibb.co/GFq27Qk/Vector.png")`}}
            >Job Details</h2>
            </div>
            <div className='details-container feature-container feature-details sm:grid grid-cols-12 lg:grid-cols-2 mt-8 gap-10'>
                <div className='details'>
                    <p className='title'>Job Description: <span className='title-value'>{job_description}</span></p>
                    <p className='title mt-4'>Job Responsibility: <span className='title-value'>{job_responsibility}</span></p>
                    <h6 className='title mt-5'>Educational Requirements: <p className='title-value'>{educational_requirements}</p></h6>
                    <h6 className='title mt-4'>Experiences: <p className='title-value'>{years_of_experience}</p></h6>
                    
                </div>
                <div>
                <div className='apply-cart'>
                     <h2 className='details-title mb-4 text-xl font-bold'>Job Details</h2>
                     <hr />
                     <div className='flex items-center mt-5'>
                               <CurrencyDollarIcon className="h-6 w-6" />
                               <p className='title ml-2'>Salary : <span className='title-value'>{salary} (Per Month)</span></p>
                    </div>
                    <div className='flex items-center mt-2'>
                               <CalendarDaysIcon className="h-6 w-6" />
                               <p className=' title ml-2'>Job Title : <span className='title-value'>{job_title}</span></p>
                    </div>

                    <h2 className='details-title m-6 text-xl font-bold'>Contact Information</h2>
                    <hr />
                    <div className='flex items-center mt-5'>
                               <PhoneIcon className="h-6 w-6" />
                               <p className='title ml-2'>Phone : <span className='title-value'>{contact_info.phone}</span></p>
                    </div>
                    <div className='flex items-center mt-5'>
                               <EnvelopeIcon className="h-6 w-6" />
                               <p className='title ml-2'>Email : <span className='title-value'>{contact_info.email}</span></p>
                    </div>
                    <div className='flex items-center mt-5'>
                               <MapPinIcon className="h-6 w-6" />
                               <p className='title ml-2'>Address : <span className='title-value'>{contact_info.address}</span> </p>
                    </div>
                </div>
                <Link><button onClick={() =>handleAddToCart(id.featureId)} className='btn-apply'>Apply Now</button></Link>
                </div>
            </div>
        
        
        </div>
    );
};

export default FeatureDetails;