import {Route, Routes, useNavigate, Navigate} from 'react-router-dom';
import React from 'react'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';



const Routers = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  return (
    <>
        <ToastContainer />
        <Routes>
            <Route element={(isLogin) ? <Home /> : <Navigate to="/login" />} path='/' />
            <Route element={(!isLogin) ? <Login /> : <Navigate to="/" />} path='/login' />
            <Route element={(!isLogin) ? <Register /> : <Navigate to="/" />} path='/register' />
            <Route element={<Error />} path='/*' />
        </Routes>
    </>
  )
}

export default Routers


