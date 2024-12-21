
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/firebase';

const ForgetPassword = () => {

   const [ sucessMessage , setsucessMessage] = useState('');
    const [ errormessage , seterrormessage]= useState('');

    const HandalForgatePassword = (e)=>{
     
        e.preventDefault();

        const email = e.target.email.value;

        sendPasswordResetEmail( auth , email )

        .then( ()=>{

            setsucessMessage('Send a email .please cheak your email')
        })
        .catch(error =>{

        seterrormessage(error.message)
        
        })
        
    }

    return (
        <div className='mx-auto w-3/4 border p-10 my-10 '>  
            
           
      { sucessMessage && <p  className='text-green-500'>
         {sucessMessage}</p> }

    { errormessage && <p className='text-red-500'>{errormessage}</p>}   

      <form onSubmit={HandalForgatePassword} >
            
         <input   className='mt-3 w-full py-3 px-2 rounded-xl border' type="email" name="email" id="" placeholder='Enter email' />

       <button 
            className='btn btn-secondary mt-3 w-full py-2'>Send Email</button>
         </form>   
           
           
        </div>
    );
};

export default ForgetPassword;