import React from 'react';
import Banner from '../Banner/Banner';
import HomeSercvices from '../HomeServices/HomeSercvices';
import Machine from '../Machine/Machine';
import Provided from '../Provided/Provided';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <HomeSercvices></HomeSercvices>
            <Machine></Machine>
            <Provided></Provided>
        </div>
    );
};

export default Home;