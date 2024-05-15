import React, { useContext, useEffect, useState } from 'react';
// import { ServerContext } from '../../providers/ServerLinkProveder';
import ServiceCard from './ServiceCard';
import ReactHelmet from '../../components/helmet/ReactHelmet';
// import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import useAxiosSecure from '../../axios/useAxiosSecure';

const AllServices = () => {
    // const { serverLink } = useContext(ServerContext)
    const axiosSecure = useAxiosSecure()
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        setDataLoading(true)
        async function fetchData() {
            try {
                // const response = await axios.get(`${serverLink}/services`)
                const response = await axiosSecure.get('/services')
                setServices(response.data)
            } catch (error) {
                console.error(error);
            } finally {
                setDataLoading(false)
            }
        }
        fetchData()
    }, [axiosSecure])

    function handleSearch(e) {
        e.preventDefault()
        const searchVal = e.target.search.value
        // console.log(searchVal);
        setDataLoading(true)
        async function fetchData() {
            try {
                const response = await axiosSecure.get(`/services?search=${searchVal}`)
                setServices(response.data)
                // console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setDataLoading(false)
            }
        }
        fetchData()
    }

    return (
        <>
            {dataLoading ? <div className='absolute left-1/2 top-1/2'><span className="loading loading-spinner loading-lg"></span></div> : ''}
            <div className='md:w-[70%] mx-auto p-3 space-y-3 mb-10'>
                <div className='px-6 mb-4'>
                    <h3 className='text-3xl font-bold text-center mb-5'>Find the best repair service</h3>
                </div>
                <form onSubmit={handleSearch} className=''>
                    <label className="input input-bordered flex items-center gap-2 rounded-md ">
                        <input type="text" required className="grow" name="search" placeholder="Search the repair service by title " />
                        <button className='btn btn-neutral btn-sm px-4'>
                            <FaSearch></FaSearch>Search
                        </button>
                    </label>
                </form>
            </div>
            <div className='*:mx-auto'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <ReactHelmet title="All services"></ReactHelmet>
        </>
    );
};

export default AllServices;

// EKTA ERROR KHYECHILaM: useState e initial value dinai