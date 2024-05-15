import React from 'react';
import { Link } from 'react-router-dom';

const PopularServicesCard = ({ service }) => {
    const { price, providerName, providerImage, service_name, service_area, service_image, short_description } = service

    return (
        <div className="card glass bg-base-100 rounded-md lg:max-w-5xl max-w-4xl mb-6 p-2 md:grid grid-cols-2 h-max">
            <div className='flex items-center rounded-md'>
                <figure><img className='w-full rounded-md' src={service_image} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <div className="flex items-center space-x-3">
                    <img src={providerImage} alt={providerName} className="object-cover object-center w-10 h-10 rounded-full shadow-sm" />
                    <div className="-space-y-1">
                        <h2 className="font-semibold leading-none">{providerName}</h2>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold mt-4">{service_name}</h2>
                <div className='space-y-2'>
                    <p>{short_description.slice(0, 101)}</p>
                    <p><span className='font-semibold'>Service Area:</span> {service_area}</p>
                    <p className=''><span className='font-semibold '>Price: </span>${price}</p>
                </div>
                <div className="card-actions justify-end mt-auto">
                    <Link to={`/detail/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PopularServicesCard;