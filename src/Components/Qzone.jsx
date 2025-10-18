import React from 'react';
import swimImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGround from '../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-semibold mb-3'>Q-Zone </h2>
            <div className="space-y-5">
                <img src={swimImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;