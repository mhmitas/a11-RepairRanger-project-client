import React from 'react';
import Navbar from '../components/header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className=''>
                <Navbar></Navbar>
                <div className='p-3 lg:p-8 max-w-screen-2xl mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Root;