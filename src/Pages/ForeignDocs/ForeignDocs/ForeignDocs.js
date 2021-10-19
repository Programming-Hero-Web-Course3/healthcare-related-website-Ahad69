import React from 'react';
import  { useEffect, useState } from 'react';
import ForeignDoc from '../ForeignDoc/ForeignDoc';
import './ForeignDocs.css'

const ForeignDocs = () => {
    
        const [doctors , setDoctors] =useState([])
    
        useEffect(()=>{
            fetch('./foreigndocs.json')
            .then(res=> res.json())
            .then(data => setDoctors(data))
        },[])
        return (
            <div className="container mt-5 pb-5" >
            <h1 className="title">Online Doctors : </h1>
                <div className="frDocs">
            {
                doctors.map(frdocs => <ForeignDoc
                    key={frdocs.id}
                    docs={frdocs}
                    ></ForeignDoc>)
            }
            </div>
          
        </div>
    );
    
};

export default ForeignDocs;