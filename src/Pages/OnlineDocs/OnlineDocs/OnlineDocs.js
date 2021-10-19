import React, { useEffect, useState } from 'react';
import OnlineDoc from '../OnlineDoc/OnlineDoc';
import './OnlineDocs.css'

const OnlineDocs = () => {
    const [doctors , setDoctors] =useState([])
    
    useEffect(()=>{
        fetch('./onlinedocs.json')
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="container mt-5 pb-5" >
        <h1 className="title">Online Doctors : </h1>
            <div className="docs">
        
        {
            doctors.map(docs => <OnlineDoc 
                key={docs.id}
                docs={docs}
                ></OnlineDoc>)
        }
        </div>
      
    </div>
    );
};

export default OnlineDocs;