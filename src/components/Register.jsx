import React, { useState } from 'react';
import {login} from '../assets'
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import {app} from './Firebase';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber , signInWithPopup , GoogleAuthProvider } from "firebase/auth";

const Register = () => {

  const navigate = useNavigate();

  const [phone , setPhone] = useState('');
  const auth = getAuth(app);

  const loginWithGoogle = () => {
    event.preventDefault();
    console.log("clicked");

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth , provider)
    .then((res) => {
      console.log(res);
      navigate('/');
    }).catch((error) => {
      console.log(error);
    })
  }

  // const sendOtp = () => {
  //   event.preventDefault();
  //   console.log(phone);
  //   const auth = getAuth(app);
  //   const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
  
  //   signInWithPhoneNumber(auth , phone , appVerifier)
  //   .then(res=>{
  //     console.log(res);
  //     console.log("OTP sent");
  //   })
  //   .catch((error)=>{
  //      console.log("error");
  //   });
  // }
  
  return (
    <div className='py-14 sm:px-4 lg:px-22 flex flex-col justify-center items-center sm:flex-row w-[100%]'>
      <div className='hidden sm:block w-[50%]'>
         <img width={"100%"} className='' src={login} alt="" />
      </div>

      <div className='sm:w-[50%] as:w-[100%] ss:w-[80%] as:px-4 xs:px-8  lg:py-32'>
        <form action="register" className='as:px-5 xs:px-6 py-16 shadow-lg shadow-indigo-500/40'>
            <div className='as:text-[30px] lg:text-[38px] as:text-center sm:text-start font-bold'>Create an <span className='text-primary'>Account</span></div>
            <div className='pt-10'>
                <button onClick={() => {loginWithGoogle()}} className='w-[100%] flex items-center justify-center rounded-lg py-3 text-[20px] font-semibold bg-primary text-white'>< FaGoogle /> <span  className='ml-2'>Google</span></button>
                <input onChange={(e) => {setPhone(e.target.value)}} type="phone" className='w-[100%] px-2 bg-white mt-7 border-2 border-gray-200 py-3 rounded-lg outline-none' placeholder='+91'/>
                {/* <div id='recaptcha-container'>gd</div> */}
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-between pt-8'>
                <button onClick={() => {sendOtp()}} className='rounded-lg py-3 px-6 text-[20px] font-semibold bg-primary text-white'>Create Account</button>
                <h3 className='mt-6'>Already Registered ? <NavLink className='text-primary' to={"/login"}>Login</NavLink></h3>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
