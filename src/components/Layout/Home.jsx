import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div style={{position:'relative'}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;