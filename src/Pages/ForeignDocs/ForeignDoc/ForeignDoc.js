import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './ForeignDoc.css'

const ForeignDoc = ({docs}) => {
    const{name ,id ,  img , spealist , profession} = docs
    return (
        <div>
        <div className="card mb-3 p-3 doc">
             <div className="row g-0">
                <div className="col-md-4">
                <img src={img} height="200px" width="200px" className="img-fluid h-75 rounded-start"  alt="..."/>
                
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{spealist.slice(0,100)}</p>
                    <p className="card-text"><small className="text-muted">{profession}</small></p>
                </div>
            </div>
            <Link to={`/foreigndoctors/${id}`} ><Button className="ms-3 fw-bold mt-2 px-3 py-3 rounded-pill" variant="outline-success">Appoinment</Button></Link>
         </div>
    </div>
    </div>
    );
};

export default ForeignDoc;