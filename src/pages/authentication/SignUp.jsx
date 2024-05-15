import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import { ServerContext } from '../../providers/ServerLinkProveder'
import ReactHelmet from '../../components/helmet/ReactHelmet';
import ErrorMessageInsideForm from '../../components/errorMessage/ErrorMessage';
const SignUp = () => {
    const [error, setError] = useState('')
    const { serverLink } = useContext(ServerContext)
    const navigate = useNavigate()
    const { createUser } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onSubmit(formData, e) {
        createUser(formData.email, formData.password)
            .then(result => {
                const photo = formData.photoUrl || null
                updateProfile(result.user, {
                    displayName: formData.userName, photoURL: photo
                }).then(() => {
                    e.target.reset()
                }).catch((error) => {
                    console.error(error);
                });
                // post user in mongodb users collection
                const { photoUrl, userName, email } = formData
                const userData = { userName, email, photoUrl, uid: result.user.uid, metadata: result.user.metadata }
                axios.post(`${serverLink}/users`, userData)
                    .then(function (response) {
                        // console.log(response.data);
                        response.data.insertedId && toast.success('Sign up success');
                        // console.log(result.user);
                        navigate('/')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className=' max-w-md mx-auto p-14 my-20 bg-base-100 shadow-lg rounded-md '>
                <h3 className='text-3xl font-semibold text-center mb-6'>Sign up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full *:mb-3'>
                    {error && <ErrorMessageInsideForm text2={error.slice(9)} />}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            autoFocus
                            type="text"
                            required
                            {...register("userName")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
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
                            {...register("password", { required: true, minLength: 6 })}
                            type='password'
                            className='input input-bordered'
                            required
                            name="password"
                        />
                        {/* validate password */}
                        {errors.password && errors.password.type === "minLength" && (<span className='text-error p-1'>Password should be at least 6 characters</span>)}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            // required
                            {...register("photoUrl")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Sign up" />
                    </div>
                </form>
                <p className="my-6">
                    Already have an account? Please
                    <Link to="/login" className="link link-primary ml-2">
                        Sign in
                    </Link>
                </p>
            </div>
            <ReactHelmet title="Sign up"></ReactHelmet>
        </div>
    );
};

export default SignUp;