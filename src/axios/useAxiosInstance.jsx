import axios from 'axios';

// Create a new Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Your localhost URL
    withCredentials: true // Send cookies with the request
});

export default axiosInstance;