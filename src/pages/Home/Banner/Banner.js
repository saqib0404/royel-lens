import React from 'react';
import banner from '../../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <img className='banner' src={banner} alt="" />
        </div>
    );
};

export default Banner;