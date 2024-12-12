import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';


const Protected = ({ user }) => {
    return user ? Outlet : <Navigate to='/login' />
}

export default Protected;
