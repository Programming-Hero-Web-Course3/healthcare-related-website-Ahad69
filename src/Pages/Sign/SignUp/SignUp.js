import React from 'react';
import {  faGoogle  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link , useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const {handleRegister, 
        emailHandler , 
        passwordHandler, 
        handleResetPassword , createNewUser , signUpWithGoogle , error}= useAuth()
    
        const location = useLocation()
        const history = useHistory()
        const redirect = location.state?.from || '/home'
        

        const handleGoogle = () =>{
            signUpWithGoogle()
            .then(result =>{
                history.push(redirect)
            })
        }

    return (
        <div className="login-form">
        <form onSubmit={handleRegister}>
            <div className="m-5">
                <h1>Registration</h1>
                <input onBlur={emailHandler} className="input m-3 p-2 w-25 rounded-pill" type="text" placeholder="First Name" required/>
                <br />
                <input onBlur={emailHandler} className="input m-3 p-2 w-25 rounded-pill" type="text" placeholder="Last Name" required/>
                <br />
                <input onBlur={emailHandler} className="input m-3 p-2 w-25 rounded-pill" type="email" placeholder="Email" required/>
                <br />
                <input onBlur={passwordHandler} className="input m-3 p-2 w-25 rounded-pill" type="password" placeholder="Password" required/>
                <br />
                <input className="input m-3 p-2 text-white fw-bold fs-5  w-25 bg-danger" type="submit" value="Submit" />
                
            </div>
            <button onClick={handleResetPassword}>Reset Password</button>
        </form>
        <p className="text-danger mt-5 fw-bold">{error}</p>
        <button className="btn btn-secondary  rounded-pill" onClick={handleGoogle}> <FontAwesomeIcon icon={faGoogle} /> Google</button>
        <Link to="/login"> <h5>Already Register ?</h5></Link>
    </div>
    
    );
};

export default SignUp;