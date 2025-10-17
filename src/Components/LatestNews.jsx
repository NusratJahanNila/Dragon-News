import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-2 rounded-md'>
            <p className='text-base-100 bg-secondary px-3 py-2 rounded-md'>Latest</p>
            <Marquee pauseOnHover={true} className='flex gap-5'>
                <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ex veritatis eos cupiditate.</p>
                <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ex veritatis eos cupiditate.</p>
                <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ex veritatis eos cupiditate.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;