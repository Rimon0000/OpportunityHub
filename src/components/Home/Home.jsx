import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Category></Category>
        </div>
    );
};

export default Home;