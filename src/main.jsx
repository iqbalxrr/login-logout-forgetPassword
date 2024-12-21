import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navber from './Components/Navigation/Navber';
import Root from './Root';
import SingIn from './Components/SingIn/SingIn';

import Home from './Components/Home/Home';
import SingUp from './Components/SingUp/SingUp';
import ForgetPassword from './Components/SingUp/ForgetPassword/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      
      {
        path:'/singin',
        element:<SingIn></SingIn>
      },

      {
        path:'/singup',
        element: <SingUp></SingUp>
      }
      ,
      {
        path: '/forgetpassword',
        element: <ForgetPassword></ForgetPassword>
      }
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
