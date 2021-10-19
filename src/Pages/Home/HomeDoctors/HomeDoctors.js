import React, { useEffect, useState } from 'react';
import {Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeDoctor.css'

const HomeDoctors = () => {
    const [services , setServices] = useState([])

    useEffect(()=>{
        fetch('./onlinedocs.json')
        .then(res => res.json())
        .then(data => setServices(data.slice(0,6)))

    },[])
    return (
        <div className="container pb-5 pt-5 mt-5">
        <h1 className="fw-bold">Our Doctors :</h1>
        <div className="homeDortors mt-5">
        {
            services.map(service=>
                <div className="homeDoctor p-2 ">
                        <Carousel>
                            <Carousel.Item>
                            <div>
                                <img className="rounded-circle" width="250px" src={service.img} alt="" />
                                </div>
                                <div className="text-start p-2">
                                <h1 className="mt-2 text-danger">{service.title}</h1>
                                <h4>{service.name}</h4>
                                
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div>
                                <img className="rounded-circle" width="250px" src={service.img} alt="" />
                                </div>
                                <div className="text-start p-2">
                                <h1 className="mt-2 text-danger">{service.title}</h1>
                                <h4>{service.name}</h4>
                            
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div>
                                <img className="rounded-circle" width="250px" src={service.img} alt="" />
                                </div>
                                <div className="text-start p-2">
                                <h1 className="mt-2 text-danger">{service.title}</h1>
                                <h4>{service.name}</h4>
                                
                            </div>
                            </Carousel.Item>
                    </Carousel>
                 <Link to={`/onlinedoctor/${service.id}`}><Button className="ms-3 mt-3 fw-bold px-5 py-3 rounded-pill" variant="outline-info">More</Button></Link>
                </div>
                )
        }
        </div>

    </div>
    );
};

export default HomeDoctors;