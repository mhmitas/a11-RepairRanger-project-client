import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { ServerContext } from '../../providers/ServerLinkProveder';
import BookNow from '../book-now/BookNow';
import useAuth from '../../hooks/useAuth';
import { FaEdit } from 'react-icons/fa';
import ReactHelmet from '../../components/helmet/ReactHelmet';

const ViewDetail = () => {
    const { user } = useAuth()
    const { serverLink } = useContext(ServerContext)
    const { id } = useParams()
    const [service, setService] = useState([])
    const [error, setError] = useState(null)
    const [DataLoading, setDataLoading] = useState(true)
    const { price, providerEmail, providerName, providerImage, providerUid, service_name, service_area, service_image, short_description } = service;

    useEffect(() => {
        axios.get(`${serverLink}/services/detail/${id}`)
            .then(res => {
                // console.log(res);
                setService(res.data)
            })
            .catch(error => {
                console.log(error);
                setError(error)
            })
            .finally(() => {
                setDataLoading(false)
            })
    }, [])

    if (DataLoading) return <div className='absolute top-1/3 left-1/2'><span className='loading loading-lg loading-spinner text-primary'></span></div>

    if (error) {
        return <h3>{error.message}</h3>
    }

    return (
        <section className="mb-20">
            <div className="mx-auto md:grid grid-cols-5 shadow-lg p-6 w-full bg-base-100 rounded-md">
                <div className="flex flex-col py-8 space-y-4 rounded-sm col-span-2">
                    <h2 className="text-3xl md:text-4xl font-semibold mt-4">{service_name}</h2>
                    <p className=''>{short_description}</p>
                    <p><span className='font-semibold text-xl'>Price:</span> <span className='badge badge-lg'>${price}</span></p>
                </div>
                <div className="flex items-center justify-center p-4 col-span-3">
                    <img src={service_image} alt="" className="rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="border-l-4 border-primary p-4 sm:flex sm:space-x-6 my-16">
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={providerImage} />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-3xl font-semibold">{providerName}</h2>
                    <span><strong>Email:</strong> {providerEmail}</span>
                    <span><strong>Service Area:</strong> {service_area}</span>
                </div>
            </div>
            <div className='card-actions justify-end m-6'>
                {user.uid === providerUid ?
                    <Link to={`/update-service/${service._id}`}><button className='btn btn-sm btn-outline btn-primary'><FaEdit /></button></Link>
                    :
                    <Link to={`/book-service/${service._id}`}><button className="btn btn-primary mr-2">Book Now</button></Link>
                }
            </div>
            <ReactHelmet title="Service Detail"></ReactHelmet>
        </section >
    );
};

export default ViewDetail;

//<div className="overflow-x-auto ">
//    <table className="table md:w-1/2 lg:w-[50%]">
//        <tbody>
//            {/* row 1 */}
//            <tr className='border border-base-300'>
//                <th>Average cost</th>
//                <td>${average_cost}</td>
//            </tr>
//            {/* row 2 */}
//            <tr className="border border-base-300">
//                <th>Location</th>
//                <td>{location}</td>
//            </tr>
//            {/* row 3 */}
//            <tr className='border border-base-300'>
//                <th>Sesonality</th>
//                <td>{seasonality}</td>
//            </tr>
//            <tr className='border border-base-300'>
//                <th>Travel Time</th>
//                <td>{travel_time}</td>
//            </tr>
//            <tr className='border border-base-300'>
//                <th>Total Visitor Per Year</th>
//                <td>{total_visitor_per_year}</td>
//            </tr>
//        </tbody>
//    </table>
//</div>