import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './ForeignSingleDoc.css'

const ForeignSingleDoc = () => {
    const {id} = useParams()
    const [services, setService] = useState([])
    const {user} = useAuth()
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ahad69/Ema-jon-by-react-firebase/main/public/foreigndocs.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setService(data)
        });
    },[])

    const service = services.find(fd => fd.id == id )
    console.log(service)
    return (
        <div>
            <div className="single m-4">
            <div className="">
               <img width="500px" src={service?.img} alt="" />
              </div>
               <div className="ahad mt-5 ms-5">
               <h1 className="text-danger">{service?.name}</h1>

               <br />
               <h5>{service?.spealist} </h5>
               <br />
               <br />
               <p>{service?.profession}</p>
               <br />
               <div className="add-cart-btn ms-5  text-center">
                    <div className="m-5">
                     <h1>$ <span id="phone-total">{service?.fees}</span></h1></div>
                </div>
               <br /> <br />
               
               <br /> <br />
            
               </div>
        </div>
                    <br />
                    <br />
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
                <input className="input m-3 p-2 w-25 rounded-pill" defaultValue="Hosen Pur , Lal Mosjid , Sirajgonj " {...register("address", { required: true })} /> 
                <br />
                <input className="input m-3 p-2 w-25 rounded-pill" defaultValue="01790156861" {...register("Number", { required: true })} /> 
                <br />
                
                <Link className="btn btn-danger mt-5 mb-5" to="/confirmation"> Confirm Appoinment</Link>
                </form>
            </div>
        </div>
    );
};

export default ForeignSingleDoc;