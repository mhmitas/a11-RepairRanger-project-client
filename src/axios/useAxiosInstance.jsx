import axios from 'axios';

// Create a new Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true
});

export default axiosInstance;