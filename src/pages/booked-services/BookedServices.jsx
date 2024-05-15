import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ServerContext } from '../../providers/ServerLinkProveder';
import useAuth from '../../hooks/useAuth';
import BookedTableRow from './BookedTableRow';
import ReactHelmet from '../../components/helmet/ReactHelmet';

const BookedServices = () => {
    const { user } = useAuth()
    const { serverLink } = useContext(ServerContext);
    const [services, setServices] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        setDataLoading(true)
        axios.get(`${serverLink}/booked-services/${user.uid}`, { withCredentials: true })
            .then(res => {
                // console.log(res.data);
                setServices(res.data)
                setDataLoading(false)
            })
            .catch(error => {
                console.error(error)
                setDataLoading(false)
            })
    }, [])

    if (dataLoading) {
        return <span className='py-4 text-xl'>Loading...</span>
    }

    return (
        <div>
            <h3 className='font-semibold text-2xl my-6'>Booked Services</h3>
            {services.length > 0 ?
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left rtl:text-right">
                        <thead className="bg-base-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Service
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Provider
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Service Taking Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                services.map(s => <BookedTableRow service={s} key={s._id}></BookedTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
                :
                <span className='py-4 text-xl'>You have not booked any services.</span>
            }
            <ReactHelmet title="Booked Services"></ReactHelmet>
        </div>
    );
};

export default BookedServices;