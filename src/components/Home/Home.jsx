import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;