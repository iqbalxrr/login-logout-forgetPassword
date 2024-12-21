
import React from 'react';
import Navber from './Components/Navigation/Navber';
import { Outlet } from 'react-router-dom';
import SingIn from './Components/SingIn/SingIn';
import SingUp from './Components/Singup/Singup';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            
            <Outlet>
            <SingIn></SingIn>
            <SingUp></SingUp>
            </Outlet>
        </div>
    );
};

export default Root;