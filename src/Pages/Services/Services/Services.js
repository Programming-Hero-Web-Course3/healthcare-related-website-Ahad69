import React, { useEffect, useState } from 'react';
import Service from '../SingleService/Service';
import './Services.css'

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data.slice(0,10)))
    },[])
    return (
        <div className="container mt-5 pb-5" >
            <h1 className="title fw-bold">Our Services : </h1>
                <div className="services">
            
            {
                services.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
            }
            </div>
          
        </div>
        
    );
};

export default Services;