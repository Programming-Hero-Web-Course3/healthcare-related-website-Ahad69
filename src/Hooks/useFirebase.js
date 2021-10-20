import React, { useEffect } from 'react';
import { getAuth , GithubAuthProvider  ,FacebookAuthProvider  ,signOut,onAuthStateChanged, signInWithPopup, sendEmailVerification , sendPasswordResetEmail , signInWithEmailAndPassword ,  GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import authentication from '../Pages/Firebase/Firebase.init';


authentication()

const useFirebase = () => {
  const auth = getAuth();
  const [user , setUser] = useState({})
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState('')
  const [ isLogin , setIsLogin ] = useState(false)

  const provider = new GoogleAuthProvider();


  const logOut =()=>{
    signOut(auth)
    .then(() => {
        setUser({})
      })
}
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });
},[])


  const handleRegister =()=>{
   
    console.log(email , password)
    if(password.length <6 ){
      setError('pass must be 6')
      return;
    }
    if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(password))
    {
      setError('Password is not strong')
    }

    if(isLogin){
      loginProsses(email , password)
    }
    else{
      createNewUser(email , password)
    }
    
  }
  // sign up with google 
  const signUpWithGoogle =()=>{
    return signInWithPopup(auth, provider)
   .then(result => {
    
     setUser(result.user)
    })
    
   }

  const loginProsses = (email , password) =>{
   signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log("this is result" ,result)
      setUser(result.user)
      setError('')
    })
    .catch((error) => {
      setError(error.massage);
    })
  }

  const createNewUser =( email , password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      setUser(result.user)
      setError('');
      verifyEmail();
    })
    .catch((error) => {
      setError(error.message);
    })
  }
  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(result =>{
      
    })
  }
  const toggleLogin =e =>{
    setIsLogin(e.target.checked)
  }

  const emailHandler =(e)=>{
    setEmail(e.target.value)
  }
  const passwordHandler = (e) =>{
    setPassword (e.target.value)
  }
  const handleResetPassword =() =>{
    sendPasswordResetEmail(auth, email)
    .then(() => {
     
    })
  }
   
  
  return {
    user,
    toggleLogin,
    isLogin,
    createNewUser,
    logOut,
    handleRegister, 
    emailHandler,
    loginProsses, 
    passwordHandler , 
    handleResetPassword , 
    signUpWithGoogle, error
  }
};

export default useFirebase;