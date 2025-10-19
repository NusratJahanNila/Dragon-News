import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Outlet, useLoaderData, useParams } from 'react-router';
import RightAside from '../Components/HomeLayouts/RightAside';
import NewsDeatilsCard from '../Components/NewsDeatilsCard';

const NewsDetails = () => {
    const newsData=useLoaderData();
    const {id}=useParams();
    // console.log(id,newsData);
    const [news,setNews]=useState({});
    useEffect(()=>{
        const newsDetails=newsData.find(singleNews=>singleNews.id==id);
        setNews(newsDetails);
    },[newsData,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-8 flex gap-6 '>
                {/* sticky top-0 h-fit == to make the sidebar sticky */}
                <section className='main-nav w-3/4'>
                    <h1 className='font-semibold'> News Details</h1>
                    <NewsDeatilsCard news={news}></NewsDeatilsCard>
                </section>
                <aside className='w-1/4  sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;