import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageservicesCard = ({ service, handleDelete }) => {
    const { price, providerName, providerImage, service_name, service_area, service_image, short_description } = service;
    return (
        <div className="max-w-96 shadow-md rounded-md duration-300 hover:shadow-xl bg-base-100 cursor-pointer p-2 ">
            <img src={service_image} alt="" className="w-full rounded-md max-h-44" />
            <div className="flex flex-col justify-between p-4">
                <div className="">
                    <h2 className="text-xl font-bold tracking-wide my-1">{service_name}</h2>
                    <p className="">{short_description.slice(0, 40)}{short_description.length > 20 && '...'}</p>
                </div>
                <div className='flex gap-4 mt-4 '>
                    <Link to={`/detail/${service._id}`}><button className='btn btn-sm btn-outline btn-primary'><FaEye className='' /></button></Link>
                    <Link to={`/update-service/${service._id}`}><button className='btn btn-sm btn-outline btn-primary'><FaEdit /></button></Link>
                    <button onClick={() => handleDelete(service._id)} className='btn btn-sm btn-outline btn-primary'><FaTrash></FaTrash></button>
                </div>
            </div>
        </div>
    );
};

export default ManageservicesCard;