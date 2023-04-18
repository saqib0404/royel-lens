import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import { BsMessenger } from "react-icons/bs";
import { toast } from 'react-hot-toast';
import Glassess from './Glassess/Glassess';

const Home = () => {
    const callToast = () => {
        toast("Website is under construction. Please visit our Facebook page")
    }
    return (
        <div>
            <a href="https://www.facebook.com/messages/t/105394095633208" target='_blank' rel="noreferrer" > <BsMessenger className="msnger z-10" /></a>
            <Banner onLoad={callToast()} />
            <Glassess />
            {/* <Shades /> */}
        </div>
    );
};

export default Home;