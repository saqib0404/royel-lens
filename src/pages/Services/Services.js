import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='h-[45vh]'>
            <h3 className='text-3xl font-semibold text-center mt-16'>Page Under Construction</h3>
            <Link to='/' className='btn w-max btn-accent text-center flex items-center mx-auto mt-5'>Go Back &nbsp;<AiOutlineArrowLeft /></Link>
        </div>
    );
};

export default Services;