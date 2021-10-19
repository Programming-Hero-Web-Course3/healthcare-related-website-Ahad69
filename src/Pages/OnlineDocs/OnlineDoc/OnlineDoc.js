import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './OnlineDoc.css'

const OnlineDoc = ({docs}) => {
    const{name ,id ,  img , spealist , profession} = docs
    return (
    <div>
    <div className="doc p-2">
        <div className="d-flex">
            <div>
            <img className="rounded-circle" width="150px" src={img} alt="" />
            <h3 className="mt-4 text-danger">{name}</h3>
            </div>
            <div className="text-start p-2">
            <h3>{profession}</h3>
            <br />
            <br />

            <p>Works :
            <br /> {spealist}</p>
            
            </div>
        </div>
         <Link to={`/onlinedoctor/${id}`} ><Button className="ms-3 fw-bold mt-4 px-5 py-3 rounded-pill" variant="outline-success">Appoinment</Button></Link>
        </div>
        </div>
    );
};

export default OnlineDoc;