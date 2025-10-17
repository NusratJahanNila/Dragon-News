import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className='w-3/4 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-3/4 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
                <section className='left-nav'></section>
                <section className='main-nav'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;