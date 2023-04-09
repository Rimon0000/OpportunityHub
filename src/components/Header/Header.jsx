import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className='header grid grid-cols-3'>
            <h1 className='header-logo'>OpportunityHub</h1>
            <div className='li-list'>
               <Link to="/">Home</Link>
               <Link to="/statistics">Statistics</Link>
               <Link to="/applied">Applied Jobs</Link>
               <Link to="/blog">Blog</Link>
            </div>
            <div>
                <Link><button className='btn-applying'>Start Applying</button></Link>
            </div>
        </nav>

    );
};

export default Header;