import React from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{title , id,  img , author, description} = service
    return (
        <div>
    <div className="service p-2">
        <div className="d-flex">
            <div>
            <img width="250px" src={img} alt="" />
            </div>
            <div className="text-start p-2">
            <h1 className="mt-4 text-danger">{title}</h1>
            <p>By  : {author}</p>
            <h5>{description.slice(0,50)} .....</h5>
            </div>
        </div>
         <Link to={ `/services/${id}`}><Button className="ms-3 fw-bold mt-4 px-5 py-3 rounded-pill" variant="outline-info" >Click Here For More</Button></Link>
        </div>
        </div>
    );
};

export default Service;