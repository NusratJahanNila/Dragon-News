import React from 'react';
import logoImg from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={logoImg} alt="logo" className=''/>
            <p className='my-3 text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-medium'>{format(new Date(),'EEEE, MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;