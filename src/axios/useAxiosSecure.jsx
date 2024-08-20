import axios from 'axios';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export const axiosSecure = axios.create({
    baseURL: 'https://repairrangerserver-mh-mitas-projects.vercel.app/',
    // baseURL: 'http://localhost:3000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOutUser } = useAuth()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, (err) => {
            console.log('error tracked in the interceptor', err);
            if (err.response.status === 403) {
                console.log('Logout the user');
                logOutUser()
                    .then(() => {
                        navigate('/login')
                    })
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;

