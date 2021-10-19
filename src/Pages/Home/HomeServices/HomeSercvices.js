import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Carousel} from 'react-bootstrap'
import './HomeServices.css'

const HomeSercvices = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data.slice(0,6)))
    },[])
    return (
        <div className="container pt-5 mt-5">
            <h1 className="fw-bold">Our Services :</h1>
            <div className="homeServices mt-5">
            {
                services.map(service=>
                    <div className="container"> 
                        <div className="homeService">
                            <img height="200px" src={service.img} alt="" />
                            <br />
                            <h1 className="mt-5 text-danger">{service.title}</h1>
                            <br />
                            <Link to={`/services/${service.id}`}><Button className="ms-3 mt-3 fw-bold px-5 py-3 rounded-pill" variant="outline-info">More</Button></Link>
                        </div>
                     
                     </div> 
                )}
            </div>

        </div>
    );
};

export default HomeSercvices;