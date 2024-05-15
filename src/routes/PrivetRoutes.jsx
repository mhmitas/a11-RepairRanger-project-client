import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()

    if (loading) {
        return <div className='absolute top-1/3 left-1/2'><span className='loading loading-lg loading-spinner text-primary'></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} replace={true} to="/login" />
};

export default PrivetRoutes;