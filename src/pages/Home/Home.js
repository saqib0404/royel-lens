import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import { BsMessenger } from "react-icons/bs";

const Home = () => {
    return (
        <div>
            <a href=""> <BsMessenger className="msnger" /></a>
            <Banner />
        </div>
    );
};

export default Home;