import React from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{title , id,  img , author, description} = service
    return (
    <div>
        <div className="card mb-3 p-3 service">
             <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..."/>
                
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0,100)}</p>
                    <p className="card-text"><small className="text-muted">{author}</small></p>
                </div>
            </div>
            <Link to={`/services/${id}`} ><Button className="ms-3 fw-bold mt-2 px-3 py-3 rounded-pill" variant="outline-success">Appoinment</Button></Link>
         </div>
    </div>
    </div>
    );
};

export default Service;