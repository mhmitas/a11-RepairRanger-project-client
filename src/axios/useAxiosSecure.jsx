import axios from 'axios';


const axiosSecure = axios.create({
    // baseURL: 'https://repairrangers-server.vercel.app',
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;

