import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayouts/LeftAside';
import RightAside from '../Components/HomeLayouts/RightAside';
import Loading from '../Components/Loading';

const HomeLayout = () => {
    // to show loading
    const {state}=useNavigation();

    return (
        <div>
            <header>
                <Header></Header>
                
                <section className='w-3/4 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-3/4 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-8 flex gap-6 '>
                {/* sticky top-0 h-fit == to make the sidebar sticky */}
                <aside className='w-1/4 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav w-2/4'>
                    {
                        state=='loading'? <Loading/> : <Outlet/>
                    }
                </section>
                <aside className='w-1/4  sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;