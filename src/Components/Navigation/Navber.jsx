
import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navber.css";

const Navber = () => {

    return (
        <div className='navber'>
          
        <div>
          <ul>
          <li><NavLink to={'/'} > Home</NavLink> </li> 
          <li><NavLink to={'/singin'} >SingIn</NavLink> </li> 
          <li><NavLink to={'/singup'} >SingUp</NavLink> </li>
          </ul> 
      </div>
           
     </div>
    );
};

export default Navber;