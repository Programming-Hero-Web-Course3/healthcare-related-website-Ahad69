import React from 'react';
import { Link } from 'react-router-dom';

const notFound = "https://i.ibb.co/xH11mts/20.jpg"
const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <img width="100%" height="600px" src={notFound} alt="" />
            <br />
            <Link to="/home" ><button className="rounded-pill bg-danger text-white p-3">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;