import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <nav className='w-3/4 mx-auto py-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-3/4 mx-auto py-3'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;