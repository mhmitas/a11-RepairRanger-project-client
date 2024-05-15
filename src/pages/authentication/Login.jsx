import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import ReactHelmet from '../../components/helmet/ReactHelmet';
import { GoogleAuthProvider } from 'firebase/auth';
import ErrorMessageInsideForm from '../../components/errorMessage/ErrorMessage';


const Login = () => {
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const { loginUser, popUpSignIn, setLoading } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        // console.log(data);
        loginUser(data.email, data.password)
            .then(result => {
                // console.log(result.user);
                toast.success('Login success')
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                // console.error(error);
                setLoading(false)
                setError(error.message)
                console.log(error.message);
            })
    }

    function handlePopupSignIn(provider) {
        popUpSignIn(provider)
            .then(result => {
                // console.log(result.user);
                toast.success('Login success')
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
                setError(error.message)
                console.log(error.message);
            })
    }

    return (
        <>
            <div className=' max-w-md mx-auto p-14 my-20 bg-base-100  shadow-lg rounded-md '>
                <h3 className='text-3xl font-semibold text-center mb-6'>Sign in</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full  *:mb-4'>
                    {error && <ErrorMessageInsideForm text2={error.slice(9)} />}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            autoFocus
                            type="email"
                            required
                            {...register("email")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            required
                            {...register("password")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control my-8">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </form>
                <p className="mt-6">
                    Don't have an account? Please
                    <Link to="/sign-up" className="link link-primary ml-2">
                        Sign up
                    </Link>
                </p>
                <div className="divider mt-6">Or continue with</div>
                <div className="form-control">
                    <div className="flex justify-center space-x-2 mt-4">
                        <button
                            onClick={() => handlePopupSignIn(googleProvider)}
                            className="btn btn-outline btn-icon btn-google">
                            <FaGoogle className='text-xl' /> Google
                        </button>
                    </div>
                </div>
            </div>
            <ReactHelmet title="Login"></ReactHelmet>
        </>
    );
};

export default Login;