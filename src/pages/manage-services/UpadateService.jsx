import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { ServerContext } from '../../providers/ServerLinkProveder';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReactHelmet from '../../components/helmet/ReactHelmet';
import toast from 'react-hot-toast';

const UpadateService = () => {
    const navigate = useNavigate()
    const [serviceLoading, setSeviceLoading] = useState(true)
    const { id } = useParams()
    // console.log(id);
    const { user } = useAuth()
    const { serverLink } = useContext(ServerContext)
    const { handleSubmit, register } = useForm()
    const [service, setService] = useState({})
    useEffect(() => {
        setSeviceLoading(true)
        axios.get(`${serverLink}/services/detail/${id}`)
            .then(function (response) {
                // console.log(response.data);
                setService(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => setSeviceLoading(false))
    }, [])

    const { price, providerName, providerImage, service_name, service_area, service_image, short_description } = service;

    function onSubmit(formData, e) {
        // console.log(formData);
        axios.put(`${serverLink}/services/put/${id}`, { ...formData })
            .then(function (response) {
                if (response.data.modifiedCount > 0) {
                    navigate(-1)
                    toast.success('Service Updated');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    if (serviceLoading) return <h3>Loading...</h3>
    return (
        <>
            <div className='lg:w-4/5 mx-auto my-20 bg-base-100 p-12 lg:p-20'>
                <h3 className='text-3xl font-bold text-center mb-8'>Update Service</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=''
                >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input
                                {...register("service_name")}
                                type="text"
                                required
                                defaultValue={service_name}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price")}
                                type="number"
                                defaultValue={price}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <input
                                {...register("service_area")}
                                type="text"
                                defaultValue={service_area}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Image URL of the Service</span>
                            </label>
                            <input
                                {...register("service_image")}
                                defaultValue={service_image}
                                type="text"
                                required
                                className="input input-bordered w-full col-span-2" />
                        </div>

                        <textarea {...register("short_description")} className="textarea textarea-bordered my-2 md:col-span-2" defaultValue={short_description} required placeholder="Short Description"></textarea>

                        <input
                            type="submit" value="Update" className='btn mt-2 btn-primary w-full md:col-span-2' />
                    </div>
                </form>
            </div>
            <ReactHelmet title="Update Service"></ReactHelmet>
        </>
    );
};


export default UpadateService;