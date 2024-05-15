import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ServerContext } from '../../providers/ServerLinkProveder';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import ReactHelmet from '../../components/helmet/ReactHelmet';


const BookNow = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const { handleSubmit, register } = useForm()
    const { serverLink } = useContext(ServerContext)
    const navigate = useNavigate()
    // const [dataloading, setdataLoading] = useState(true);
    const [service, setService] = useState({})
    const { price, providerEmail, providerName, service_name, service_area, providerUid, service_image, _id } = service;
    console.log(service);
    useEffect(() => {
        axios.get(`${serverLink}/services/detail/${id}`)
            .then(function (response) {
                // console.log(response.data);
                setService(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function onSubmit(data) {
        const userUid = user.uid;
        const bookedAt = new Date()
        const status = 'pending'
        const serviceData = { service_name, service_image, price, serviceId: _id, providerName, providerEmail, providerUid, }
        const bookingData = { ...data, userUid, bookedAt, serviceData, status }
        axios.post(`${serverLink}/book-service`, bookingData)
            .then(function (response) {
                // console.log(response.data);
                if (response.data.insertedId) {
                    toast.success('Booking confirmed')
                    navigate(-1)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (user.uid === providerUid) { return <Navigate to='/'></Navigate> }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="card rounded-lg shadow-md">
                <h1 className="card-title text-2xl font-bold text-center py-4">Book Home Repair Service</h1>
                <div className="card-body">
                    <div className='bg-base-100 border border-base-300 my-8'>
                        <div className='bg-base-100 p-4 text-xl'>
                            <h3>Service Information</h3>
                        </div>
                        <div className='p-4 space-y-3'>
                            <p className='text-2xl font-semibold'>{service_name}</p>
                            <p><strong>Price: </strong>${price}</p>
                            <p><strong>Service area: </strong>{service_area}</p>
                            <p><strong>Provider: </strong>{providerName}</p>
                            <p><strong>Provider Email: </strong>{providerEmail}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="mt-4">
                                <label htmlFor="name" className="font-bold">Your Name:</label>
                                <input
                                    type="name"
                                    {...register("userName")}
                                    required
                                    defaultValue={user.displayName}
                                    readOnly
                                    id="name"
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="font-bold">Your Email:</label>
                                <input
                                    type="email"
                                    {...register("userEmail")}
                                    required
                                    defaultValue={user.email}
                                    readOnly
                                    id="email"
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="phone" className="font-bold">Your Phone:</label>
                                <input
                                    type="phone"
                                    {...register("userPhone")}
                                    required
                                    id="phone"
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="date" className="font-bold">Service Taking Date:</label>
                                <input
                                    type="date"
                                    {...register("serviceTakingDate")}
                                    required
                                    id="date"
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="address" className="font-bold">Address:</label>
                            <input
                                type="text"
                                {...register("userAddress")}
                                required
                                id="address"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="area" className="font-bold">Area:</label>
                            <input
                                type="text"
                                {...register("userArea")}
                                required
                                id="area"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="instructions" className="font-bold">Special Instructions:</label>
                            <textarea {...register("special_instruction")} required id="instructions" className="textarea textarea-bordered w-full" rows="3"></textarea>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="customPlan" className="font-bold">Customized Service Plan (Optional):</label>
                            <textarea id="customPlan" {...register("custom_plan")} className="textarea textarea-bordered w-full" rows="3"></textarea>

                        </div>
                        <div className="mt-8 text-center">
                            <button type='submit' className="btn btn-primary" id="purchaseButton">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
            <ReactHelmet title="Book now"></ReactHelmet>
        </div>

    );
};

export default BookNow;