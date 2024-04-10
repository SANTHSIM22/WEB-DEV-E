import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/login.jsx'
import './index.css'
import SignUP from './pages/signup.jsx'
import Home from './pages/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'signup',
    element:<SignUP/>
  },
  {
    path:'home',
    element:<Home/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
