
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { createUserWithEmailAndPassword } from 'firebase/auth';

import auth from '../Firebase/firebase';



  const SingUp = () => {

    const [showicon , setshowicon]=useState(false);

    const [ errormessage , seterrormessage]= useState('');

    const [ sucessmessage , setsucessmessage]= useState('');

  const HandalInput = e => {

    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    const terms = e.target.terms.checked;

    console.log(email , password , terms)
    
    //  empty stage 
    seterrormessage('')
    setsucessmessage('')

    // password cheake 
    
    if( password < 6){

      seterrormessage('please submit 6 charecter inside passward ')

      return;
    }
    else if( !/[A-Z]/.test(password) ){

      seterrormessage('please submit upper case inside password')

      return;
    }
    else if(!terms){
        
      seterrormessage('please select our terms and condition ')

      return;
    }
    createUserWithEmailAndPassword( auth , email , password)

    
    
   .then( (userCredential) =>{

    const user = userCredential.user;

    setsucessmessage('sign-up sucessfully');
    
    console.log(user);

   })
   .catch((erroe)=>{
    
    const errorMessage = erroe.message;

    seterrormessage(errorMessage);

    console.log(erroeMessage);

   })

  }

   
  
 
  
    return (
        <div >
            <div className='mx-auto w-3/4 border p-10 my-10 '>
            <h2 className="text-4xl text-center">Please Sign-Up</h2>

            <form className='relative' onSubmit={HandalInput} >
            <input className='mt-3 px-2 py-2 w-full rounded-xl ' type="email" name="email" id=""  placeholder='submit your email' required/>

            <br />

            <input className='mt-3 px-2 py-2 w-full rounded-xl' type={showicon ? 'text' : 'password'} name="password" id="" placeholder='submit your password' required />
            <br />
              
           <span  onClick={()=> setshowicon(!showicon)}
           
           style={{
                 position:'absolute',
                  marginLeft:'93%',
                  marginTop:'-28px',
           }}>{ showicon ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}</span>

            <button className='btn btn-secondary mt-3 w-full' >Sing-Up</button>

            <input className='mt-4'  type="checkbox" name="terms" id="" />
            <label htmlFor="terms"> select our  terams and condition </label>

            <p className='mt-3'>Alredy SingUp ?  Please <Link style={{color:'green',
                textDecoration:'underline'
            }} to={'/singin'}>Login</Link></p>

            </form>
            { errormessage && <p className='text-red-500'>{errormessage}</p>}
            { sucessmessage && <p className='text-green-500'>{sucessmessage}</p>}
            </div>
            
       </div>
    );
};

export default SingUp;