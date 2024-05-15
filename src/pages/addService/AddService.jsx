import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { ServerContext } from '../../providers/ServerLinkProveder';
import toast from 'react-hot-toast';
import ReactHelmet from '../../components/helmet/ReactHelmet';

const AddService = () => {
    const { user } = useAuth()
    const { serverLink } = useContext(ServerContext)
    const { handleSubmit, register } = useForm()

    function onSubmit(formData, e) {
        const providerData = {
            providerName: user.displayName,
            providerEmail: user.email,
            providerImage: user.photoURL,
            providerUid: user.uid,
        }
        const addedAt = new Date()
        // console.log({ ...formData, ...providerData, addedAt });
        axios.post(`${serverLink}/add-service`, { ...formData, ...providerData, addedAt })
            .then(function (response) {
                // console.log(response.data);
                if (response.data.insertedId) {
                    e.target.reset()
                    toast.success('Service Added');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className='lg:w-4/5 mx-auto my-20 bg-base-100 p-12 lg:p-20'>
                <h3 className='text-3xl font-bold text-center mb-8'>Add a Service</h3>
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
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price")}
                                type="number"
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
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Image URL of the Service</span>
                            </label>
                            <input
                                {...register("service_image")}
                                type="text"
                                required
                                readOnly
                                defaultValue="https://i.ibb.co/XDpCJ3z/2212-q702-011-S-m005-c12-home-renovation.jpg"
                                className="input input-bordered w-full col-span-2" />
                        </div>

                        <textarea {...register("short_description")} className="textarea textarea-bordered my-2 md:col-span-2" required placeholder="Short Description"></textarea>

                        <input
                            type="submit" value="Add" className='btn mt-2 btn-primary w-full md:col-span-2' />
                    </div>
                </form>
            </div>
            <ReactHelmet title="Add a service"></ReactHelmet>
        </>
    );
};

export default AddService;
/*
● Image URL of the Service
● Service Name,
● Price,
● Service Area,
● Description
● Add button
*/