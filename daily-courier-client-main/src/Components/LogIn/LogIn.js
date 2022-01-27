import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {NavLink, useLocation, useHistory} from "react-router-dom";
import AuthContext, { FirebaseContext } from '../AuthContext/AuthContext';
import useAuthContext from '../AuthContext/UseAuthContext';
import LogInWithFirebase from '../Firebase/LogInFIrebase';
import './LogIn.css';



const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const emailValue = useRef();
    const passwordValue = useRef();

   const value = useAuthContext();
   console.log(value);
   const {user, logInwithGoogle, logInWithGitHub,  authStateChange, emailPasswordSingIn} = value;



    const onSubmitEvent = (e)=>{
        e.preventDefault();
        const getpassword = passwordValue.current.value;
        const getEmail = emailValue.current.value;
        emailPasswordSingIn(getEmail, getpassword);
        

    }

    const googleLogIn = ()=>{
        logInwithGoogle();
       
      
        


    }

    const githublogin = ()=>{
        logInWithGitHub();
    }


   
















    useEffect(()=>{
        authStateChange();
       
            if (user?.email) {
                history.push(location.state?.from.pathname || '/home')
            }
        

    },[user])


    


















    return (
        <div>
            <div className="login-container">
                <div className="logo-container">
                    <div className="login-logo">
                    <img src="https://i.ibb.co/0QZBjzP/dailycourier-logo.png" alt="" />
                    </div>
                    <p>Sing in to DailyCourier</p>
                </div>




               <div className="log-in-box">

               <div className="login-form-container">
                <Form onSubmit={onSubmitEvent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailValue}  style={{
                        
                    }} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordValue}  type="password" placeholder="Password" />
                </Form.Group>

               <div className="login-submit-btn">

                    <Button  style={{
                       
                        backgroundColor:'#2da44e'
                    }} type="submit">
                    Submit
                </Button>


              
               </div>
                </Form>

                </div>



               </div>



               <div className="login-another-container">
                   <p className='with-another'>Sing In With</p>

                   <div className="login-another-box">

                       <p onClick={googleLogIn} className='googleLogIn'><img src="https://i.ibb.co/D8fTgvz/google-icon.png" alt="" width='100px'/></p>
                       <p onClick={githublogin} className='gitHubLogin'><img src="https://i.ibb.co/0Q8npLX/github-icon.png" alt="" width='40px'/></p>










                   </div>




               </div>



               <div className="singUp-direction">

                   <div className="singUp-link">

                       New to DailyCourier?     <NavLink to='/register'> Create an account</NavLink>






                   </div>







               </div>








            </div>
            
        </div>
    );
};

export default LogIn;