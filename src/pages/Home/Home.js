import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import { BsMessenger } from "react-icons/bs";

const Home = () => {
    return (
        <div>
            <BsMessenger className="msnger" size={40} />
            <Banner />
        </div>
    );
};

export default Home;