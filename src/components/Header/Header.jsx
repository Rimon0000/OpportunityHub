import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className='header sm:grid grid-cols-12 sm:gap-5 lg:grid-cols-3'>
            <h1 className='header-logo'>OpportunityHub</h1>
            <div className='li-list sm:my-4 '>
               <Link to="/">Home</Link>
               <Link to="/statistics">Statistics</Link>
               <Link to="/applied">Applied Jobs</Link>
               <Link to="/blog">Blog</Link>
            </div>
            <div className='lg:text-end sm:text-start'>
                <Link><button className='btn-applying'>Start Applying</button></Link>
            </div>
        </nav>

    );
};

export default Header;