import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './SingleDocs.css'


const SingleDocs = () => {

    const {id} = useParams()
    const [services, setService] = useState([])
    const {user} = useAuth()
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ahad69/Ema-jon-by-react-firebase/main/public/onlinedocs.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setService(data)
        });
    },[])

    const service = services.find(fd => fd.id == id )
    console.log(service)
    return (
        <div className="single">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={service?.img} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                <h1 className="text-danger">{service?.name}</h1>
                <h5>{service?.spealist} </h5>
                <br />
                <br />
                <br />
                <h5>{service?.profession}</h5>
                </div>
                </div>
            </div>
            <h1><span className="span"> $ {service?.fees}</span></h1>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
        <input className="input m-3 p-2 w-25 rounded-pill" defaultValue={user.displayName} {...register("example")} /> 
        <br />
        <input className="input m-3 p-2 w-25 rounded-pill" defaultValue={user.email} {...register("email", { required: true })} />
        {errors.email && <span style={{color:"red"}}>This field is required</span>}
        <br />
        <input className="input m-3 p-2 w-25 rounded-pill" defaultValue="Deliver To Door" {...register("state", { required: true })} />
        <br />
        <input className="input m-3 p-2 w-25 rounded-pill" placeholder="Hosen Pur , Lal Mosjid , Sirajgonj " {...register("address", { required: true })} /> 
        <br />
        <input className="input m-3 p-2 w-25 rounded-pill" placeholder="01******" {...register("Number", { required: true })} /> 
        <br />
        
        <Link  to="/confirmation"  className="btn btn-danger mt-5 mb-5" > Confirm Appoinment</Link>
        </form>
        </div>
    </div>
    );
};


export default SingleDocs;