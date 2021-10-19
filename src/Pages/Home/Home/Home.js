import React from 'react';
import Banner from '../Banner/Banner';
import ForeignDoctors from '../ForeignDoctors/ForeignDoctors';
import HomeDoctors from '../HomeDoctors/HomeDoctors';
import HomeSercvices from '../HomeServices/HomeSercvices';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <HomeSercvices></HomeSercvices>
            <HomeDoctors></HomeDoctors>
            <ForeignDoctors></ForeignDoctors>
        </div>
    );
};

export default Home;