import React from 'react';
import './SignIn.css'
import {  faGoogle  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,useLocation  ,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const SignIn = () => {

     const {handleRegister, 
        emailHandler , 
        passwordHandler, 
        handleResetPassword , signUpWithGoogle , error}= useAuth();

        const location = useLocation()
        const history = useHistory()
        const redirect = location.state?.from || '/home'
        console.log(location.state?.from)



        const handleGoogle = () =>{
            signUpWithGoogle()
            .then(result =>{
                history.push(redirect)
            })
        }
        const handleEmail = () =>{
            handleRegister()
            .then(result =>{
                history.push(redirect)
            })
        }
    
    return (
        <div className="login-form">
        <form onSubmit={handleEmail}>
            <div className="m-5">
                <h1>Login Here</h1>
                <input onBlur={emailHandler} className="input m-3 p-2 w-25 rounded-pill" type="email" placeholder="Email" required/>
                <br />
                <input onBlur={passwordHandler} className="input m-3 p-2 w-25 rounded-pill" type="password" placeholder="Password" required/>
                <br />
                <input className="input m-3 p-2 text-white fw-bold fs-5  w-25 bg-danger" type="submit" value="Submit" />
                
            </div>
            <button onClick={handleResetPassword}>Reset Password</button>
        </form>
        <p>{error}</p>
        <button className="btn btn-secondary  rounded-pill" onClick={handleGoogle}> <FontAwesomeIcon icon={faGoogle} /> Google</button>
        <Link to="/register"> <h5>Are New in Care Hospital ?</h5></Link>
    </div>
    
    );
};

export default SignIn;