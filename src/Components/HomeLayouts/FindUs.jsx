import { Facebook } from 'lucide-react';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us On </h2>
            <button className='flex gap-2 btn btn-outline w-full justify-start border-gray-300 join-items'> <CiFacebook color='blue' />Facebook</button>
            <button className='flex gap-2 btn btn-outline w-full justify-start border-gray-300 join-items'> <FaTwitter color='skyblue'  />Twitter</button>
            <button className='flex gap-2 btn btn-outline w-full justify-start border-gray-300 join-items'> <FaInstagram color='pink' />Instagram</button>
        </div>
    );
};

export default FindUs;