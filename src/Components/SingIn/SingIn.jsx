
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/firebase';


const SingIn = () => {

    const [showicon , setshowicon] =useState(false)

    const [ sucessLoginMessage , setsucessLoginMessage]=useState('')
    const [errorlogin , seterrorlogin]=useState('')

    const HandalSignIn = e =>{

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

            
        signInWithEmailAndPassword( auth , email, password)

        .then((Result) =>{

            const user = Result.user;
              
            setsucessLoginMessage('log in sucessfully')

            console.log(user)
        })
        .catch((error) => {
        
            const errorMessage = error.message;
            
            seterrorlogin(errorMessage)

            console.log(errorMessage)
        })

        console.log(email, password)
    }


  

    return (
        <div >
            
            <div className='mx-auto w-3/4 p-10 border m-10 ' > 

            <h2 className="text-4xl text-center">Please Sign-In</h2>
            <form onSubmit={HandalSignIn} className='relative'>
                
                <input className='mt-3 w-full py-2 px-2 rounded-xl' type="email" name="email" id="" placeholder='please input your email' required />
                <br />
                <input className='mt-3 w-full py-2 px-2 rounded-xl ' type={showicon ? "text": "password"} name="password" id="" placeholder='please input your password' required />
                <br />
                <span
                
                onClick={()=>{
                    setshowicon(!showicon)
                }}
                
                style={{
                    position:'absolute',
                    marginLeft: "95%",
                    marginTop:'-28px'
                    
                   

                }}>{showicon ? <FiEyeOff />:<FiEye /> }</span>

                <button className=' btn btn-primary mt-3 w-full py-2'>SingIn</button>
                
                <p className='mt-3'>If don't SingUp?  Please <Link style={{color:'green',
                textDecoration:'underline'
            }} to={'/singup'}>SingUp</Link></p>

                <p className='mt-3'> <Link style={{color:'skyblue',
                textDecoration:'underline'
            }} to={'/forgetpassword'}>ForgetPassword</Link></p>
              
              
            
            </form>

              
              { errorlogin && <p className='text-red-500'>{errorlogin}</p>}
              
             { sucessLoginMessage && <p className='text-green-500'>{sucessLoginMessage}</p>}
            </div>
        </div>
    );
};

export default SingIn;