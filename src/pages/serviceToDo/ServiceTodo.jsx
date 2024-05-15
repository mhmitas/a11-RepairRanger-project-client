import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { ServerContext } from '../../providers/ServerLinkProveder';
import axios from 'axios';
import ServicetodoCard from './ServicetodoCard';
import ReactHelmet from '../../components/helmet/ReactHelmet';

const ServiceTodo = () => {
    const { user } = useAuth()
    const { serverLink } = useContext(ServerContext)
    const [dataLoading, setDataLoading] = useState(true)
    const [servicesTodo, setServicesTodo] = useState([])
    useEffect(() => {
        setDataLoading(true)
        axios.get(`${serverLink}/services-todo/${user.uid}`, { withCredentials: true })
            .then(res => {
                // console.log(res.data);
                setServicesTodo(res.data)
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
        <div className=''>
            <h3 className='font-semibold text-2xl my-6'>Services To Do</h3>
            {servicesTodo.length > 0 ?
                <div className='overflow-x-auto min-h-screen'>
                    <table className="w-full text-left table h-full">
                        <thead className="border-b bg-base-100">
                            <tr>
                                <th>
                                    Service
                                </th>
                                <th>
                                    Client
                                </th>
                                <th>
                                    Address
                                </th>
                                <th>
                                    Service Taking Date
                                </th>
                                <th>
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicesTodo.map(service => <ServicetodoCard service={service} key={service._id}></ServicetodoCard>)}
                        </tbody>
                    </table>
                </div>
                :
                <span className='py-4'>You have not any services To Do</span>
            }
            <ReactHelmet title="Services Todo"></ReactHelmet>
        </div>
    );
};

export default ServiceTodo;